---
title: "Changelog 2026-03-07 (Roadmap 4 Track A Scorecard Strip)"
date: 2026-03-07T22:01:00-07:00
slug: "2026-03-07-roadmap4-tracka-scorecard-strip"
version: "0.8.4"
summary: "Added a roadmap scorecard strip at the top of /pages/roadmap/ showing active wave, open items, last ship time, and blocker count with direct links to /pages/now/ and the latest changelog receipt."
draft: false
---

## Changed
- Added a new **Roadmap scorecard** strip at the top of `/pages/roadmap/`.
- Scorecard now surfaces:
  - active wave label (auto-detected from the active wave heading)
  - open checklist item count
  - last ship time (latest changelog entry timestamp)
  - blocker count (BLOCKED-tagged list items)
- Added direct quick links from scorecard to:
  - `/pages/now/`
  - latest changelog receipt permalink

## UX receipts
- After artifact: `/artifacts/roadmap4/after-scorecard-strip-2026-03-07.jpg`

## Why
- Makes roadmap health scannable in one glance before reading full track details.
- Reduces context-switch cost by exposing queue density, recency, and blocker signal up front.
