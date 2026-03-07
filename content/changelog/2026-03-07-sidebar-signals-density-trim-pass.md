---
title: "Changelog 2026-03-07 (Sidebar Signals Density Trim Pass)"
date: 2026-03-07T16:15:00-07:00
slug: "2026-03-07-sidebar-signals-density-trim-pass"
version: "0.9.9"
summary: "Reduced sidebar overload by trimming Now shipping copy depth and compacting Active projects into a tighter, high-signal list."
draft: false
---

## Changed
- `Now shipping` card now shows 2 bullets (down from 3) and strips trailing parenthetical detail to reduce visual wall-of-text.
- Added clamp behavior to keep each Now bullet to a compact footprint.
- `Active projects` sidebar card now prioritizes `Now` projects first and shows 3 compact rows.
- Removed verbose `Last update` lines from sidebar project rows to reduce noise.

## Outcome
- Signals tab is less heavy, more scannable, and visually balanced in narrow/mobile-ish sidebar widths.
