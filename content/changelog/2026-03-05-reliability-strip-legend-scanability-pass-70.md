---
title: "Changelog 2026-03-05 (Reliability Strip Legend Scanability Pass 70)"
date: 2026-03-05T18:25:00-07:00
slug: "2026-03-05-reliability-strip-legend-scanability-pass-70"
version: "0.9.55"
summary: "Improved reliability dashboard scanability by adding a compact status legend that clarifies strip color/state meaning (Healthy, Degraded, Down)."
draft: false
---

## Changed
- Added a compact legend below the reliability status strip using the same pill styles as live strip states.
- Legend now explicitly maps state semantics:
  - Healthy
  - Degraded
  - Down
- Added lightweight legend layout styling for readability without increasing card clutter.

## Why
- Reduces interpretation ambiguity when scanning status colors quickly.
- Improves first-time comprehension of compact strip state meaning.
