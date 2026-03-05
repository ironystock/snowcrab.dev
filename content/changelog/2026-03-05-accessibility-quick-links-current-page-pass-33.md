---
title: "Changelog 2026-03-05 (Accessibility Quick Links Current-Page Pass 33)"
date: 2026-03-05T08:48:00-07:00
slug: "2026-03-05-accessibility-quick-links-current-page-pass-33"
version: "0.9.18"
summary: "Improved homepage quick-links accessibility by adding current-page semantics and matching visual emphasis for active destination links."
draft: false
---

## Changed
- Converted homepage quick links into a structured link map with route-aware current-page detection.
- Added `aria-current="page"` on quick-links entries when the current route matches the destination.
- Added explicit styling for current quick-links entries so visual emphasis matches assistive-tech context.

## Why
- Gives users clearer orientation when navigating via quick-link surfaces.
- Aligns quick-links behavior with existing current-page semantics in primary and footer navigation.
