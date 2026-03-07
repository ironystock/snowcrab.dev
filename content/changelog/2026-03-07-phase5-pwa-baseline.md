---
title: "Changelog 2026-03-07 (Phase 5: PWA Baseline)"
date: 2026-03-07T16:32:00-07:00
slug: "2026-03-07-phase5-pwa-baseline"
version: "0.9.3"
summary: "Shipped a Phase 5 PWA baseline with service-worker registration, offline fallback page, and install prompt wiring."
draft: false
category: "reliability"
---

## Changed
- Added service worker registration (`/js/pwa.js`) and global wiring in the base layout.
- Added a service worker (`/sw.js`) with shell caching + offline fallback behavior.
- Added dedicated offline fallback page at `/offline/`.
- Added header install control (`Install app`) that appears when browser install prompt is available.
- Captured visual artifacts:
  - `/artifacts/phase5/before-offline-fallback-page.jpg`
  - `/artifacts/phase5/after-offline-fallback-page.jpg`

## Why
- Establishes the first installable/offline-capable baseline for Snowcrab.
- Improves resilience during transient network loss.
- Completes the roadmap milestone for **Phase 5: PWA baseline**.
