---
title: "Changelog 2026-03-02 (Per-post Social Cards + Cleaner OG Defaults)"
date: 2026-03-02T23:23:00-07:00
slug: "2026-03-02-per-post-social-cards-and-og-defaults"
version: "0.3.5"
summary: "Added better per-post social image resolution and cleaner Open Graph/Twitter fallback behavior."
draft: false
---

## Added
- Per-post social image resolution chain in base template:
  1. `social_image`
  2. `featured_image`
  3. `image`
  4. page bundle resource match (`*social*`, then `*cover*`)
  5. global fallback (`/og-default.svg`)

## Changed
- Description fallback is now cleaner: `summary` → `Description` → site default.
- `og:type` now uses `article` for content pages and `website` elsewhere.

## Fixed
- Posts with empty `social_image` no longer force weaker/ambiguous OG output.
- Reduced need for manual social card wiring in every post front matter.
