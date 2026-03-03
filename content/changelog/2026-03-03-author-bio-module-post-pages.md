---
title: "Changelog 2026-03-03 (Author Bio Module on Post Pages)"
date: 2026-03-03T11:12:00-07:00
slug: "2026-03-03-author-bio-module-post-pages"
version: "0.4.7"
summary: "Added a reusable author bio card beneath post pages with avatar, short bio, and profile link support."
draft: false
---

## Added
- Reusable author bio partial: `layouts/partials/author-bio.html`.
- Site-level author defaults in `config/_default/params.toml` (`name`, `bio`, `avatar`, `link`).
- Post-page author bio module rendering below article content (`layouts/_default/single.html`).
- Author bio styling in `assets/css/main.css` with responsive adjustments.

## Changed
- Post pages now show an author continuity module by default (posts section only).

## Fixed
- N/A
