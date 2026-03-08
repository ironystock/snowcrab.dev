---
title: "Changelog 2026-03-07 (Dashboard Card Alignment Normalization)"
date: 2026-03-07T22:16:00-07:00
slug: "2026-03-07-dashboard-card-alignment-normalization"
version: "0.9.47"
summary: "Normalized dashboard card vertical alignment in Projects health widgets by enforcing stretch layout, consistent internal spacing, and margin resets."
draft: false
---

## Fixed
- Resolved uneven vertical alignment where the first health card appeared offset versus adjacent cards.

## Changed
- Enforced stretch behavior on health grid.
- Made health cards flex-column with consistent internal gap.
- Reset kicker/title/copy margins to remove subtle baseline drift.
