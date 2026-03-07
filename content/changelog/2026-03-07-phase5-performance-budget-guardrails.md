---
title: "Changelog 2026-03-07 (Phase 5: Performance Budget Guardrails)"
date: 2026-03-07T16:46:00-07:00
slug: "2026-03-07-phase5-performance-budget-guardrails"
version: "0.9.4"
summary: "Shipped enforceable performance budget + regression guardrails in CI using a build-metric checker and tracked baseline snapshots."
draft: false
category: "ops"
---

## Changed
- Added CI-enforced performance budget step in `.github/workflows/ci.yml`.
- Added metric checker script at `/scripts/check-performance-budgets.mjs`.
- Added budget config at `/data/performance-budget.json`.
- Added baseline snapshot at `/data/performance-baseline.json` for regression comparison.
- Guardrails now fail CI when core web metrics exceed configured budgets or regress beyond threshold.

## Why
- Prevents silent performance regressions from shipping.
- Makes performance constraints explicit, versioned, and reviewable.
- Completes the roadmap milestone for Phase 5 performance budget enforcement.
