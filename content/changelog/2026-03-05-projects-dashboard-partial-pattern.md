---
title: "Changelog 2026-03-05 (Projects Dashboard Partial Pattern)"
date: 2026-03-05T22:12:00-07:00
slug: "2026-03-05-projects-dashboard-partial-pattern"
version: "0.6.9"
summary: "Replaced raw HTML in projects page with Hugo partial + frontmatter-driven data to avoid markdown renderer issues."
draft: false
---

## Changed
- Projects health dashboard now renders via reusable partial (`projects-health-dashboard.html`) instead of raw HTML in markdown.
- `projects.md` now stores dashboard values in frontmatter (`project_health`, `last_verified`).
- Single-page template now supports `last_verified` metadata and injects dashboard partial for projects page.

## Fixed
- Prevented future raw-HTML omissions and template instability on `/pages/projects/` under safe markdown settings.
