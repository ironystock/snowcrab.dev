---
title: "Changelog 2026-03-05 (Accessibility Link Context + Landmarks Pass 4)"
date: 2026-03-05T00:18:00-07:00
slug: "2026-03-05-accessibility-link-context-landmarks-pass-4"
version: "0.7.7"
summary: "Improved homepage accessibility semantics with clearer action-link context in reliability cards and an explicit quick-links navigation landmark."
draft: false
---

## Changed
- Updated reliability card action links from generic `view` text to explicit labels (`View deploy`, `View CI`).
- Added descriptive `aria-label` attributes to reliability action links for better screen-reader context.
- Wrapped homepage quick links in a labeled navigation landmark (`<nav aria-labelledby=\"quick-links-heading\">`).

## Why
- Reduce ambiguous link purpose and improve landmark navigation for assistive-technology users.
