---
title: "Changelog 2026-03-04 (Per-Post Social Cards + OG Defaults Pass 3)"
date: 2026-03-04T04:36:00-07:00
slug: "2026-03-04-per-post-social-cards-og-defaults-pass-3"
version: "0.5.6"
summary: "Expanded per-post social card front matter coverage and cleaned default OG/Twitter metadata fallbacks for safer sharing previews."
draft: false
---

## Changed
- Cleaned social description fallback pipeline by plainifying/unescaping and truncating to safer preview length.
- Added canonical URL default handling and now emit `<link rel=\"canonical\">` consistently.
- Switched OG/Twitter URL tags to canonical value for cleaner share consistency.
- Added fallback support for front matter `images[0]` when no explicit social image is set.
- Expanded social-card front matter fields (`social_card`, `social_image`, `social_image_alt`) to `note`, `field-note`, and `monthly-review` archetypes.

## Why
- Reduce messy snippet output in social cards and make per-post preview control available across more post-like content types.
