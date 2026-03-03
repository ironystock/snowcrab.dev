---
title: "Changelog 2026-03-03 (Mobile Nav Ergonomics Pass 3)"
date: 2026-03-03T04:37:00-07:00
slug: "2026-03-03-mobile-nav-ergonomics-pass-3"
version: "0.3.11"
summary: "Improved mobile nav touch ergonomics with larger tap targets, better horizontal scrolling behavior, and clearer edge overflow affordances."
draft: false
---

## Changed
- Increased mobile nav chip spacing and tap target sizing for easier thumb interaction.
- Added horizontal scroll quality improvements: `scroll-padding-inline`, `overscroll-behavior-x: contain`, and `touch-action: pan-x`.
- Tuned edge fade hints and added sticky overlay fades so overflow direction reads more clearly.
- Added visible keyboard focus treatment for nav links (`:focus-visible`) to improve accessibility.

## Why
- Make the compact mobile header navigation feel easier and more forgiving on real devices, especially during one-handed use.
