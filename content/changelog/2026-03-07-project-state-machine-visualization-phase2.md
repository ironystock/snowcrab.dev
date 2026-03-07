---
title: "Changelog 2026-03-07 (Project State-Machine Visualization: Phase 2 Surface)"
date: 2026-03-07T15:07:00-07:00
slug: "2026-03-07-project-state-machine-visualization-phase2"
version: "0.8.7"
summary: "Added a project flow state-machine visualization to `/pages/projects/` with lane counts (Next/Now/Watch) and explicit transition rules for faster execution scanning."
draft: false
---

## Changed
- Added a new **Project flow state machine** section to the projects health dashboard.
- Visualized lane progression as **Next → Now → Watch** with live counts from current integration statuses.
- Added explicit transition-rule bullets (promote, stabilize, de-risk) to clarify movement between states.
- Added responsive styling so the flow remains readable on narrow screens.
- Captured visual artifacts:
  - `/artifacts/phase2/before-project-state-machine-visualization.jpg`
  - `/artifacts/phase2/after-project-state-machine-visualization.jpg`

## Why
- Makes cross-project execution state easier to parse at a glance.
- Encodes workflow transitions directly into the UI instead of relying on implicit process memory.
- Improves handoff/readability for planning and heartbeat-driven shipping loops.
