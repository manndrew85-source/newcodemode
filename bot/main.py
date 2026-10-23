"""CLI: python -m bot.main [--mode preopen|update] [--dry-run] [--force]"""
import argparse
import sys
from datetime import datetime, timezone

from . import config, data, format as fmt, outlook, sessions, telegram

# ET hours each mode may run at (the workflow cron fires at both DST-possible UTC times).
MODE_HOURS = {"preopen": {9}, "update": {12, 16}}


def build_report(mode, now):
    et = now.astimezone(config.TZ)
    label = f"pre-open {et:%H:%M} ET" if mode == "preopen" else f"{et:%H:%M} ET"
    blocks = []
    for product in config.COINS:
        hourly = data.hourly(product, now=now)
        daily = data.daily(product, now=now)
        price = data.spot(product)
        blocks.append(fmt.coin_block(
            product.split("-")[0], price, label,
            sessions.previous_session(hourly, now),
            sessions.previous_cash_session(hourly, now),
            sessions.overnight(hourly, now),
            sessions.latest_named_sessions(hourly, now),
            outlook.build(daily, price),
        ))
    return fmt.report(f"Crypto outlook — {et:%a %b %d}", blocks)


def main(argv=None):
    p = argparse.ArgumentParser()
    p.add_argument("--mode", choices=MODE_HOURS, default="preopen")
    p.add_argument("--dry-run", action="store_true")
    p.add_argument("--force", action="store_true", help="skip the ET-hour gate")
    args = p.parse_args(argv)
    now = datetime.now(timezone.utc)
    if not args.force and now.astimezone(config.TZ).hour not in MODE_HOURS[args.mode]:
        print("Not the scheduled ET hour for this mode; skipping.")
        return 0
    text = build_report(args.mode, now)
    if args.dry_run:
        print(text)
        return 0
    if not (config.TELEGRAM_BOT_TOKEN and config.TELEGRAM_CHAT_ID):
        print("TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not set", file=sys.stderr)
        return 1
    telegram.send(config.TELEGRAM_BOT_TOKEN, config.TELEGRAM_CHAT_ID, text)
    return 0


if __name__ == "__main__":
    sys.exit(main())
