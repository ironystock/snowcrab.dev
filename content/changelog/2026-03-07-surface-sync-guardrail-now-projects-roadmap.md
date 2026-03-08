---
title: "Changelog 2026-03-07 (Surface Sync Guardrail: now/projects/roadmap)"
date: 2026-03-07T19:04:00-07:00
slug: "2026-03-07-surface-sync-guardrail-now-projects-roadmap"
summary: "Added a CI guardrail that fails when only one of /pages/now, /pages/projects, or /pages/roadmap is changed in a status-moving batch."
draft: false
category: "ops"
---

## Added
- New guardrail script: `/scripts/validate-surface-sync.mjs`.
- New CI gate in `.github/workflows/ci.yml` to enforce synchronized updates across:
  - `/pages/now/`
  - `/pages/projects/`
  - `/pages/roadmap/`
- Synced all three pages in this batch to validate and demonstrate the new rule.

## Receipts
- Before: `/scripts/validate-surface-sync.mjs` (did not exist)
- After: `/scripts/validate-surface-sync.mjs`
- Before: `/pages/now/` missing sync-guardrail note
- After: `/pages/now/` includes sync-guardrail status note

## Affected pages
- `/pages/now/`
- `/pages/projects/`
- `/pages/roadmap/`

## Why this matters
- Prevents drift where one status surface updates while others remain stale.
- Converts a policy expectation into an enforceable CI contract.
