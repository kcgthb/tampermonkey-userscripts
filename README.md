# Freshdesk Userscripts

A small collection of Tampermonkey userscripts that improve the Freshdesk agent
UI. They target Freshdesk's standard agent interface, so they work on any
`*.freshdesk.com` instance.

## Scripts

- **Freshdesk Search Box** — restyles the top-bar Search control to read as a
  real text-entry box (larger, left-aligned, blinking caret) in the page's own
  colors.
- **Freshdesk External Reply Color** — colors replies from external users
  (purple) so they're distinct from internal private notes (which stay peach).

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.
2. Click the install link for the script(s) you want:
   - [Freshdesk Search Box](https://raw.githubusercontent.com/kcgthb/tampermonkey-userscripts/main/freshdesk-search-box.user.js)
   - [Freshdesk External Reply Color](https://raw.githubusercontent.com/kcgthb/tampermonkey-userscripts/main/freshdesk-external-reply-color.user.js)
3. Click **Install** on the Tampermonkey prompt, then reload any Freshdesk tab.

Each script is independent. Updates are delivered automatically via `@updateURL`.

## Notes / troubleshooting

- Scripts target Freshdesk's internal CSS class names
  (`.quick-search-trigger`, `.ticket-details__privatenote`,
  `.ticket-details__requestor`). A Freshdesk UI change may require updating them.
- `@match` is scoped to `*.freshdesk.com`. If your helpdesk uses a custom
  domain, add it to the `@match` line.

## Contributing

Bump `@version` when changing a script so Tampermonkey picks up updates.

## License

[GPL-3.0-or-later](LICENSE)
