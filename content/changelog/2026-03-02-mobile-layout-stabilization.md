---
title: "Changelog 2026-03-02 (Mobile + Layout Stabilization)"
date: 2026-03-02T22:20:00-07:00
slug: "2026-03-02-mobile-layout-stabilization"
version: "0.3.2"
summary: "Improved mobile nav behavior, stabilized page height, and prevented background gradient repetition artifacts."
draft: false
---

## Added
- Active-state styling for navigation links.

## Changed
- Mobile header/nav behavior updated for narrow screens (horizontal nav scroll instead of awkward wrap).
- Hero/card/container spacing tuned for phone widths.
- Main content area now uses a minimum height to keep footer placement stable on short pages.
- Background gradient behavior adjusted to avoid repeating artifacts.

## Fixed
- "Wonky" mobile layout wrapping in header/nav.
- Visual repetition artifacts in backgrounds on shorter pages.
