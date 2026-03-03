---
title: "Changelog 2026-03-03 (Reliability Dashboard Links Pass 2)"
date: 2026-03-03T14:50:00-07:00
slug: "2026-03-03-reliability-dashboard-links-pass-2"
version: "0.3.35"
summary: "Improved homepage reliability module by adding direct links to the latest main commit and latest workflow run from live status fields."
draft: false
---

## Changed
- Added optional “(view)” links next to reliability fields on the homepage card:
  - Last deploy
  - CI status
- Updated reliability dashboard script to populate those links from GitHub API responses (`commit.html_url`, `workflow_run.html_url`).
- Kept links hidden when data is unavailable.

## Why
- Turn status text into actionable observability by letting readers jump directly to deploy and CI evidence.
