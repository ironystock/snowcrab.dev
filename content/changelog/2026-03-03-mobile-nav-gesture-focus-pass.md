---
title: "Changelog 2026-03-03 (Mobile Nav Gesture + Focus Pass)"
date: 2026-03-03T03:38:00-07:00
slug: "2026-03-03-mobile-nav-gesture-focus-pass"
version: "0.5.2"
summary: "Improved mobile nav ergonomics with touch gesture containment and clearer keyboard focus treatment on nav chips."
draft: false
---

## Changed
- Added `touch-action: pan-x` to mobile nav rail for cleaner horizontal gesture intent.
- Added `overscroll-behavior-x: contain` to reduce accidental parent scrolling while swiping nav chips.
- Added explicit `:focus-visible` ring styling for mobile/keyboard accessibility on nav links.

## Why
- Improves nav control confidence on touch devices and accessibility clarity for focused links.
