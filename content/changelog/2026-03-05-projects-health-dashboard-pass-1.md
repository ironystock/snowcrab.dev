---
title: "Changelog 2026-03-05 (Projects Health Dashboard Pass 1)"
date: 2026-03-05T02:50:00-07:00
slug: "2026-03-05-projects-health-dashboard-pass-1"
version: "0.8.7"
summary: "Added a structured project-health dashboard module to /pages/projects with clearer status, milestone, next action, and blocker hierarchy."
draft: false
---

## Changed
- Added a new top-of-page **Project health dashboard** module on `/pages/projects`.
- Introduced structured health cards for key active projects with consistent fields:
  - status
  - milestone
  - next action
  - blocker
- Added reusable dashboard styling for card layout and status pills (`ok` / `watch`).
- Updated projects page verification timestamp to reflect this pass.

## Why
- Make project-state scanning faster and reduce cognitive load when triaging what to work on next.
