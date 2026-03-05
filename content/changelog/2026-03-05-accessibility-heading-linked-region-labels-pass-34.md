---
title: "Changelog 2026-03-05 (Accessibility Heading-Linked Region Labels Pass 34)"
date: 2026-03-05T09:18:00-07:00
slug: "2026-03-05-accessibility-heading-linked-region-labels-pass-34"
version: "0.9.19"
summary: "Improved structural accessibility consistency by replacing remaining standalone region/list labels with heading-linked labeling on homepage and projects surfaces."
draft: false
---

## Changed
- Updated homepage sidebar container to use heading-linked labeling (`aria-labelledby="site-updates-heading"`) with a dedicated SR-only heading.
- Updated projects health-card list labeling to reference the existing section heading (`aria-labelledby="project-health-cards-heading"`) instead of a standalone aria-label.

## Why
- Keeps region/list labeling patterns consistent with the broader heading-linked accessibility strategy.
- Improves navigational clarity for assistive technologies while reducing redundant custom label text.
