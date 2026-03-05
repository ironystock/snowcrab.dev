---
title: "Changelog 2026-03-05 (Accessibility Changelog Focus-Handoff Visibility Pass 57)"
date: 2026-03-05T15:10:00-07:00
slug: "2026-03-05-accessibility-changelog-focus-handoff-visibility-pass-57"
version: "0.9.42"
summary: "Improved keyboard accessibility when changelog filtering hides the active item by making focus handoff visibly apparent and cleaning temporary focusability state after use."
draft: false
---

## Changed
- Added visible focus styling for the changelog filter summary node used during focus handoff.
- Updated focus-handoff runtime to remove temporary `tabindex` from summary after blur, keeping baseline tab order clean.

## Why
- Makes programmatic focus redirection perceivable to keyboard users.
- Prevents lingering temporary focus targets from polluting subsequent tab navigation.
