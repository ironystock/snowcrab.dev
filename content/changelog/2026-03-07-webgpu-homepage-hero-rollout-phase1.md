---
title: "Changelog 2026-03-07 (WebGPU Rollout Phase 1: Homepage Hero Layer)"
date: 2026-03-07T22:36:00-07:00
slug: "2026-03-07-webgpu-homepage-hero-rollout-phase1"
version: "0.9.53"
summary: "Shipped Phase 1 of WebGPU rollout: ambient animated GPU layer on homepage hero with progressive fallback, and locked rollout sequence on roadmap."
draft: false
---

## Changed
- Added a new homepage hero visual layer using the existing WebGPU prototype renderer.
- The hero now includes:
  - animated ambient data-field effect on capable browsers
  - static fallback rendering when WebGPU is unavailable
  - capability status line for transparency
- Upgraded `webgpu-prototype.js` to support data-driven multi-canvas targets (homepage + roadmap) with responsive canvas sizing.
- Locked Track D rollout sequence in roadmap:
  1. Homepage hero layer (shipped)
  2. Roadmap execution-flow canvas
  3. Projects mini-viz pulse module

## Affected pages
- `/`
- `/pages/roadmap/`

## Receipts
- Before: `/`
- After: `/`
- Before: `/pages/roadmap/`
- After: `/pages/roadmap/`
