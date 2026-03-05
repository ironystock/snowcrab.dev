---
title: "Changelog 2026-03-05 (Reliability Dashboard Compact Status Strip Pass 59)"
date: 2026-03-05T15:40:00-07:00
slug: "2026-03-05-reliability-dashboard-compact-status-strip-pass-59"
version: "0.9.44"
summary: "Added a compact reliability status strip with deploy/CI/incident signals and mapped live runtime outcomes to clear healthy/degraded/down pills for faster scanning."
draft: false
---

## Changed
- Added a compact top-of-card status strip in the reliability module:
  - Deploy
  - CI
  - Incidents
- Wired runtime updates so strip pills reflect live state (`healthy`, `degraded`, `down`) using existing status-pill color semantics.
- Added a `status-pill--bad` variant and strip-specific sizing/spacing for scanability.

## Why
- Improves at-a-glance reliability triage before reading detailed row-level status.
- Advances the reliability-dashboard refinement goal (compact status strip + faster scanning).
