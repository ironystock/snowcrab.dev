---
title: "Changelog 2026-03-05 (Reliability Refresh Button Busy Feedback Pass 68)"
date: 2026-03-05T17:55:00-07:00
slug: "2026-03-05-reliability-refresh-button-busy-feedback-pass-68"
version: "0.9.53"
summary: "Improved reliability manual-refresh UX/accessibility by adding explicit in-flight button feedback and busy-state semantics during refresh cycles."
draft: false
---

## Changed
- Added busy-state semantics to the reliability refresh button while checks are running.
- Refresh button now switches label text to `Refreshing…` during in-flight requests and restores to `Refresh status` when complete.
- Kept existing disabled-state protection and consolidated summary announcements.

## Why
- Makes refresh progress clearer for both visual and assistive-tech users.
- Reduces ambiguity about whether a manual refresh action has started.
