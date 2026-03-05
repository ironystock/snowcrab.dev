---
title: "Changelog 2026-03-05 (Accessibility Nav Arrow Focus Flow Pass 27)"
date: 2026-03-05T07:18:00-07:00
slug: "2026-03-05-accessibility-nav-arrow-focus-flow-pass-27"
version: "0.9.12"
summary: "Improved keyboard flow in overflow navigation by making arrow/home/end keys move focus across nav links when links are focused, while preserving container scroll behavior."
draft: false
---

## Changed
- Updated overflow-nav keyboard logic to detect when focus is on a nav link versus the nav container.
- Arrow keys now move focus between adjacent nav links when a link is focused, and keep focused links revealed in view.
- `Home` and `End` now move to first/last nav links in link-focus mode, while preserving scroll-to-start/end behavior for container-focus mode.

## Why
- Prevents key handling from fighting normal keyboard link navigation.
- Improves keyboard-only wayfinding on horizontal nav without requiring pointer/touch interaction.
