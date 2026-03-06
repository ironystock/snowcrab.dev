---
title: "Changelog 2026-03-05 (Reliability Dashboard Manual Refresh Pass 67)"
date: 2026-03-05T17:40:00-07:00
slug: "2026-03-05-reliability-dashboard-manual-refresh-pass-67"
version: "0.9.52"
summary: "Added a manual refresh control to the reliability dashboard so users can re-run deploy/CI/incidents checks on demand without reloading the page."
draft: false
---

## Changed
- Added a `Refresh status` button to the reliability card header.
- Refactored reliability runtime into a reusable refresh cycle and wired the new button to trigger it.
- Added in-flight guard behavior by disabling the refresh button while requests are running.
- Preserved existing live summary announcements and status-strip updates on each refresh pass.

## Why
- Improves operability by allowing immediate status re-checks after deployments/incidents.
- Reduces need for full page reloads when users want current reliability state.
