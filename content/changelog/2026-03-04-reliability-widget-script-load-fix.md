---
title: "Changelog 2026-03-04 (Reliability Widget Script Load Fix)"
date: 2026-03-04T09:04:00-07:00
slug: "2026-03-04-reliability-widget-script-load-fix"
version: "0.5.0"
summary: "Fixed reliability widget staying on Loading… by loading the dashboard script in the base template."
draft: false
---

## Fixed
- Homepage reliability card no longer stays on perpetual `Loading…` due to missing script include.

## Changed
- Added `reliability-dashboard.js` to global script includes in `layouts/_default/baseof.html`.
