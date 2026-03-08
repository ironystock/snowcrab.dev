---
title: "Changelog 2026-03-07 (Roadmap 4 Track B Keyboard Jump Chips)"
date: 2026-03-07T22:34:00-07:00
slug: "2026-03-07-roadmap4-trackb-keyboard-jump-chips"
version: "0.8.5"
summary: "Added keyboard-focusable jump chips on /pages/roadmap/ so operators can jump directly to Track A–E and Roadmap 4 anchors."
draft: false
---

## Changed
- Added a new **Roadmap jumps** module near the top of `/pages/roadmap/`.
- Added chip-style anchor links for:
  - Track A
  - Track B
  - Track C
  - Track D
  - Track E
  - Roadmap 4
- Styled the jump chip container in `assets/css/main.css` using existing chip tokens for visual consistency.

## Why
- Improves keyboard and scan-flow ergonomics on a long roadmap page.
- Reduces friction during heartbeat execution by making active sections one-jump away.
