---
title: "Changelog 2026-03-07 (Post Hero + List Thumbnail Support)"
date: 2026-03-07T21:24:00-07:00
slug: "2026-03-07-post-hero-image-and-list-thumbnail-support"
version: "0.9.42"
summary: "Added post-level hero image support on single post pages and matching thumbnail rendering on the posts listing page; wired first usage for banana-claws launch post."
draft: false
---

## Added
- New post frontmatter support:
  - `hero_image`
  - `hero_image_alt`
- Single post template now renders hero media for posts when provided.
- Posts listing now renders thumbnail cards from the same hero image source.

## Applied
- Added first hero asset + frontmatter wiring for:
  - `/posts/banana-claws-launch-queue-workflow-and-branding-foundation/`
