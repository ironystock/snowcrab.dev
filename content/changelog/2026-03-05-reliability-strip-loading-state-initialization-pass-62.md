---
title: "Changelog 2026-03-05 (Reliability Strip Loading-State Initialization Pass 62)"
date: 2026-03-05T16:25:00-07:00
slug: "2026-03-05-reliability-strip-loading-state-initialization-pass-62"
version: "0.9.47"
summary: "Improved reliability strip consistency by initializing all compact status chips with explicit loading-state text, tone, and semantic labels at runtime start."
draft: false
---

## Changed
- Added explicit runtime initialization for compact reliability strip chips:
  - Deploy → `Deploy · Loading`
  - CI → `CI · Loading`
  - Incidents → `Incidents · Loading`
- Initialization now applies the same semantic annotation path used for final states (`aria-label` + `data-state`).

## Why
- Ensures strip semantics are consistent from first render through final resolved state.
- Avoids ambiguous/unannotated interim chip states during early network fetch windows.
