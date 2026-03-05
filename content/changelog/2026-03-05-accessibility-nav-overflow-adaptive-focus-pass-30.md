---
title: "Changelog 2026-03-05 (Accessibility Nav Overflow Adaptive Focus Pass 30)"
date: 2026-03-05T08:03:00-07:00
slug: "2026-03-05-accessibility-nav-overflow-adaptive-focus-pass-30"
version: "0.9.15"
summary: "Improved nav keyboard ergonomics by making overflow focus affordances adaptive: focus target and helper hint now appear only when horizontal overflow actually exists."
draft: false
---

## Changed
- Removed always-on `tabindex` from the main nav container in template markup.
- Updated nav overflow script to detect real overflow and conditionally:
  - enable/disable nav container keyboard focus (`tabIndex` 0 / -1),
  - show/hide the screen-reader overflow hint,
  - add/remove `aria-describedby` linkage to the hint.
- Added resize-based re-evaluation so accessibility behavior stays accurate across responsive breakpoints.

## Why
- Avoids unnecessary extra tab stops when navigation does not overflow.
- Preserves keyboard guidance and overflow controls exactly when they are needed.
