---
title: "Changelog 2026-03-05 (Reliability Last-Refreshed Relative Age Pass 72)"
date: 2026-03-05T18:55:00-07:00
slug: "2026-03-05-reliability-last-refreshed-relative-age-pass-72"
version: "0.9.57"
summary: "Improved reliability dashboard scanability by adding a continuously updating relative-age indicator alongside the absolute last-refreshed timestamp."
draft: false
---

## Changed
- Added a relative refresh-age indicator next to reliability `Last refreshed` metadata.
- Extended runtime logic to store last refresh time and render human-friendly relative age labels (`just now`, `Xm ago`, `Xh ago`, etc.).
- Added periodic relative-age refresh (30s cadence) without requiring a full status refetch.

## Why
- Makes recency easier to understand at a glance during active monitoring.
- Preserves machine-readable absolute `<time datetime>` metadata while improving human scanability.
