---
title: "Changelog 2026-03-05 (Accessibility Nav Keyboard Scroll Pass 22)"
date: 2026-03-05T06:03:00-07:00
slug: "2026-03-05-accessibility-nav-keyboard-scroll-pass-22"
version: "0.9.7"
summary: "Improved horizontal navigation accessibility on smaller screens by adding keyboard scrolling support and explicit screen-reader guidance."
draft: false
---

## Changed
- Added an assistive hint for main navigation describing horizontal overflow behavior and keyboard usage.
- Made the primary nav container keyboard-focusable (`tabindex="0"`) to support non-pointer interaction with overflowed links.
- Added a dedicated nav keyboard script to support `ArrowLeft`, `ArrowRight`, `Home`, and `End` horizontal scrolling.

## Why
- Improves keyboard-only navigation on narrow layouts where the menu overflows horizontally.
- Makes hidden/off-screen navigation options easier to discover and access without touch or mouse input.
