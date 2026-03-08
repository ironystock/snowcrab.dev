---
title: "Changelog 2026-03-07 (Project Dashboard Responsive Width Audit + Fix)"
date: 2026-03-07T18:02:00-07:00
slug: "2026-03-07-project-dashboard-responsive-width-audit-fix"
version: "0.9.23"
summary: "Fixed projects dashboard width constraint caused by prose reading-measure rules and added guardrail overrides for widget grids/lists so future moved components stay responsive."
draft: false
---

## Fixed
- Projects dashboard grids were being constrained by `article.prose ul/ol` max-width reading measure rules.

## Changed
- Added explicit full-width overrides for dashboard/feature layout components inside prose:
  - `projects-health-grid`
  - `integration-grid`
  - `projects-state-machine-track`
  - `projects-state-machine-rules`
  - `automation-demos-grid`
  - `capability-explorer-grid`

## Outcome
- Projects dashboard now expands responsively across available content width.
- Future widget moves inside prose containers are protected from accidental reading-measure clipping.
