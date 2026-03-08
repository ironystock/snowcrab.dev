---
title: "Changelog 2026-03-07 (Project Health KPI Grid Layout Correction)"
date: 2026-03-07T23:08:00-07:00
slug: "2026-03-07-project-health-kpi-grid-layout-correction"
version: "0.9.71"
summary: "Fixed project health KPI card layout drift by removing prose-width constraints and enforcing intentional 1/2/4 responsive column behavior."
draft: false
---

## Fixed
- Resolved awkward KPI card wrapping/spacing in Project health where cards rendered as uneven 3+1 stacks.

## Changed
- Added `.projects-health-kpi-grid` to prose layout-component width exemptions.
- Set explicit responsive KPI columns:
  - 1 column (mobile)
  - 2 columns (tablet)
  - 4 columns (desktop)

## Affected pages
- `/pages/projects/`

## Receipts
- Before: `/pages/projects/`
- After: `/pages/projects/`
