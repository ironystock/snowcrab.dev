---
title: "Changelog 2026-03-07 (WebGPU Hero Crab-Walk Pass)"
date: 2026-03-07T23:00:00-07:00
slug: "2026-03-07-webgpu-hero-crab-walk-pass"
version: "0.9.67"
summary: "Added occasional Snowcrab asset walk-across behavior on the hero ~35% y-plane with depth-style scaling from -10% to +10%."
draft: false
---

## Changed
- Added hero animation event: Snowcrab asset occasionally walks across the scene.
- Uses `/favicon-256.png` as the crab asset.
- Motion behavior:
  - travels across approximately the 35% y-plane
  - occasional pass cadence (not constant)
  - slight bobbing + connective glow
  - depth-style scale ramp from ~0.9 to ~1.1 during traversal ("-10% z to +10% z" feel)

## Affected pages
- `/`

## Receipts
- Before: `/`
- After: `/`
