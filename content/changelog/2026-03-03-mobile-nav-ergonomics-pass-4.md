---
title: "Changelog 2026-03-03 (Mobile Nav Ergonomics Pass 4)"
date: 2026-03-03T06:52:00-07:00
slug: "2026-03-03-mobile-nav-ergonomics-pass-4"
version: "0.3.20"
summary: "Improved mobile nav feel with larger targets, smoother horizontal swipe behavior, clearer overflow fades, and stronger focus visibility."
draft: false
---

## Changed
- Increased mobile nav spacing and tap target sizing for easier thumb interaction.
- Added horizontal-scroll ergonomics (`scroll-padding-inline`, `overscroll-behavior-x`, `touch-action: pan-x`).
- Strengthened edge overflow affordance with larger gradient hints and sticky fade overlays.
- Added `:focus-visible` outline treatment for nav links to improve keyboard accessibility.

## Why
- Make mobile header navigation more forgiving and readable during one-handed use.
