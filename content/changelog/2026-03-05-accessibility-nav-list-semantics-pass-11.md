---
title: "Changelog 2026-03-05 (Accessibility Nav List Semantics Pass 11)"
date: 2026-03-05T02:03:00-07:00
slug: "2026-03-05-accessibility-nav-list-semantics-pass-11"
version: "0.8.4"
summary: "Improved global navigation semantics by converting header and footer nav links to structured lists while preserving responsive behavior."
draft: false
---

## Changed
- Converted main header navigation links to semantic list markup (`ul/li`) inside the existing nav landmark.
- Converted footer links to semantic list markup (`ul/li`) inside the footer nav landmark.
- Updated nav/footer CSS selectors to support list-based structure with no visual regressions.
- Preserved mobile snap ergonomics by applying mobile spacing/snap styles to `.nav-list` items.

## Why
- Improves assistive-technology parsing of grouped navigation links and continues the accessibility sweep with structural semantics.
