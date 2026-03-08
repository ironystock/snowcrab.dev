---
title: "Changelog 2026-03-07 (Roadmap 4: Weekly Metric Ownership Regression Guardrail)"
date: 2026-03-07T23:06:00-07:00
draft: false
summary: "Added a weekly CI regression guardrail that fails when overlapping Projects health/state-machine metric labels lack distinct ownership metadata."
category: "ops"
tags: ["roadmap", "roadmap4", "ci", "guardrails", "metrics"]
---

## What changed
- Added explicit metric ownership metadata on `/pages/projects/` dashboard metrics (`data-metric-label` + `data-metric-owner`) in both Health and State Machine modules.
- Added `scripts/validate-metric-ownership.mjs` to enforce overlap rules:
  - every labeled metric must declare an owner
  - overlapping labels must have distinct owners
- Wired the guardrail into CI and added a weekly scheduled CI run.

## Why this matters
Roadmap 4 required a regression check to prevent Health and State Machine surfaces from drifting back into redundant metric semantics. This guardrail makes ownership drift a failing signal instead of a latent UX ambiguity.

## Receipt
- Script: `/scripts/validate-metric-ownership.mjs`
- Workflow: `/.github/workflows/ci.yml`
- Projects dashboard metadata: `/layouts/partials/projects-health-dashboard.html`
