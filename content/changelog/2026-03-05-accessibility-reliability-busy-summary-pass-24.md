---
title: "Changelog 2026-03-05 (Accessibility Reliability Busy + Summary Pass 24)"
date: 2026-03-05T06:33:00-07:00
slug: "2026-03-05-accessibility-reliability-busy-summary-pass-24"
version: "0.9.9"
summary: "Improved reliability dashboard accessibility by exposing loading state on the full module and adding a concise live summary after status refresh."
draft: false
---

## Changed
- Added `aria-busy` to the full reliability dashboard section so assistive tech can detect loading state at the module level.
- Added a screen-reader-only live status node for a consolidated post-refresh summary.
- Updated reliability dashboard script to clear module busy state after all requests settle and announce a concise deploy/CI health summary.

## Why
- Reduces fragmented announcements from multiple independent status fields.
- Gives a clearer start/end loading signal and a single high-value update for non-visual users.
