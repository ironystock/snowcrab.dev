---
title: "Changelog 2026-03-05 (Accessibility Time + Byline Semantics Pass 12)"
date: 2026-03-05T02:18:00-07:00
slug: "2026-03-05-accessibility-time-byline-semantics-pass-12"
version: "0.8.5"
summary: "Strengthened homepage and post metadata semantics with machine-readable dates and improved author-bio labeling/link context."
draft: false
---

## Changed
- Added semantic `<time datetime>` markup to homepage date metadata in latest-posts, latest-changelog, recent-entry rows, and latest-ship metadata.
- Updated author-bio partial landmark labeling from generic `aria-label` to heading association (`aria-labelledby`).
- Added explicit author relation/context on profile links (`rel="author"` + descriptive `aria-label`).

## Why
- Improves assistive-tech parsing of temporal metadata and clarifies byline/profile relationships without changing page layout.
