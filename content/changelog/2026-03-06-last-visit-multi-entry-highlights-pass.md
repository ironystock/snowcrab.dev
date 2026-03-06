---
title: "Changelog 2026-03-06 (Last-Visit Multi-Entry Highlights Pass)"
date: 2026-03-06T09:42:00-07:00
slug: "2026-03-06-last-visit-multi-entry-highlights-pass"
version: "0.6.32"
summary: "Refined the homepage ‘What changed since last visit’ module to show multi-entry highlights (up to three recent changes) instead of only the single latest update."
category: "design"
draft: false
---

## Changed
- Added embedded recent changelog data payload for the last-visit module.
- Updated last-visit logic to detect and count all changelog entries newer than the stored last-seen timestamp.
- Added a compact list rendering path that surfaces up to three recent changes with direct links and dates.
- Kept first-visit and fully-up-to-date states intact while improving return-visitor context depth.

## Why
- This batch continues refinement of the return-visitor update surface.
- The update gives better situational awareness when multiple ships land between visits.
