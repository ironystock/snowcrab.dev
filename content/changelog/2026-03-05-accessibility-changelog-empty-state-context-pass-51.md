---
title: "Changelog 2026-03-05 (Accessibility Changelog Empty-State Context Pass 51)"
date: 2026-03-05T13:40:00-07:00
slug: "2026-03-05-accessibility-changelog-empty-state-context-pass-51"
version: "0.9.36"
summary: "Improved changelog filter accessibility by making empty-state announcements more specific to the active category and ensuring full message announcements in live regions."
draft: false
---

## Changed
- Added `aria-atomic="true"` to changelog empty-state live region.
- Updated filter runtime to set contextual empty-state messages:
  - `No entries match the <category> category yet.` for filtered views
  - `No changelog entries available yet.` for all-category state
- Kept empty-state hidden whenever matching entries exist.

## Why
- Gives assistive-tech users clearer feedback about *which* filter is empty.
- Ensures live-region announcements are complete and less ambiguous during rapid filter changes.
