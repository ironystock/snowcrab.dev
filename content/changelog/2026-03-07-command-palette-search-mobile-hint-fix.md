---
title: "Changelog 2026-03-07 (Command Palette Search + Mobile Hint Fix)"
date: 2026-03-07T12:42:00-07:00
slug: "2026-03-07-command-palette-search-mobile-hint-fix"
version: "0.7.9"
summary: "Fixed command palette search payload parsing and removed mobile header overlap from command shortcut hint."
draft: false
---

## Fixed
- Command palette search now works when command data is double-encoded JSON.
- Command hint no longer overlaps logo area on mobile widths.

## Changed
- Added defensive JSON normalization in `command-palette.js`.
- Hid shortcut hint below 900px and tightened command-toggle button spacing at small breakpoints.
