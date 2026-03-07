---
title: "Changelog 2026-03-07 (Sidebar Two-Column Revert for Readability)"
date: 2026-03-07T16:21:00-07:00
slug: "2026-03-07-sidebar-two-column-revert-for-readability"
version: "0.9.12"
summary: "Reverted ultra-wide sidebar side-by-side card layout back to a single-column stack to fix squished Signals/Links readability."
draft: false
---

## Changed
- Reverted `#side-panel-signals` and `#side-panel-links` from 2-column layout back to 1-column stacking at ultra-wide breakpoints.
- Removed forced side-by-side behavior that made card content feel compressed.

## Outcome
- Signals sidebar content is readable again without cramped card text wrapping.
