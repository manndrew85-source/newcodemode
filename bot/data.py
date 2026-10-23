"""Market data from the Coinbase Exchange public API (no key required)."""
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone

import requests

BASE = "https://api.exchange.coinbase.com"


@dataclass(frozen=True)
class Candle:
    time: datetime  # candle open, UTC
    low: float
    high: float
    open: float
    close: float


def _candles(product, granularity, start, end):
    r = requests.get(
        f"{BASE}/products/{product}/candles",
        params={"granularity": granularity, "start": start.isoformat(), "end": end.isoformat()},
        timeout=15,
    )
    r.raise_for_status()
    rows = [Candle(datetime.fromtimestamp(t, timezone.utc), lo, hi, o, c) for t, lo, hi, o, c, _ in r.json()]
    return sorted(rows, key=lambda c: c.time)


def hourly(product, days=7, now=None):
    now = now or datetime.now(timezone.utc)
    return _candles(product, 3600, now - timedelta(days=days), now)


def daily(product, days=90, now=None):
    now = now or datetime.now(timezone.utc)
    return _candles(product, 86400, now - timedelta(days=days), now)


def spot(product):
    r = requests.get(f"{BASE}/products/{product}/ticker", timeout=15)
    r.raise_for_status()
    return float(r.json()["price"])
