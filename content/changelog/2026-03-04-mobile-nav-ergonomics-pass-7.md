---
title: "Changelog 2026-03-04 (Mobile Nav Ergonomics Pass 7)"
date: 2026-03-04T06:22:00-07:00
slug: "2026-03-04-mobile-nav-ergonomics-pass-7"
version: "0.6.2"
summary: "Further mobile nav ergonomics polish: stronger swipe intent handling, cleaner snap alignment, and larger touch targets."
draft: false
---

## Changed
- Increased mobile nav spacing and horizontal rail padding for safer one-handed taps.
- Added inline scroll padding so edge chips snap into view without clipping.
- Upgraded to mandatory snap + snap-stop for more predictable horizontal navigation.
- Added `touch-action: pan-x` and kept horizontal overscroll containment to improve gesture intent.
- Widened edge overflow hints and slightly increased chip tap target/padding.

## Why
- Continue iterative mobile navigation comfort improvements while keeping header IA unchanged.
