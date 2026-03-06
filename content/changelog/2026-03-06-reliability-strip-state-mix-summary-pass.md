---
title: "Changelog 2026-03-06 (Reliability Strip State-Mix Summary Pass)"
date: 2026-03-06T07:12:00-07:00
slug: "2026-03-06-reliability-strip-state-mix-summary-pass"
version: "0.6.22"
summary: "Refined reliability dashboard scanability with a compact state-mix summary line that aggregates healthy/degraded/down counts from strip statuses."
category: "reliability"
draft: false
---

## Changed
- Added a compact reliability strip summary line under the status strip.
- Updated dashboard logic to compute and publish state-mix counts (`Healthy`, `Degraded`, `Down`) from strip status state.
- Kept overall status pill behavior and strip interactions intact while adding faster at-a-glance reliability context.
- Added supporting typography spacing for the new compact summary row.

## Why
- This batch advances the reliability dashboard refinement backlog item focused on compact status strip scanability.
- The update reduces mental parsing effort by turning three independent pills into a quick aggregate reliability read.
