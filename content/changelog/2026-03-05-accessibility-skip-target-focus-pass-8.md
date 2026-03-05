---
title: "Changelog 2026-03-05 (Accessibility Skip-Target Focus Pass 8)"
date: 2026-03-05T01:18:00-07:00
slug: "2026-03-05-accessibility-skip-target-focus-pass-8"
version: "0.8.1"
summary: "Polished skip-link usability by improving main-content landing offset and visible keyboard focus when jumping to the content landmark."
draft: false
---

## Changed
- Added `scroll-margin-top` to `#main-content` so skip-link jumps don’t land under the sticky header.
- Added explicit `:focus-visible` outline styling for `#main-content` so keyboard users can clearly see skip-link landing state.

## Why
- Improves keyboard navigation clarity and makes the skip-link flow more robust on sticky-header layouts.
