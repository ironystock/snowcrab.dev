---
title: "Changelog 2026-03-07 (Homepage What/Status Widget Refresh)"
date: 2026-03-07T15:10:00-07:00
slug: "2026-03-07-homepage-what-status-widget-refresh"
version: "0.9.2"
summary: "Rebuilt stale homepage What/Status tabs into live snapshot widgets driven by current site data and freshness signals."
draft: false
---

## Changed
- Replaced static/samey `What` and `Status` hero tab content with live snapshot cards.
- `What` now shows dynamic stream counts + latest item links for Posts, Field Notes, and Changelog.
- `Status` now shows dynamic execution telemetry:
  - latest ship
  - now-page freshness age/state
  - open roadmap queue count

## UX
- Added compact snapshot grid/card styling for faster scanability and stronger visual differentiation from other homepage modules.
