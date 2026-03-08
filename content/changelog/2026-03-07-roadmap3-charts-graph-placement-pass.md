---
title: "Roadmap 3 charts/graph placement pass (projects + changelog analytics)"
date: 2026-03-07T20:35:00-07:00
summary: "Added compact analytics bars to Projects and Changelog surfaces to visualize lane distribution, velocity, and risk pressure."
category: "design"
draft: false
---

Implemented the top queued Roadmap 3 item by adding lightweight, always-visible analytics modules on both required surfaces:

- **Projects:** new "Projects analytics snapshot" card with lane-distribution bars (Now/Next/Watch) plus blocker pressure.
- **Changelog:** new "Changelog analytics (30d)" card showing 30-day ship velocity and category mix (Ops/Design/Content/Reliability).

This creates immediate visual signal density without waiting on heavier charting libraries, and gives a baseline for future chart upgrades.

## Artifacts

- Before (Projects): [/artifacts/phase7/before-charts-graph-placement-projects.jpg](/artifacts/phase7/before-charts-graph-placement-projects.jpg)
- Before (Changelog): [/artifacts/phase7/before-charts-graph-placement-changelog.jpg](/artifacts/phase7/before-charts-graph-placement-changelog.jpg)
- After (Projects analytics): [/artifacts/phase7/after-projects-analytics-snapshot.jpg](/artifacts/phase7/after-projects-analytics-snapshot.jpg)
