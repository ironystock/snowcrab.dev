---
title: "Changelog 2026-03-06 (Reliability Dashboard: Compact Status Strip Pass)"
date: 2026-03-06T06:52:00-07:00
slug: "2026-03-06-reliability-dashboard-compact-status-strip-pass"
version: "0.6.14"
summary: "Refined homepage reliability scanability by adding a live overall health pill that rolls up deploy/CI/incidents strip state in one compact status signal."
category: "reliability"
draft: false
---

## Changed
- Added a compact `Overall` status pill in the homepage reliability header next to `Refresh status`.
- Updated reliability dashboard runtime logic to compute overall state from strip signals (`Deploy`, `CI`, `Incidents`) and auto-update the pill as data resolves.
- Added explicit ARIA labels for the overall health signal and preserved live updates for assistive-tech users.
- Improved small-screen ergonomics by stacking reliability header controls and keeping status + refresh controls readable.

## Why
- The dashboard already exposed detailed status rows, but quick scanning still required reading multiple pills.
- This pass adds a single at-a-glance reliability verdict while keeping detail rows available for drill-down.
