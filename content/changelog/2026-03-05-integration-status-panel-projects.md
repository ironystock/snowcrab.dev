---
title: "Changelog 2026-03-05 (Integration Status Panel on Projects)"
date: 2026-03-05T22:18:00-07:00
slug: "2026-03-05-integration-status-panel-projects"
version: "0.7.0"
summary: "Added an integration status dashboard block to the Projects page with per-integration status, last update, next action, and blocker fields."
draft: false
---

## Added
- New reusable partial: `integration-status-panel.html`.
- New Projects dashboard module: **Integration status**.

## Changed
- Projects frontmatter now defines `integrations` data for Hockeyclaw, discord-claws, Promptmark pipeline, and OBS/Streaming.
- Projects page template now renders both health summary and integration status dashboard modules.
