---
title: "Changelog 2026-03-05 (Interactive Changelog Filters Pass 1)"
date: 2026-03-05T03:19:00-07:00
slug: "2026-03-05-changelog-interactive-filters-pass-1"
version: "0.8.9"
summary: "Added interactive changelog category filters (Design/Ops/Content/Reliability) with lightweight client-side filtering and category labeling."
draft: false
---

## Changed
- Added filter chips to the changelog list page: `All`, `Design`, `Ops`, `Content`, `Reliability`.
- Added per-entry category labeling in list metadata with front matter support (`category`) and title-based fallback mapping.
- Added client-side filtering script (`static/js/changelog-filters.js`) with accessible pressed-state updates.
- Added reusable filter-chip styling and focus-visible behavior.

## Why
- Improve changelog scanability and make it easier to jump to the type of changes a reader cares about.
