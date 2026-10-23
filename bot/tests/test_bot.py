from datetime import datetime, timedelta, timezone

from bot import format as fmt, outlook, sessions
from bot.config import TZ
from bot.data import Candle


def hourly_series(start_utc, hours, price=100.0, step=1.0):
    out = []
    for i in range(hours):
        p = price + i * step
        out.append(Candle(start_utc + timedelta(hours=i), p - 0.5, p + 1, p, p + 0.5))
    return out


def test_previous_session_window_and_dst():
    # 2026-03-09 is the Monday after US spring-forward; ET is UTC-4 so 9:30 ET = 13:30 UTC.
    now = datetime(2026, 3, 9, 13, 0, tzinfo=timezone.utc)  # 09:00 ET, pre-open
    candles = hourly_series(datetime(2026, 3, 5, 0, tzinfo=timezone.utc), 24 * 5)
    r = sessions.previous_session(candles, now)
    start = datetime(2026, 3, 8, 9, 30, tzinfo=TZ)
    expect = [c for c in candles if start <= c.time < now]
    assert r.high == max(c.high for c in expect)
    assert r.low == min(c.low for c in expect)


def test_high_low_empty():
    assert sessions.high_low([], datetime(2026, 1, 1, tzinfo=timezone.utc), datetime(2026, 1, 2, tzinfo=timezone.utc)) is None


def test_rsi_extremes():
    assert outlook.rsi([float(i) for i in range(30)]) == 100.0
    assert outlook.rsi([float(30 - i) for i in range(30)]) < 1


def test_ema_constant():
    assert outlook.ema([5.0] * 30, 20) == 5.0


def test_bias_uptrend_and_downtrend():
    up = [Candle(datetime(2026, 1, 1, tzinfo=timezone.utc) + timedelta(days=i), 99 + i, 101 + i, 100 + i, 100 + i) for i in range(80)]
    assert outlook.build(up, up[-1].close).bias == "Bullish"
    down = [Candle(c.time, c.low, c.high, c.open, 200 - i) for i, c in enumerate(up)]
    assert outlook.build(down, down[-1].close).bias == "Bearish"


def test_format_money_and_report():
    assert fmt.money(67890.4) == "$67,890"
    assert fmt.money(12.345) == "$12.35"
    assert fmt.money(None) == "n/a"
    assert "not financial advice" in fmt.report("T", ["x"])
