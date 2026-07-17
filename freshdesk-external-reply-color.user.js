// ==UserScript==
// @name         Freshdesk External Reply Color
// @namespace    https://github.com/kcgthb/tampermonkey-userscripts
// @version      1.0.1
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

/* Freshdesk applies the peach privatenote background to genuine private notes AND to some emailed replies: external-user replies, and agent replies re-sent via the bounce Review flow. A reliable way to tell an actual emailed reply from a genuine note is the To/Cc recipient header .emails-info, which notes never have. So we recolor any privatenote item containing an .emails-info block to a theme-consistent purple, leaving genuine notes on their original peach. */
  const css = `
            .ticket-details__item.ticket-details__privatenote:has(.emails-info:not(.notify)) .ticket-details__right {
      background-image: linear-gradient(rgb(230, 224, 251), rgb(230, 224, 251)) !important;
    }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
