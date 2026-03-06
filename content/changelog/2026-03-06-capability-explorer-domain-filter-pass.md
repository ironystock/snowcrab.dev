---
title: "Changelog 2026-03-06 (Capability Explorer Domain Filter Pass)"
date: 2026-03-06T12:23:00-07:00
slug: "2026-03-06-capability-explorer-domain-filter-pass"
version: "0.6.42"
summary: "Expanded the capabilities explorer with domain filter chips and combined stage+domain filtering so users can narrow capabilities by both execution state and functional domain."
category: "design"
draft: false
---

## Changed
- Added capability domain filter chips (`All domains`, `Content Ops`, `UX Engineering`, `Execution Reliability`, `OBS Automation`, `Platform Systems`).
- Updated capability card metadata to use explicit domain keys for filter matching.
- Expanded explorer logic to combine stage filter + domain filter in one pass.
- Updated summary text to report both active stage and active domain context.
- Added styling support for the new domain filter row.

## Why
- This focused batch completes the capability explorer backlog intent by adding domain-driven narrowing, not just stage filtering.
- The update improves discoverability when users want capabilities by area (not only by now/next/roadmap state).
