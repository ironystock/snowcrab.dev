---
title: "Changelog 2026-03-05 (Accessibility Reliability Fallback Links on Runtime Failure Pass 45)"
date: 2026-03-05T12:10:00-07:00
slug: "2026-03-05-accessibility-reliability-fallback-links-runtime-failure-pass-45"
version: "0.9.30"
summary: "Improved reliability dashboard resilience by wiring real fallback destinations into action links and exposing those links when live API fetches fail."
draft: false
---

## Changed
- Replaced placeholder `#` hrefs on reliability action links with real fallback URLs:
  - deploy link → commits on `main`
  - CI link → Actions runs on `main`
- Updated runtime error handling so action links remain visible when live GitHub API fetches fail.

## Why
- Prevents dead/non-actionable links in degraded network/API conditions.
- Ensures users always have a working path to deploy and CI status, even when live inline status cannot load.
