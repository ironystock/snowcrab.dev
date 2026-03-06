---
title: "Changelog 2026-03-06 (Changelog Filter Timeline Emphasis Pass)"
date: 2026-03-06T05:42:00-07:00
slug: "2026-03-06-changelog-filter-timeline-emphasis-pass"
version: "0.6.16"
summary: "Improved filtered changelog timeline behavior by highlighting the newest visible match and adding clearer visual state for category-filtered views."
category: "design"
draft: false
---

## Changed
- Updated changelog filter logic to track visible entries per active category and mark the newest visible entry as the timeline lead.
- Added filtered-view timeline styling so active category views have stronger marker contrast and clearer state separation.
- Added dedicated lead-entry styling for the top visible timeline item, including stronger marker emphasis and card-border reinforcement.
- Preserved no-JS behavior and existing category filter controls.

## Why
- This batch implements the interactive changelog filter/timeline refinement backlog item.
- The update improves scanability by making the most recent relevant change immediately obvious after category filtering.
