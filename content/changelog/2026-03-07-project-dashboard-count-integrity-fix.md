---
title: "Changelog 2026-03-07 (Project Dashboard Count Integrity Fix)"
date: 2026-03-07T15:15:00-07:00
slug: "2026-03-07-project-dashboard-count-integrity-fix"
version: "0.9.4"
summary: "Removed count drift in Projects dashboard by deriving lane summaries directly from integration status data."
draft: false
---

## Fixed
- Eliminated conflicting numbers between project summary cards and state-machine counts on `/pages/projects/`.

## Changed
- `Now / Next / Watch` lane summaries are now computed from `integrations[].status` (single source of truth), not separate manual text values.
