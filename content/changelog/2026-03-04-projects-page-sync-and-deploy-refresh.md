---
title: "Changelog 2026-03-04 (Projects Page Sync + Deploy Refresh)"
date: 2026-03-04T23:48:00-07:00
slug: "2026-03-04-projects-page-sync-and-deploy-refresh"
version: "0.5.5"
summary: "Refreshed Projects/Now timestamps and forced deploy refresh to ensure Hockeyclaw project state is visible in production."
draft: false
---

## Changed
- Refreshed `/pages/projects/` and `/pages/now/` timestamps after Hockeyclaw sync.
- Added explicit last-verified line on Projects page for operator confidence.

## Fixed
- Production visibility mismatch where Hockeyclaw updates were not reflected on the live Projects page.
