---
title: "Changelog 2026-03-07 (Changelog Compare Presets: 7d/30d/90d + Custom)"
date: 2026-03-07T13:55:00-07:00
slug: "2026-03-07-changelog-compare-presets-window-filtering"
version: "0.8.4"
summary: "Added changelog compare window presets (7d/30d/90d) and a custom date-range mode with URL state support for shareable filtered views."
draft: false
---

## Changed
- Added compare window controls to `/changelog/` with preset chips: **7d**, **30d**, **90d**, and **Custom**.
- Added custom `From/To` date inputs + apply action for exact range filtering.
- Combined category filtering with timeframe filtering so both constraints work together.
- Added URL state support for `range`, `since`, and `until` query params to keep filtered views shareable.

## Why
- Makes quick timeline comparisons faster without manual scrolling.
- Gives an exact window mode for audits/reviews that need bounded date ranges.
- Keeps changelog views linkable for team handoffs and receipts.
