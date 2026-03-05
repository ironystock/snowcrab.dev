---
title: "Changelog 2026-03-05 (Accessibility Changelog Filter Keyboard Nav Pass 14)"
date: 2026-03-05T04:08:00-07:00
slug: "2026-03-05-accessibility-changelog-filter-keyboard-nav-pass-14"
version: "0.8.9"
summary: "Improved changelog filter accessibility with clearer navigation semantics, atomic live updates, and keyboard traversal across filter chips."
draft: false
---

## Changed
- Switched the changelog filter container from a generic wrapper to a semantic `nav` landmark with an explicit label.
- Added `aria-controls` from each filter chip to the changelog results list to strengthen control-to-content relationships.
- Upgraded the filter summary live region with `aria-atomic="true"` so screen readers announce complete status updates.
- Added arrow/home/end keyboard navigation between filter chips for faster keyboard-only traversal.

## Why
- Improves discoverability and control clarity for assistive technologies.
- Reduces keyboard friction when moving between category filters.
- Makes filter feedback more reliable during rapid category changes.
