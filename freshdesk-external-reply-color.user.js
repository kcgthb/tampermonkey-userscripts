// ==UserScript==
// @name         Freshdesk External Reply Color
// @namespace    https://github.com/kcgthb/tampermonkey-userscripts
// @version      1.0.0
// @description  Distinguishes external-user replies (purple) from genuine private notes (unchanged peach) in ticket threads.
// @author       kcgthb
// @license      GPL-3.0-or-later
// @match        https://*.freshdesk.com/*
// @run-at       document-idle
// @grant        none
// @updateURL    https://raw.githubusercontent.com/kcgthb/tampermonkey-userscripts/main/freshdesk-external-reply-color.user.js
// @downloadURL  https://raw.githubusercontent.com/kcgthb/tampermonkey-userscripts/main/freshdesk-external-reply-color.user.js
// ==/UserScript==

(function () {
  'use strict';

  /* Freshdesk gives BOTH genuine private notes and external-user replies the
     peach 'privatenote' background. External replies additionally carry the
     'ticket-details__requestor' class (non-agent author), so we recolor only
     those to a theme-consistent purple. Genuine agent private notes
     (privatenote WITHOUT requestor) keep their original peach. */
  const css = `
    .ticket-details__item.ticket-details__privatenote.ticket-details__requestor
      .ticket-details__right {
      background-image: linear-gradient(rgb(230, 224, 251), rgb(230, 224, 251)) !important;
    }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
