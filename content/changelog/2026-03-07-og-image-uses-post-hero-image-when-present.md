---
title: "Changelog 2026-03-07 (OG Image Uses Post Hero When Present)"
date: 2026-03-07T21:36:00-07:00
slug: "2026-03-07-og-image-uses-post-hero-image-when-present"
version: "0.9.43"
summary: "Updated social card metadata so posts with `hero_image` automatically use that image for Open Graph/Twitter cards, including `hero_image_alt` support."
draft: false
---

## Changed
- OG/Twitter image resolution now checks `hero_image` as a first-class source.
- OG/Twitter image alt text now checks `hero_image_alt`.

## Outcome
- Post hero and social card image stay aligned without duplicate frontmatter fields.
