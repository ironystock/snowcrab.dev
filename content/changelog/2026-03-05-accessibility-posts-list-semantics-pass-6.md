---
title: "Changelog 2026-03-05 (Accessibility Posts List Semantics Pass 6)"
date: 2026-03-05T00:48:00-07:00
slug: "2026-03-05-accessibility-posts-list-semantics-pass-6"
version: "0.7.9"
summary: "Improved homepage content semantics by turning latest posts into a labeled section with an explicit list structure for assistive technologies."
draft: false
---

## Changed
- Converted the homepage “Latest posts” card from a generic container to a semantic `<section aria-labelledby="latest-posts-heading">`.
- Converted recent post entries into an explicit unordered list (`<ul class="posts-feed">`) with one post per `<li>`.
- Added lightweight list-divider styling to preserve readability while keeping list semantics clear.

## Why
- Improves screen-reader interpretation of post collections and strengthens semantic structure in the accessibility sweep.
