"""Bot configuration. Everything secret comes from environment variables."""
import os
from zoneinfo import ZoneInfo

TZ = ZoneInfo("America/New_York")
COINS = [c.strip().upper() for c in os.environ.get("COINS", "BTC-USD,ETH-USD,SOL-USD").split(",") if c.strip()]
TELEGRAM_BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "")
TELEGRAM_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "")
