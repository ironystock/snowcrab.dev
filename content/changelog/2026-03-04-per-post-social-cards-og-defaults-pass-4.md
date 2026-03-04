---
title: "Changelog 2026-03-04 (Per-Post Social Cards + OG Defaults Pass 4)"
date: 2026-03-04T08:37:00-07:00
slug: "2026-03-04-per-post-social-cards-og-defaults-pass-4"
version: "0.7.1"
summary: "Tightened social metadata defaults with canonical URL tags and stronger Twitter fallback fields."
draft: false
---

## Changed
- Added canonical URL fallback (`.Params.canonical` → `.Permalink`) and emit canonical link tag in base template.
- Switched OG URL to canonical value for cleaner sharing consistency.
- Added `twitter:site` from `site.Params.socialHandle` when available.
- Added `twitter:creator` with per-page override (`.Params.twitter_creator`) and site-level fallback.
- Added `twitter:url` using canonical URL.
- Improved default social image alt fallback by using `defaultOgImageAlt` when default image is in use.

## Why
- Make preview metadata more consistent and give cleaner defaults for social sharing across posts/pages.
