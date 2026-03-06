---
title: "Changelog 2026-03-06 (Large-Screen Breakpoints Width Utilization Pass)"
date: 2026-03-06T08:58:00-07:00
slug: "2026-03-06-large-screen-breakpoints-width-utilization-pass"
version: "0.9.58"
summary: "Expanded 1200px/1580px responsive behavior to better use wide screens, including stronger two-column balance and multi-column capability/demo grids."
category: "design"
draft: false
---

## Changed
- Extended the existing `1200px` and `1580px` breakpoints with layout-specific scaling instead of only increasing container width.
- Rebalanced `.grid.two` at large sizes so primary content keeps visual priority while the sidebar stays readable and stable.
- Increased readable line lengths for hero and prose content on wider screens to reduce excess side gutters.
- Upgraded capability explorer and automation demo surfaces to 2-column (>=1200px) and 3-column (>=1580px) grid behavior for better horizontal utilization.

## Why
- Previous large-screen behavior widened the shell but left several core surfaces effectively single-column, underusing available space on 4K and ultrawide displays.
- This pass keeps readability guardrails while making wide-screen browsing feel intentionally designed rather than stretched.
