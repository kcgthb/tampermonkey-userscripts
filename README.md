# Tampermonkey Userscripts

A small collection of Tampermonkey userscripts that smooth over rough edges in
various web UIs. Each script is self-contained and independent — install only
the ones you want.

## Scripts

### Freshdesk

Work on any `*.freshdesk.com` instance.

- **Freshdesk Search Box**
  ([install](https://raw.githubusercontent.com/kcgthb/tampermonkey-userscripts/main/freshdesk-search-box.user.js))
  — restyles the top-bar Search control to read as a real text-entry box
  (larger, left-aligned, blinking caret) in the page's own colors.
- **Freshdesk External Reply Color**
  ([install](https://raw.githubusercontent.com/kcgthb/tampermonkey-userscripts/main/freshdesk-external-reply-color.user.js))
  — colors replies from external users (purple) so they're distinct from
  internal private notes (which stay peach).

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.
2. Click the **install** link next to any script above.
3. Click **Install** on the Tampermonkey prompt, then reload the target page.

Each script is independent. Updates are delivered automatically via `@updateURL`.

## Notes / troubleshooting

- Scripts target sites' internal CSS class names, which can change without
  notice. If a script stops working, the selectors likely need refreshing.
- Each script's `@match` line controls where it runs. To use a script on a
  custom domain (e.g. a white-labelled helpdesk), add that domain to `@match`.

## Contributing

Bump a script's `@version` when changing it so Tampermonkey picks up the update.

## License

[GPL-3.0-or-later](LICENSE)
