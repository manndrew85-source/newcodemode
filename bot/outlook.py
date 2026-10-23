"""Rule-based bias from daily candles. Describes conditions; it does not predict prices."""
from dataclasses import dataclass


def ema(values, period):
    k = 2 / (period + 1)
    out = values[0]
    for v in values[1:]:
        out = v * k + out * (1 - k)
    return out


def rsi(closes, period=14):
    if len(closes) <= period:
        return 50.0
    gains = losses = 0.0
    for i in range(1, period + 1):
        d = closes[i] - closes[i - 1]
        gains += max(d, 0)
        losses += max(-d, 0)
    avg_g, avg_l = gains / period, losses / period
    for i in range(period + 1, len(closes)):
        d = closes[i] - closes[i - 1]
        avg_g = (avg_g * (period - 1) + max(d, 0)) / period
        avg_l = (avg_l * (period - 1) + max(-d, 0)) / period
    if avg_l == 0:
        return 100.0
    return 100 - 100 / (1 + avg_g / avg_l)


def atr(candles, period=14):
    trs = []
    for prev, c in zip(candles, candles[1:]):
        trs.append(max(c.high - c.low, abs(c.high - prev.close), abs(c.low - prev.close)))
    trs = trs[-period:]
    return sum(trs) / len(trs) if trs else 0.0


@dataclass(frozen=True)
class Outlook:
    bias: str
    reasons: list
    range_low: float
    range_high: float


def build(daily_candles, price):
    closes = [c.close for c in daily_candles]
    e20, e50 = ema(closes, 20), ema(closes, 50)
    r = rsi(closes)
    score, reasons = 0, []
    if price > e20 > e50:
        score += 2
        reasons.append("above EMA20 & EMA50 (uptrend)")
    elif price < e20 < e50:
        score -= 2
        reasons.append("below EMA20 & EMA50 (downtrend)")
    elif price > e50:
        score += 1
        reasons.append("above EMA50, below/around EMA20")
    else:
        score -= 1
        reasons.append("below EMA50, above/around EMA20")
    if r >= 60:
        score += 1
        reasons.append(f"RSI {r:.0f} (strong momentum)")
    elif r <= 40:
        score -= 1
        reasons.append(f"RSI {r:.0f} (weak momentum)")
    else:
        reasons.append(f"RSI {r:.0f} (neutral)")
    bias = "Bullish" if score >= 2 else "Bearish" if score <= -2 else "Neutral"
    a = atr(daily_candles)
    return Outlook(bias, reasons, price - a / 2, price + a / 2)
