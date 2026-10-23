from html import escape


def money(x):
    if x is None:
        return "n/a"
    return f"${x:,.2f}" if x < 100 else f"${x:,.0f}"


def hl(r):
    return "n/a" if r is None else f"H {money(r.high)} / L {money(r.low)}"


def coin_block(symbol, price, label, prev, prev_cash, overnight, named, outlook):
    lines = [
        f"<b>{escape(symbol)}</b>  {money(price)}  <i>({escape(label)})</i>  —  <b>{outlook.bias}</b>",
        f"Prev session (24h to 9:30 ET): {hl(prev)}",
        f"Prev US cash session: {hl(prev_cash)}",
        f"Since midnight ET: {hl(overnight)}",
        " · ".join(f"{n}: {hl(r)}" for n, r in named.items()),
        f"Expected range today: {money(outlook.range_low)} – {money(outlook.range_high)}",
        "Why: " + escape("; ".join(outlook.reasons)),
    ]
    return "\n".join(lines)


def report(title, blocks):
    return f"<b>{escape(title)}</b>\n\n" + "\n\n".join(blocks) + "\n\n<i>Indicator-based bias, not financial advice.</i>"
