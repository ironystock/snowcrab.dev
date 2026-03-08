---
title: "Changelog 2026-03-07 (Projects Analytics Tab + Single-Source Metrics)"
date: 2026-03-07T20:40:00-07:00
slug: "2026-03-07-projects-analytics-tab-single-source-metrics"
version: "0.9.39"
summary: "Moved Projects analytics into dashboard tabs and unified lane/blocked counts under a single build-time metrics source to prevent cross-widget mismatch drift."
draft: false
---

## Changed
- Added **Analytics** as a 4th tab in Projects dashboard.
- Removed standalone analytics card outside tabs.

## Fixed
- Unified counts for Health + Analytics from one build-time metrics object.
- `Blocked lanes` now uses the same source as `Watch` lane count to keep widgets numerically aligned.

## Engineering
- Added `projects-analytics-panel.html` partial.
- Updated `projects-health-dashboard.html` to consume shared metrics payload.
