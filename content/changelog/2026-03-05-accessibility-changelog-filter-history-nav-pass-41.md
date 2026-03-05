---
title: "Changelog 2026-03-05 (Accessibility Changelog Filter History Nav Pass 41)"
date: 2026-03-05T11:10:00-07:00
slug: "2026-03-05-accessibility-changelog-filter-history-nav-pass-41"
version: "0.9.26"
summary: "Improved changelog filter accessibility continuity by syncing filter state with browser back/forward navigation after URL-based category state updates."
draft: false
---

## Changed
- Added `popstate` handling to changelog filter logic.
- Back/forward browser navigation now restores the active filter, filtered entries, and tab semantics from URL state without reload.

## Why
- Keeps filtered changelog views predictable when navigating history.
- Improves keyboard/screen-reader continuity after stateful URL interactions.
