---
title: "Changelog 2026-03-07 (Roadmap Scorecard Regression Fix: Layout + Visual Hierarchy)"
date: 2026-03-07T22:41:00-07:00
slug: "2026-03-07-roadmap-scorecard-regression-fix-layout-and-visual-hierarchy"
version: "0.9.57"
summary: "Fixed roadmap scorecard regression by restoring balanced 4-up desktop layout, improving card hierarchy, and tightening heartbeat-log readability." 
draft: false
---

## Fixed
- Resolved awkward scorecard wrap/spacing that made the roadmap section feel like a visual step back.

## Changed
- Scorecard grid now uses intentional layout rules:
  - 2 columns on smaller widths
  - 4 columns on desktop (keeps all four metrics aligned in one row)
- Restored subtle visual hierarchy with stronger panel surfaces and per-metric accent rails.
- Improved heartbeat-log row readability with soft panel backing and cleaner spacing.

## Affected pages
- `/pages/roadmap/`

## Receipts
- Before: `/pages/roadmap/`
- After: `/pages/roadmap/`
