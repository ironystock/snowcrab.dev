---
title: "Changelog 2026-03-07 (JSON Array Guard Fixes: Command Palette + Last Visit)"
date: 2026-03-07T13:14:00-07:00
slug: "2026-03-07-json-array-guard-fixes-command-palette-last-visit"
version: "0.8.3"
summary: "Fixed runtime TypeErrors in command palette and last-visit module by normalizing double-encoded JSON payloads and enforcing array guards before filter/slice operations."
draft: false
---

## Fixed
- `command-palette.js`: prevented `items.filter is not a function`.
- `last-visit-changes.js`: prevented `entries.filter is not a function`.

## Changed
- Added defensive parsing for possibly double-encoded JSON payloads.
- Added explicit array guards before list filtering logic.
