---
title: "Changelog 2026-03-07 (Roadmap 4 Track B Since-Last-Heartbeat Log)"
date: 2026-03-07T22:20:00-07:00
slug: "2026-03-07-roadmap4-trackb-since-last-heartbeat-log-module"
version: "0.8.5"
summary: "Added a compact 'Since last heartbeat' module on /pages/roadmap/ that auto-lists the latest 5 changelog receipts for quick execution context."
draft: false
---

## Changed
- Added a new **Since last heartbeat** module to the top section of `/pages/roadmap/`, directly below the roadmap scorecard.
- The module now auto-pulls and renders the **latest 5 changelog receipts** from `/changelog/`.
- Each log row includes:
  - ship timestamp (MST)
  - linked changelog title for fast drill-in
- Added compact styling for the new module to preserve scan speed and avoid visual bloat.

## Why
- Reduces friction during heartbeat readouts by keeping the most recent receipts in immediate view.
- Improves operator context without requiring a navigation jump to the full changelog index.
