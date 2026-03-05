---
title: "Changelog 2026-03-05 (Accessibility Changelog Filter URL State Pass 40)"
date: 2026-03-05T10:56:00-07:00
slug: "2026-03-05-accessibility-changelog-filter-url-state-pass-40"
version: "0.9.25"
summary: "Improved changelog filter accessibility and shareability by persisting selected category state in URL query params and restoring that state on page load."
draft: false
---

## Changed
- Added changelog filter URL-state handling via `?category=` query param.
- Restored selected filter state from URL on initial load (with safe fallback to `all`).
- Persisted filter changes back to URL without page reload using `history.replaceState`.
- Added filter normalization/validation so unsupported values safely degrade to `all`.

## Why
- Lets users share direct links to a filtered changelog view.
- Improves continuity for keyboard and assistive-tech users by preserving selected context after reload or navigation.
