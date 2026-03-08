---
title: "Changelog 2026-03-08 (CSS Guardrail Threshold Update: 65k Warn / 72.5k Fail)"
date: 2026-03-08T05:27:00-07:00
slug: "2026-03-08-css-guardrail-threshold-update-65k-warn-72.5k-fail"
version: "0.9.74"
summary: "Updated largestCssBytes guardrails to 65,000 B warn and 72,500 B hard-fail per operator decision."
draft: false
category: "ops"
---

## Changed
- Updated `data/performance-budget.json` for `largestCssBytes`:
  - warn: `62,000` → `65,000`
  - hard fail: `70,000` → `72,500`

## Receipts
- Before: `/changelog/2026-03-08-ci-guardrail-hardening-buffered-warn-thresholds-and-receipt-fix/`
- After: `/changelog/2026-03-08-css-guardrail-threshold-update-65k-warn-72.5k-fail/`
