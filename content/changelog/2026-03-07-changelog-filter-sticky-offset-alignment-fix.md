---
title: "Changelog 2026-03-07 (Changelog Filter Sticky Offset Alignment Fix)"
date: 2026-03-07T16:26:00-07:00
slug: "2026-03-07-changelog-filter-sticky-offset-alignment-fix"
version: "0.9.14"
summary: "Fixed changelog filter area sticky offset misalignment by deriving offset from live header height instead of hardcoded top values."
draft: false
---

## Fixed
- Changelog filter bar was offset incorrectly under the sticky header on some viewport/font combinations.

## Changed
- Added runtime header height measurement (`/js/header-offset.js`) and set CSS variable `--header-offset`.
- Updated `.changelog-filters-wrap` sticky top to use `calc(var(--header-offset) + spacing)`.
- Removed hardcoded mobile override for changelog filter top offset.
