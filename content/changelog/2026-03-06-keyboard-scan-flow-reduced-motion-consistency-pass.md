---
title: "Changelog 2026-03-06 (Keyboard Scan-Flow + Reduced-Motion Consistency Pass)"
date: 2026-03-06T11:39:00-07:00
slug: "2026-03-06-keyboard-scan-flow-reduced-motion-consistency-pass"
version: "0.6.40"
summary: "Improved keyboard scan-flow consistency by auto-keeping active command-palette results and changelog filter tabs in view, with motion behavior respecting reduced-motion preferences."
category: "design"
draft: false
---

## Changed
- Added active-option auto-scroll in the command palette so keyboard navigation keeps the highlighted result visible in the list viewport.
- Added active-tab auto-scroll in changelog filters so keyboard navigation keeps the selected filter chip visible when wrapped/tight layouts are in play.
- Added reduced-motion-aware behavior so auto-scroll uses non-animated movement when users prefer reduced motion.

## Why
- This batch implements a cross-check polish pass for keyboard scan flow across two high-frequency interactive surfaces.
- The update improves orientation while preserving motion accessibility preferences.
