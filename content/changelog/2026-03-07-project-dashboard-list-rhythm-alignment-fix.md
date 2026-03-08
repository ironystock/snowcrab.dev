---
title: "Changelog 2026-03-07 (Projects Dashboard List-Rhythm Alignment Fix)"
date: 2026-03-07T22:27:00-07:00
slug: "2026-03-07-project-dashboard-list-rhythm-alignment-fix"
version: "0.9.48"
summary: "Fixed vertical misalignment in Projects dashboard widgets by preventing prose list spacing from offsetting component grid/list items."
draft: false
---

## Fixed
- Removed unintended vertical offset where first lane/state card sat higher than subsequent cards in dashboard widgets.

## Changed
- Added component-level override so prose list rhythm (`li + li`) does not apply inside dashboard/layout lists:
  - `.projects-health-grid`
  - `.projects-state-machine-track`
  - `.integration-grid`
  - `.automation-demos-grid`
  - `.capability-explorer-grid`
  - `.contributor-spotlight-list`

## Affected pages
- `/pages/projects/`

## Receipts
- Before: `/pages/projects/`
- After: `/pages/projects/`
