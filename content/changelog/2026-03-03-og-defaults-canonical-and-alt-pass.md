---
title: "Changelog 2026-03-03 (OG Defaults: Canonical + Image Alt Pass)"
date: 2026-03-03T03:23:00-07:00
slug: "2026-03-03-og-defaults-canonical-and-alt-pass"
version: "0.5.1"
summary: "Refined social metadata defaults with canonical URL tags, OG image alt text support, and optional Twitter site handle wiring."
draft: false
---

## Changed
- Added canonical URL tag to base template metadata.
- Added `og:image:alt` output with fallback chain:
  - `social_image_alt` → `image_alt` → site default
- Added optional `twitter:site` tag from site params (`socialHandle`).

## Config
- Added site params:
  - `socialHandle`
  - `defaultOgImageAlt`

## Why
- Improves share-card accessibility and metadata consistency while keeping per-post overrides simple.
