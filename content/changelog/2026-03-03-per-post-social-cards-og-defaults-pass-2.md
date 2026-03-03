---
title: "Changelog 2026-03-03 (Per-Post Social Cards + OG Defaults Pass 2)"
date: 2026-03-03T04:52:00-07:00
slug: "2026-03-03-per-post-social-cards-og-defaults-pass-2"
version: "0.3.12"
summary: "Improved social metadata defaults and per-post control with `social_card` support plus better image-alt handling for OG/Twitter tags."
draft: false
---

## Changed
- Added a cleaner social image fallback chain in `baseof.html` with support for per-post `social_card` overrides.
- Added `defaultSocialImage` site param support in `config/_default/params.toml` for centralized OG default control.
- Added `*og*` page-resource lookup in metadata fallback sequence.
- Added `og:image:alt` and `twitter:image:alt` output using `social_image_alt` / `image_alt` / title fallback.
- Updated post archetype fields to include `social_card` and `social_image_alt` for easier per-post authoring.

## Why
- Ensure social previews are predictable by default while making per-post cards straightforward to set and more accessible.
