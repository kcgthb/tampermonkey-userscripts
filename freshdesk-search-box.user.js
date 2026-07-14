// ==UserScript==
// @name         Freshdesk Search Box
// @namespace    https://github.com/kcgthb/tampermonkey-userscripts
// @version      1.0.0
// @description  Styles the Freshdesk top-bar Search control as a real text-entry box in the page's own color scheme.
// @author       kcgthb
// @license      GPL-3.0-or-later
// @match        https://*.freshdesk.com/*
// @run-at       document-idle
// @grant        none
// @updateURL    https://raw.githubusercontent.com/kcgthb/tampermonkey-userscripts/main/freshdesk-search-box.user.js
// @downloadURL  https://raw.githubusercontent.com/kcgthb/tampermonkey-userscripts/main/freshdesk-search-box.user.js
// ==/UserScript==

(function () {
  'use strict';

  const css = `
    .quick-search-trigger {
      background-color: #ffffff !important;
      border: 1px solid #c9d3db !important;
      border-radius: 6px !important;
      min-width: 260px !important;
      cursor: text !important;
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
    }
    .quick-search-trigger .search-toggle {
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      width: 100% !important;
      margin: 0 !important;
      padding: 7px 10px !important;
      color: #8a94a6 !important;
      font-size: 14px !important;
      cursor: text !important;
    }
    .quick-search-trigger .search-toggle .app-icon { color: #8a94a6 !important; }
    .quick-search-trigger .search-toggle::after {
      content: "";
      display: inline-block;
      width: 1px; height: 15px;
      margin-left: 6px;
      background-color: #12334c;
      animation: fd-search-caret 1s step-end infinite;
    }
    .quick-search-trigger:hover { border-color: #003fd2 !important; }
    .quick-search-trigger:focus-within,
    .quick-search-trigger:active {
      border-color: #003fd2 !important;
      box-shadow: 0 0 0 3px rgba(0, 63, 210, 0.15) !important;
    }
    @keyframes fd-search-caret {
      0%, 100% { opacity: 1; }
      50%      { opacity: 0; }
    }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
