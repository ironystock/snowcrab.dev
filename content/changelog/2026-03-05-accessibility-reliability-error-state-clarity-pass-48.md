---
title: "Changelog 2026-03-05 (Accessibility Reliability Error-State Clarity Pass 48)"
date: 2026-03-05T12:55:00-07:00
slug: "2026-03-05-accessibility-reliability-error-state-clarity-pass-48"
version: "0.9.33"
summary: "Improved reliability dashboard accessibility clarity under degraded conditions by distinguishing timeout/rate-limit/unavailable states with clearer messaging and severity tones."
draft: false
---

## Changed
- Added shared runtime error classification for reliability fetch failures (`timeout`, `rate-limit`, `unavailable`).
- Updated deploy/CI failure messaging to show explicit state text (`Timed out`, `Rate limited`, `Unavailable`) instead of a single generic failure label.
- Updated incident-feed failure messaging and summary context with the same explicit state distinctions.
- Mapped timeout/rate-limit states to warning tone while reserving error tone for true unavailable failures.

## Why
- Improves assistive-tech and visual interpretation by making degraded states explicit rather than collapsing them into a single generic error.
- Helps users pick better next actions (retry later vs inspect fallback links immediately).
