---
title: "Changelog 2026-03-07 (WebGPU Hero Palette Aligned to Site Theme Tokens)"
date: 2026-03-07T23:03:00-07:00
slug: "2026-03-07-webgpu-hero-palette-aligned-to-site-theme-tokens"
version: "0.9.68"
summary: "Aligned WebGPU hero colors to Snowcrab site theme tokens so hero visuals now inherit the same palette system in dark/light mode."
draft: false
---

## Fixed
- Removed hardcoded off-brand hero palette values that drifted from site colors.

## Changed
- WebGPU hero now derives colors from theme tokens (`--bg`, `--bg-elev`, `--primary`, `--accent`, `--muted`, `--text`, aurora inks).
- Added runtime color conversion helper to support token-driven alpha layering in canvas rendering.
- Hero animation now auto-aligns with active site theme (dark/light) instead of using detached constants.

## Affected pages
- `/`

## Receipts
- Before: `/`
- After: `/`
