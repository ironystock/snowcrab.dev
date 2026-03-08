---
title: "Changelog 2026-03-07 (Track E Roadmap Active-Wave Lint Check)"
date: 2026-03-07T23:10:00-07:00
slug: "2026-03-07-tracke-roadmap-active-wave-lint-check"
summary: "Strengthened queue-state CI guardrail to fail when docs/STATE is Active but roadmap has no open checklist items."
draft: false
category: "ops"
---

## Changed
- Updated `scripts/validate-queue-state.mjs` to enforce active-wave consistency.
- CI now fails when:
  - `docs/STATE.md` reports `State: Active`
  - and `content/pages/roadmap.md` has zero open `[ ]` items.
- Existing top-open-item matching behavior remains unchanged.

## Receipts
- Before: `/pages/roadmap/`
- After: `/pages/roadmap/`

## Affected pages
- `/pages/roadmap/`

## Why
- Prevents silent “active but empty queue” drift.
- Keeps roadmap and state machine truthfully synchronized for heartbeat execution.
