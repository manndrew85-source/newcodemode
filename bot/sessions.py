"""Session windows (US/Eastern, DST-aware) and high/low math over hourly candles."""
from dataclasses import dataclass
from datetime import datetime, time, timedelta

from .config import TZ

MARKET_OPEN = time(9, 30)
CASH_CLOSE = time(16, 0)

# (name, start time, end time); a start later than the end means the window crosses midnight.
SESSIONS = [
    ("Asia", time(20, 0), time(3, 0)),
    ("London", time(3, 0), time(12, 0)),
    ("New York", time(9, 30), time(16, 0)),
]


@dataclass(frozen=True)
class Range:
    high: float
    low: float


def _at(day, t):
    return datetime.combine(day, t, tzinfo=TZ)


def high_low(candles, start, end):
    """High/low of candles whose open lies in [start, end). None if there are none."""
    sel = [c for c in candles if start <= c.time < end]
    if not sel:
        return None
    return Range(max(c.high for c in sel), min(c.low for c in sel))


def previous_session(candles, now):
    """Last 24h window ending at today's 9:30 ET open (cut off at `now` before the open)."""
    now = now.astimezone(TZ)
    boundary = _at(now.date(), MARKET_OPEN)
    return high_low(candles, boundary - timedelta(days=1), min(boundary, now))


def previous_cash_session(candles, now):
    """Yesterday's 9:30-16:00 ET US cash session."""
    day = now.astimezone(TZ).date() - timedelta(days=1)
    return high_low(candles, _at(day, MARKET_OPEN), _at(day, CASH_CLOSE))


def overnight(candles, now):
    """Midnight ET until now."""
    now = now.astimezone(TZ)
    return high_low(candles, _at(now.date(), time(0, 0)), now)


def latest_named_sessions(candles, now):
    """Most recent completed-or-running window for each named session."""
    now = now.astimezone(TZ)
    out = {}
    for name, start, end in SESSIONS:
        for back in range(0, 3):
            day = now.date() - timedelta(days=back)
            s = _at(day, start)
            e = _at(day + timedelta(days=1), end) if start > end else _at(day, end)
            if s <= now:
                out[name] = high_low(candles, s, min(e, now))
                break
    return out


def price_at(candles, moment):
    """Close of the last candle that opened before `moment`."""
    prior = [c for c in candles if c.time < moment]
    return prior[-1].close if prior else None
