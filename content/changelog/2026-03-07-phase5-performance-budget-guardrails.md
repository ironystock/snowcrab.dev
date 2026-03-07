---
title: "Changelog 2026-03-07 (Phase 5: Performance Budget Guardrails)"
date: 2026-03-07T16:54:00-07:00
slug: "2026-03-07-phase5-performance-budget-guardrails"
version: "0.9.4"
summary: "Added enforceable performance budgets and regression guardrails to CI for snowcrab.dev."
draft: false
category: "reliability"
---

## Changed
- Added `scripts/check-performance-budgets.mjs` to compute and enforce size budgets/regression thresholds for key site metrics.
- Added `config/performance-budgets.json` for explicit budget targets and allowed regression percent.
- Added `config/performance-baseline.json` as the current regression baseline snapshot.
- Updated GitHub Actions CI (`.github/workflows/ci.yml`) to fail builds when performance guardrails are exceeded.

## Why
- Converts Phase 5 performance intent into an enforceable, automated quality gate.
- Prevents unnoticed payload creep and guards against performance regressions on future batches.
- Completes the roadmap milestone for **performance budget enforcement and regression guardrails**.
