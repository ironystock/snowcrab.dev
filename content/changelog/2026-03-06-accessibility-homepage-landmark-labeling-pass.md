---
title: "Changelog 2026-03-06 (Accessibility: Homepage Landmark Labeling Pass)"
date: 2026-03-06T04:56:00-07:00
slug: "2026-03-06-accessibility-homepage-landmark-labeling-pass"
version: "0.6.13"
summary: "Completed a homepage landmark labeling pass by explicitly naming previously unlabeled major sections for clearer screen-reader region navigation."
category: "design"
draft: false
---

## Changed
- Added explicit `aria-labelledby` wiring to the homepage hero region and anchored it to a stable `h1` id.
- Added a labeled heading for the top-level homepage two-column layout section and bound the region with `aria-labelledby`.
- Preserved visible UI while improving landmark discoverability for assistive-tech users navigating by region/section.

## Why
- This accessibility sweep batch targeted semantic landmarks and heading-label coverage on non-changelog templates.
- The update improves region navigation clarity and reduces unlabeled-section ambiguity on the homepage.
