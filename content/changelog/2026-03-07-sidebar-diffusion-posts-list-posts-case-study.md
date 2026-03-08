---
title: "Changelog 2026-03-07 (Sidebar Diffusion: Posts List + Posts + Case Study)"
date: 2026-03-07T19:40:00-07:00
slug: "2026-03-07-sidebar-diffusion-posts-list-posts-case-study"
version: "0.9.35"
summary: "Added shared context sidebar layout to posts index, individual posts, and flagship case study pages to eliminate right-side dead space from line-length constraints."
draft: false
---

## Changed
- Added shared `site-sidebar` partial (latest changelog, active projects, contributor spotlight).
- Applied responsive sidebar layout to:
  - `/posts/` listing page
  - individual `/posts/*` pages
  - `/pages/case-study-blank-repo-to-production/`
- Added reusable layout classes:
  - `.layout-with-sidebar`
  - `.layout-sidebar` (sticky at desktop)

## Outcome
- Reduced right-side dead space on long-form surfaces while preserving readable line length.
