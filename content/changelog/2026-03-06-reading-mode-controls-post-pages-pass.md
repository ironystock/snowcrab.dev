---
title: "Changelog 2026-03-06 (Reading Mode Controls on Post Pages Pass)"
date: 2026-03-06T06:58:00-07:00
slug: "2026-03-06-reading-mode-controls-post-pages-pass"
version: "0.6.21"
summary: "Added post-page reading mode controls with reusable presets for comfortable spacing, focused width, and high-contrast reading surfaces."
category: "design"
draft: false
---

## Changed
- Added a new Reading mode controls module to post pages.
- Added four presets: `Default`, `Comfortable`, `Focus`, and `High contrast`.
- Implemented client-side preset behavior with localStorage persistence so preferred mode carries across visits.
- Applied preset-aware typography/surface styles to improve long-form readability.
- Wired the new reading mode script into global template assets.

## Why
- This batch implements the backlog item for reading mode controls on post pages.
- The update gives readers faster control over text density, reading width, and contrast without changing site theme globally.
