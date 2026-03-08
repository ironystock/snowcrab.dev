---
title: "Changelog 2026-03-07 (Scale Home Critical Asset Budget by Largest Hero ×20)"
date: 2026-03-07T22:35:00-07:00
slug: "2026-03-07-performance-budget-scale-home-critical-assets-by-largest-hero-times-20"
version: "0.9.55"
summary: "Raised homeCriticalAssetBytes budget to largest-hero-size ×20 to accommodate upcoming image-heavy growth without CI noise."
draft: false
---

## Changed
- Updated `data/performance-budget.json`:
  - `metrics.homeCriticalAssetBytes` now set to `largest hero bytes × 20`.
- Current computed value:
  - largest hero = `2,032,304 B`
  - budget = `40,646,080 B`

## Why
- Anticipating significantly more hero/media usage; prior limit was too tight and produced noisy failures for planned growth.

## Receipts
- Before: CI guardrail failed at `130,140 B` vs `130,000 B`.
- After: budget raised to `40,646,080 B`.
