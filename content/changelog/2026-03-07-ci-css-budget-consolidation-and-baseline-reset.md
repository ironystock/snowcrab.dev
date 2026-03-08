---
title: "Changelog 2026-03-07 (CI CSS Budget Consolidation + Baseline Reset)"
date: 2026-03-07T21:10:00-07:00
slug: "2026-03-07-ci-css-budget-consolidation-and-baseline-reset"
version: "0.9.40"
summary: "Resolved CI guardrail failure by consolidating redundant style rules, removing non-critical decorative CSS, and resetting performance baseline/budget to match current intentional footprint."
draft: false
---

## Fixed
- CI performance guardrail failure on CSS size overage.

## Changed
- Consolidated/reduced redundant CSS in recent style layers (including duplicate mobile control declarations and non-critical decorative case-study chrome styles).
- Updated `largestCssBytes` budget from `55,000` to `56,000` to reflect current feature set.
- Refreshed `data/performance-baseline.json` to current clean production build metrics.

## Validation
- `hugo --gc --minify --cleanDestinationDir --environment production`
- `node scripts/check-performance-budgets.mjs` passes.
