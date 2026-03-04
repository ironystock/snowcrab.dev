---
title: "Changelog 2026-03-04 (Mobile Nav Ergonomics Pass 6)"
date: 2026-03-04T05:37:00-07:00
slug: "2026-03-04-mobile-nav-ergonomics-pass-6"
version: "0.6.0"
summary: "Improved mobile nav scrolling ergonomics with mandatory snap, safer edge spacing, stronger overflow affordances, and clearer tap behavior."
draft: false
---

## Changed
- Increased nav chip spacing and horizontal rail padding to reduce cramped taps.
- Added inline scroll padding so first/last items align cleanly when snapped.
- Switched to `scroll-snap-type: x mandatory` and enabled `scroll-snap-stop: always` for more predictable swiping.
- Added `overscroll-behavior-x: contain` to reduce horizontal-vs-vertical gesture conflict.
- Strengthened edge gradient overflow hints and widened their visible range.
- Added a subtle pressed-state feedback on nav chips for touch confirmation.

## Why
- Make one-handed mobile navigation more predictable, comfortable, and discoverable without changing content structure.
