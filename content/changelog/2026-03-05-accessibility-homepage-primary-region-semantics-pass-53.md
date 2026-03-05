---
title: "Changelog 2026-03-05 (Accessibility Homepage Primary-Region Semantics Pass 53)"
date: 2026-03-05T14:10:00-07:00
slug: "2026-03-05-accessibility-homepage-primary-region-semantics-pass-53"
version: "0.9.38"
summary: "Improved homepage structural accessibility by converting the primary content column from a generic container to a heading-linked section landmark."
draft: false
---

## Changed
- Replaced the homepage left-column generic wrapper with a semantic `section` landmark.
- Added an SR-only heading (`Primary content`) and linked the region with `aria-labelledby`.
- Preserved existing latest-posts card structure and visual layout.

## Why
- Improves landmark navigation by giving assistive technologies clearer page-region boundaries.
- Reduces reliance on unlabeled generic containers in core homepage structure.
