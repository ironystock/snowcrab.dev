---
title: "Changelog 2026-03-03 (Reliability Dashboard Refresh + Rate-Limit Handling)"
date: 2026-03-03T20:20:00-07:00
slug: "2026-03-03-reliability-dashboard-refresh-and-rate-limit"
version: "0.3.38"
summary: "Improved reliability widget clarity by adding a last-refreshed timestamp and explicit rate-limit status handling for GitHub API signals."
draft: false
---

## Changed
- Added a **Last refreshed** timestamp to the homepage Reliability card.
- Updated reliability JS to set refresh time after all dashboard data requests settle.
- Added explicit `Rate-limited` status messaging when GitHub API responses are rate-limited.
- Kept existing deploy/CI evidence links and incident feed behavior intact.

## Why
- Improve dashboard trustworthiness by showing data recency and clearer API failure modes.
