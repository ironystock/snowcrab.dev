---
title: "Changelog 2026-03-06 (Accessibility: Status Chip Contrast + Focus Pass)"
date: 2026-03-06T01:55:00-07:00
slug: "2026-03-06-accessibility-status-chip-contrast-focus-pass"
version: "0.6.8"
summary: "Improved status-chip accessibility with stronger semantic color contrast and consistent focus-visible treatment across chip/pill controls."
category: "design"
draft: false
---

## Changed
- Added explicit state ink tokens for status surfaces in both light and dark themes (`ok`, `now`, `next`, `watch`, `bad`) to strengthen color contrast on tinted chip backgrounds.
- Upgraded `.status-pill` typography (weight + line-height) for better scanability in compact dashboard contexts.
- Added `:focus-visible` styling for `.status-pill` to make keyboard focus treatment consistent with other interactive controls.
- Increased changelog filter chip legibility by using semibold text and clearer active-state text color.
- Added hover-state border feedback for filter chips to improve visual affordance before activation.

## Why
- Accessibility sweep target for this batch was contrast + focus consistency across chip/pill status UI.
- These changes improve readability and keyboard wayfinding without altering information architecture.
