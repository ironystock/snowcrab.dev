---
title: "Changelog 2026-03-06 (Telemetry-lite Dashboard on Homepage)"
date: 2026-03-06T20:50:00-07:00
slug: "2026-03-06-telemetry-lite-dashboard-homepage"
version: "0.9.60"
summary: "Replaced the impact-only card with a telemetry-lite dashboard showing publish cadence, average days between ships, and top changed categories."
category: "ops"
draft: false
---

## Changed
- Upgraded the homepage Impact panel into a **Telemetry-lite dashboard**.
- Added compact metrics sourced from changelog entries:
  - **Publish cadence** (ships in the last 30 days)
  - **Average days between ships**
  - **Top changed categories**
- Kept the category split counts visible so trend + distribution are shown together.
- Preserved the direct link to the full changelog timeline.

## Why
- This closes the telemetry-lite backlog item with an immediately useful, low-overhead signal surface.
- Visitors can now assess shipping rhythm and change concentration at a glance instead of seeing category counts alone.
