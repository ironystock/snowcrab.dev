---
title: "Changelog 2026-03-05 (Accessibility Projects Dashboard Landmark Headings Pass 20)"
date: 2026-03-05T05:33:00-07:00
slug: "2026-03-05-accessibility-projects-dashboard-landmark-headings-pass-20"
version: "0.9.5"
summary: "Improved projects dashboard navigation for assistive tech by adding explicit section landmarks and heading-based labels for summary and card regions."
draft: false
---

## Changed
- Replaced the dashboard summary `div` landmark label with a semantic `section` tied to a dedicated heading (`aria-labelledby`).
- Grouped the project health card list inside a labeled `section` to provide a clearer region boundary for screen-reader navigation.
- Added screen-reader-only headings for both summary and card regions so landmark labels map to visible document structure intent.

## Why
- Heading-linked landmarks are easier to traverse and understand than standalone `aria-label` strings on generic containers.
- Improves orientation on long project pages by giving assistive technologies cleaner region names and structure.
