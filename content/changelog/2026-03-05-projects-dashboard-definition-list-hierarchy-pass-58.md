---
title: "Changelog 2026-03-05 (Projects Dashboard Definition-List Hierarchy Pass 58)"
date: 2026-03-05T15:25:00-07:00
slug: "2026-03-05-projects-dashboard-definition-list-hierarchy-pass-58"
version: "0.9.43"
summary: "Improved projects dashboard hierarchy and scanability by converting card internals from repeated paragraph rows to semantic definition-list metadata blocks."
draft: false
---

## Changed
- Migrated project health card internals to definition-list markup (`dl`/`dt`/`dd`) for Priority, Status, Milestone, Next action, and Blocker fields.
- Added dedicated metadata styling for project cards to improve label/value separation and scanning rhythm.
- Preserved existing project content, priority pills, and overall two-column layout.

## Why
- Makes project status cards easier to parse visually and semantically as structured status metadata.
- Supports the dashboard TODO goal of clearer information hierarchy on `/pages/projects`.
