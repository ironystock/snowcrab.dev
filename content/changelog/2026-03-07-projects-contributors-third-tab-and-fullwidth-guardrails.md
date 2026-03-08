---
title: "Changelog 2026-03-07 (Projects Contributors 3rd Tab + Full-Width Guardrails)"
date: 2026-03-07T18:26:00-07:00
slug: "2026-03-07-projects-contributors-third-tab-and-fullwidth-guardrails"
version: "0.9.28"
summary: "Moved contributor panel into Projects dashboards as the third tab and added full-width class/guardrails so tabbed widget surfaces don’t get constrained when moved."
draft: false
---

## Changed
- Projects dashboards now have three tabs:
  - Health
  - Integrations
  - Contributors
- Contributor spotlight is now rendered in the `Contributors` tab on `/pages/projects/`.

## Fixed
- Added full-width guardrails for contributor/widget list surfaces inside prose contexts.
- Added `projects-dashboard-tabs--full` + contributor panel grid behavior to avoid narrow/constrained layout when tab content is rearranged.
