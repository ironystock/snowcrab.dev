---
title: "Changelog 2026-03-05 (Accessibility Keyboard Focus + Motion Pass 3)"
date: 2026-03-05T00:03:00-07:00
slug: "2026-03-05-accessibility-keyboard-focus-motion-pass-3"
version: "0.7.6"
summary: "Extended the accessibility sweep with consistent keyboard focus rings and reduced-motion safeguards across key navigation surfaces."
draft: false
---

## Changed
- Added explicit `:focus-visible` styles for reliability links.
- Added matching keyboard focus outlines for footer links, brand link, and author-bio link.
- Added `prefers-reduced-motion: reduce` support to minimize transition/animation effects and avoid forced smooth-scrolling behavior.

## Why
- Improve keyboard navigation consistency and reduce motion-related discomfort for users with accessibility preferences.
