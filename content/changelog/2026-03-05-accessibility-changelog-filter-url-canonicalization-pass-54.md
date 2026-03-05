---
title: "Changelog 2026-03-05 (Accessibility Changelog Filter URL Canonicalization Pass 54)"
date: 2026-03-05T14:25:00-07:00
slug: "2026-03-05-accessibility-changelog-filter-url-canonicalization-pass-54"
version: "0.9.39"
summary: "Improved changelog filter URL resilience by canonicalizing invalid category query values to a valid state, keeping deep links predictable for assistive and keyboard users."
draft: false
---

## Changed
- Updated changelog filter URL parsing to track both raw and normalized category values.
- Added startup canonicalization: invalid `?category=` values are now normalized to a valid state (`all`) and URL is corrected immediately.
- Preserved popstate behavior using normalized filter values.

## Why
- Prevents broken/dead filter links from leaving users in ambiguous state.
- Keeps shared URLs clean and predictable for navigation, bookmarks, and assistive-tech workflows.
