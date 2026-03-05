---
title: "Changelog 2026-03-05 (Brand Asset Sync: PNG OG + Favicon)"
date: 2026-03-05T00:10:00-07:00
slug: "2026-03-05-brand-asset-sync-png-og-and-favicon"
version: "0.6.0"
summary: "Swapped in the new PNG favicon and default OG assets, and synced header/author avatar references to the updated logo image."
draft: false
---

## Changed
- Replaced `/static/favicon-256.png` with the new provided logo asset (256x256).
- Added new default social image `/static/og-default.png` (1200x630).
- Updated default OG image config to PNG (`defaultSocialImage = /og-default.png`).
- Updated header logo source to `/favicon-256.png`.
- Updated default author avatar source to `/favicon-256.png`.

## Notes
- Existing SVG assets remain in repo as fallbacks where needed.
