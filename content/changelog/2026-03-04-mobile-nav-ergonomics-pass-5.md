---
title: "Changelog 2026-03-04 (Mobile Nav Ergonomics Pass 5)"
date: 2026-03-04T04:23:00-07:00
slug: "2026-03-04-mobile-nav-ergonomics-pass-5"
version: "0.5.5"
summary: "Improved mobile nav touch ergonomics with stronger edge affordances, larger tap targets, and more reliable horizontal snap behavior."
draft: false
---

## Changed
- Increased mobile nav horizontal gap and side padding to reduce accidental taps.
- Switched to mandatory horizontal snap with inline scroll padding for cleaner item alignment.
- Added `overscroll-behavior-x: contain` to keep horizontal swipes from fighting page movement.
- Increased edge fade affordance width/contrast to better indicate hidden items.
- Raised nav pill minimum height to `46px`, bumped inner padding, and enabled `scroll-snap-stop: always`.

## Why
- Keep one-handed mobile navigation smoother and clearer while preserving the existing header structure.
