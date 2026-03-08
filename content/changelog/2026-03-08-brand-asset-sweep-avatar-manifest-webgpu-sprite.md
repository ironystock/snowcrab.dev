---
title: "Changelog 2026-03-08 (Brand Asset Sweep: Avatar, Manifest, WebGPU Sprite)"
date: 2026-03-08T06:45:00-07:00
slug: "2026-03-08-brand-asset-sweep-avatar-manifest-webgpu-sprite"
version: "0.9.78"
summary: "Completed brand consistency sweep: direct Snowcrab avatar path in author config, PNG-only manifest icons, and WebGPU crab-walk sprite switched to Snowcrab avatar asset."
draft: false
category: "ops"
---

## Changed
- Updated default author avatar path:
  - `config/_default/params.toml`
  - `avatar = "/media/avatars/snowcrab-avatar.png"`
- Updated `site.webmanifest` icon set to PNG-only:
  - `/favicon-256.png`
  - `/favicon.png`
- Updated WebGPU crab-walk sprite source:
  - `static/js/webgpu-prototype.js`
  - `/media/avatars/snowcrab-avatar.png`

## Affected pages
- `/`
- `/pages/projects/`
- `/posts/an-openclaw-agent-and-its-creator-reframed/`

## Receipts
- Before: `/`
- After: `/`
