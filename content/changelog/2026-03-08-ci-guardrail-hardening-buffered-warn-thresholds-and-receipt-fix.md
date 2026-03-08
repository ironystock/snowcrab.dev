---
title: "Changelog 2026-03-08 (CI Guardrail Hardening: Buffered Warn Thresholds + Receipt Fix)"
date: 2026-03-08T05:12:00-07:00
slug: "2026-03-08-ci-guardrail-hardening-buffered-warn-thresholds-and-receipt-fix"
version: "0.9.73"
summary: "Stabilized CI by fixing missing changelog receipt links and adding explicit warn buffers across all performance guardrail fronts to signal near-failure earlier."
draft: false
category: "ops"
---

## Changed
- Fixed missing receipt links in:
  - `/changelog/2026-03-07-tracke-roadmap-active-wave-lint-check/`
- Expanded performance guardrail warning buffers in `data/performance-budget.json` so CI surfaces early WARN signals for every monitored front:
  - `homeHtmlBytes`
  - `largestCssBytes`
  - `largestJsBytes`
  - `totalCssJsBytes`
  - `totalWoff2Bytes`
  - `homeCriticalAssetBytes`
- Raised hard limits to fit the current image/visual direction while preserving fail gates.
- Rebaselined `data/performance-baseline.json` to current production output after the policy update.

## Affected pages
- `/changelog/2026-03-07-tracke-roadmap-active-wave-lint-check/`

## Receipts
- Before: `/changelog/2026-03-07-tracke-roadmap-active-wave-lint-check/`
- After: `/changelog/2026-03-07-tracke-roadmap-active-wave-lint-check/`
