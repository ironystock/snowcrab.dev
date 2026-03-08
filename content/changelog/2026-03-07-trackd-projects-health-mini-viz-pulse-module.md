---
title: "Changelog 2026-03-07 (Track D Projects Health Mini‑Viz Pulse Module)"
date: 2026-03-07T23:20:00-07:00
slug: "2026-03-07-trackd-projects-health-mini-viz-pulse-module"
summary: "Shipped the Track D Projects health mini‑viz pulse module on /pages/roadmap/ with four lane sparkline cards and live pulse status text."
draft: false
category: "design"
---

## Changed
- Marked Track D **Projects health mini-viz pulse module** roadmap item as shipped.
- Added a new **Projects health mini-viz pulse module** section on `/pages/roadmap/`.
- Added four pulse cards with compact lane sparklines:
  - Capacity
  - Freshness SLA
  - Blocker ratio
  - Confidence
- Added `projects-health-pulse.js` to render lane trend pulses and card status highlighting.
- Added supporting styles in `assets/css/main.css`.

## Receipts
- Before: `/artifacts/phase7/before-projects-health-mini-viz-pulse-module.jpg`
- After: `/artifacts/phase7/after-projects-health-mini-viz-pulse-module.jpg`

## Affected pages
- `/pages/roadmap/`

## Why
- Makes lane-health movement scannable directly on the roadmap surface.
- Reinforces non-overlap between roadmap execution story and projects operational health snapshots.
