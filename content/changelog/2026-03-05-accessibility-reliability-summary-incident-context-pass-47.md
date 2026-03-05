---
title: "Changelog 2026-03-05 (Accessibility Reliability Summary Incident Context Pass 47)"
date: 2026-03-05T12:40:00-07:00
slug: "2026-03-05-accessibility-reliability-summary-incident-context-pass-47"
version: "0.9.32"
summary: "Improved reliability live-summary announcements by including incident-feed context, reducing ambiguity for screen-reader users after status refreshes."
draft: false
---

## Changed
- Removed unused reliability runtime helper code.
- Added incident-feed outcome tracking (`no recent entries`, `N entries`, or `unavailable`).
- Expanded consolidated reliability live-region announcement to include incident-feed context alongside deploy/CI health.

## Why
- Gives assistive-tech users fuller post-refresh context in a single announcement.
- Reduces the need to navigate multiple subregions to understand overall reliability state.
