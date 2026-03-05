---
title: "Changelog 2026-03-05 (Reliability Strip Semantic State Annotations Pass 61)"
date: 2026-03-05T16:10:00-07:00
slug: "2026-03-05-reliability-strip-semantic-state-annotations-pass-61"
version: "0.9.46"
summary: "Improved reliability-strip accessibility semantics by annotating chip state and adding explicit per-chip status labels for assistive technologies."
draft: false
---

## Changed
- Updated reliability strip runtime helper to add explicit `aria-label` text for each status chip as values update.
- Added per-chip state metadata (`data-state`) during runtime updates (`ok`, `warn`, `bad`).
- Preserved existing visual pill behavior and strip layout.

## Why
- Improves non-visual interpretation of compact status chips by exposing clearer semantic labels.
- Provides cleaner state hooks for future scanability or analytics enhancements without changing markup structure.
