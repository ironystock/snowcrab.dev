---
title: "Changelog 2026-03-03 (Homepage Widget Scripts Wired)"
date: 2026-03-03T13:50:00-07:00
slug: "2026-03-03-homepage-widget-scripts-wired"
version: "0.3.34"
summary: "Wired homepage-only JavaScript loaders for the Now Building and Reliability widgets so live metadata actually renders client-side."
draft: false
---

## Changed
- Updated `layouts/_default/baseof.html` to load homepage-only scripts when `IsHome` is true:
  - `/js/now-building-widget.js`
  - `/js/reliability-dashboard.js`
- Kept script loading scoped to homepage to avoid unnecessary JS on non-home routes.

## Why
- Ensure the homepage metadata widgets render their live data instead of staying in static loading states.
