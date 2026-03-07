---
title: "Changelog 2026-03-07 (Phase 3: Depth + Layering Pass for Cards/Panels)"
date: 2026-03-07T15:52:00-07:00
slug: "2026-03-07-phase3-depth-layering-pass-cards-panels"
version: "0.8.7"
summary: "Shipped a subtle depth/layering pass across cards and key panels using shared panel tokens for stronger hierarchy without visual noise."
draft: false
---

## Changed
- Added shared panel depth tokens (`--shadow-soft`, `--shadow-lifted`, `--panel-bg`, `--panel-border-strong`, `--panel-highlight`) for reusable layering.
- Upgraded base `.card` surface to use tokenized panel background, stronger border hierarchy, and soft highlight/shadow stacking.
- Refined hero panel depth with a gentle top sheen + lifted shadow stack to better anchor page hierarchy.
- Applied the same depth treatment to key panel surfaces (projects health, integration cards, capability cards, automation demos, reliability rows, state nodes, and supporting list/panel blocks).
- Captured visual artifacts for this pass:
  - `/artifacts/phase3/before-depth-layering-pass-home.jpg`
  - `/artifacts/phase3/after-depth-layering-pass-home.jpg`
  - `/artifacts/phase3/before-depth-layering-pass-projects.jpg`
  - `/artifacts/phase3/after-depth-layering-pass-projects.jpg`

## Why
- Creates clearer visual hierarchy between shell/background and information panels.
- Makes dense multi-card sections easier to scan at a glance.
- Establishes reusable depth tokens for the next Phase 3 motion/layout passes.
