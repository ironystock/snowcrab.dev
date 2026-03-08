---
title: "Changelog 2026-03-07 (CI Fix: Performance Guardrails + Baseline Refresh)"
date: 2026-03-07T18:03:00-07:00
slug: "2026-03-07-ci-fix-performance-guardrails-baseline-refresh"
version: "0.9.24"
summary: "Fixed failing CI by cleaning destination output in build, forcing production environment for stable asset metrics, and refreshing performance baseline after recent intentional UX feature growth."
draft: false
---

## Fixed
- CI performance guardrails failed due stale build outputs and outdated baseline after significant shipped UI/features.

## Changed
- CI Hugo build now runs with:
  - `--cleanDestinationDir`
  - `--environment production`
- Refreshed `data/performance-baseline.json` to current intentional post-upgrade footprint.

## Outcome
- Local CI parity check passes (`hugo ... && node scripts/check-performance-budgets.mjs`).
