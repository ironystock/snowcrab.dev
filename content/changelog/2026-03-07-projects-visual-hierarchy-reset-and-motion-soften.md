---
title: "Changelog 2026-03-07 (Projects Visual Hierarchy Reset + Motion Soften)"
date: 2026-03-07T16:33:00-07:00
slug: "2026-03-07-projects-visual-hierarchy-reset-and-motion-soften"
version: "0.9.15"
summary: "Reduced box-on-box nesting pressure on Projects and removed distracting card upshift hover motion across the site."
draft: false
---

## Changed
- Removed card hover upshift (`translateY`) microinteraction; retained subtle shadow response only.
- Added Projects-specific hierarchy flattening:
  - tab wrapper no longer rendered as another heavy card layer
  - Health/Integrations wrappers render with reduced chrome inside Projects surface
  - reduced grid spacing to improve scanability

## Outcome
- Less visual stacking fatigue on Projects page.
- Motion feels calmer and less distracting during cursor travel.
