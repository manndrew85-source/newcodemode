# Crypto outlook bot

Sends a Telegram report for BTC/ETH/SOL (override with `COINS=BTC-USD,XRP-USD`): price before the 9:30 ET
US open, previous-session high/low, Asia/London/New York session levels, and a rule-based bias
(EMA20/50 + RSI14) with an ATR-based expected range. Data: Coinbase public API, no key needed.
The outlook describes conditions; it is not a price prediction or financial advice.

## Setup
1. In Telegram, message @BotFather, `/newbot`, copy the token.
2. Message your new bot once, then open `https://api.telegram.org/bot<TOKEN>/getUpdates` to find `chat.id`.
3. Add repo secrets `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` (Settings > Secrets and variables > Actions).

## Run locally
    pip install -r bot/requirements.txt
    python -m bot.main --mode preopen --dry-run --force   # print only
    TELEGRAM_BOT_TOKEN=... TELEGRAM_CHAT_ID=... python -m bot.main --force
    pytest bot/tests

## Schedule
`.github/workflows/crypto-bot.yml` runs at 09:00 ET (pre-open), 12:00 ET and 16:00 ET. Cron fires at both
DST-possible UTC hours; the script skips unless the ET hour matches. Session windows (ET) are constants in `bot/sessions.py`.
