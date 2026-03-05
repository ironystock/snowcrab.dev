---
title: "Changelog 2026-03-05 (Accessibility Nav Reduced-Motion Pass 28)"
date: 2026-03-05T07:33:00-07:00
slug: "2026-03-05-accessibility-nav-reduced-motion-pass-28"
version: "0.9.13"
summary: "Updated keyboard-driven nav scrolling to respect reduced-motion user preferences by disabling smooth animation when motion reduction is requested."
draft: false
---

## Changed
- Updated overflow navigation keyboard script to detect `prefers-reduced-motion: reduce`.
- Switched nav scroll and reveal behavior from forced smooth animation to conditional behavior (`auto` when reduced-motion is enabled, `smooth` otherwise).

## Why
- Prevents unnecessary motion for users who explicitly request reduced animation.
- Keeps keyboard overflow navigation usable while aligning behavior with accessibility motion preferences.
