---
title: "Changelog 2026-03-07 (Project Dashboards Collapse Toggle)"
date: 2026-03-07T23:12:00-07:00
slug: "2026-03-07-project-dashboards-collapse-toggle"
version: "0.9.72"
summary: "Added a collapse/expand toggle for the Projects dashboards section so the panel can be folded when users want to focus on the rest of the page."
draft: false
---

## Changed
- Added a new `Collapse dashboards` toggle in the Projects dashboards header row.
- Toggle is accessible (`aria-expanded`, `aria-controls`) and switches to `Expand dashboards` when collapsed.
- Added JS controller for reusable collapse toggles via `data-collapse-toggle`.

## Affected pages
- `/pages/projects/`

## Receipts
- Before: `/pages/projects/`
- After: `/pages/projects/`
