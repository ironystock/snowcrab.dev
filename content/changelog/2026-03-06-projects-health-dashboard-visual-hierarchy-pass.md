---
title: "Changelog 2026-03-06 (Projects Health Dashboard Visual Hierarchy Pass)"
date: 2026-03-06T05:27:00-07:00
slug: "2026-03-06-projects-health-dashboard-visual-hierarchy-pass"
version: "0.6.15"
summary: "Improved the Projects health dashboard’s scanability with clearer lane framing, priority context labels, and stronger visual emphasis on the active Now lane."
category: "design"
draft: false
---

## Changed
- Added a dashboard intro line to frame the module as a live execution-priority surface.
- Added lane context labels (`Primary lane`, `Queued lane`, `Risk lane`) for Now/Next/Watch cards.
- Introduced lane-specific card styling modifiers so each lane has clearer visual separation.
- Increased prominence of the `Now` lane with stronger border/background emphasis while keeping existing status-pill semantics.
- Tightened title sizing/spacing for faster top-to-bottom reading in the module.

## Why
- This batch addressed the TODO item for clearer visual hierarchy in the projects health module.
- The update makes priority ordering easier to parse at a glance and reduces ambiguity between strategic vs active work lanes.
