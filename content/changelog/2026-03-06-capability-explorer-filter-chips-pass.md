---
title: "Changelog 2026-03-06 (Capability Explorer Filter Chips Pass)"
date: 2026-03-06T06:13:00-07:00
slug: "2026-03-06-capability-explorer-filter-chips-pass"
version: "0.6.18"
summary: "Added a structured capability explorer on /pages/capabilities with stage filter chips (Now/Next/Roadmap) and domain tags for faster scope scanning."
category: "design"
draft: false
---

## Changed
- Reworked `/pages/capabilities` into a card-based capability explorer surface.
- Added stage filter chips (`All`, `Now`, `Next`, `Roadmap`) with keyboard-accessible tablist semantics.
- Added domain tags to each capability card to make capability ownership/scope easier to scan.
- Added client-side filter behavior that updates visible cards and live summary text.
- Added dedicated explorer styles and wired a new capability explorer script in base template assets.

## Why
- This batch delivers the backlog item for capability explorer filtering and domain tag surfacing.
- The update improves discoverability of what is available now versus staged next/roadmap capabilities.
