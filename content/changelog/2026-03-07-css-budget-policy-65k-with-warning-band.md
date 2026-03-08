---
title: "Changelog 2026-03-07 (CSS Budget Policy: 65K + Warning Band)"
date: 2026-03-07T21:10:00-07:00
slug: "2026-03-07-css-budget-policy-65k-with-warning-band"
version: "0.9.41"
summary: "Adopted CSS budget policy update for Roadmap 3 velocity: hard cap raised to 65KB with a 60KB warning band, plus guardrail script support for non-failing WARN status."
draft: false
---

## Changed
- Updated `largestCssBytes` hard budget to `65,000`.
- Added warning threshold for `largestCssBytes` at `60,000`.
- Updated performance guardrail script to support `warnMetrics` and report `WARN` without failing CI.

## Why
- Maintains velocity during active visual-system expansion while preserving a meaningful hard limit.
- Keeps guardrails visible before failure via warning-band telemetry.
