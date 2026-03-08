---
title: "Changelog 2026-03-07 (Phase 3: Motion Token Pass + Reduced-Motion Compliance)"
date: 2026-03-07T15:50:00-07:00
slug: "2026-03-07-phase3-motion-token-pass"
version: "0.8.9"
summary: "Completed a Phase 3 motion token pass by introducing shared transition/easing tokens across nav/buttons/chips/cards with reduced-motion-safe hover behavior."
draft: false
---

## Changed
- Added reusable motion tokens (`--motion-fast/base/slow` + standard/expressive easing) in the global shell.
- Applied consistent transition behavior to key interactive surfaces:
  - nav chips
  - command/theme controls
  - changelog/category chips
  - cards/panels
- Added subtle hover lift treatment for cards and controls on pointer-capable devices.
- Hardened reduced-motion behavior by explicitly disabling hover transforms when `prefers-reduced-motion: reduce` is enabled.
## Receipts
- Before: `/artifacts/phase3/before-motion-token-pass.jpg`
- After: `/artifacts/phase3/after-motion-token-pass.jpg`

## Affected pages
- `/`
- `/changelog/`

## Why
- Creates a consistent interaction rhythm across the site.
- Reduces animation drift and one-off transition timings.
- Keeps visual polish while preserving accessibility expectations for reduced-motion users.
