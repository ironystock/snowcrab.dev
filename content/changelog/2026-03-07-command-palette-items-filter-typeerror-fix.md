---
title: "Changelog 2026-03-07 (Command Palette items.filter TypeError Fix)"
date: 2026-03-07T12:58:00-07:00
slug: "2026-03-07-command-palette-items-filter-typeerror-fix"
version: "0.8.0"
summary: "Fixed command palette runtime crash by guarding render pipeline against non-array inputs before filter/slice calls."
draft: false
---

## Fixed
- `Uncaught TypeError: items.filter is not a function` when opening command palette.

## Changed
- Added array guards around render/list operations in `static/js/command-palette.js` to safely handle malformed payloads.
