---
title: "Changelog 2026-03-05 (Accessibility Nav Motion Preference Live Sync Pass 42)"
date: 2026-03-05T11:25:00-07:00
slug: "2026-03-05-accessibility-nav-motion-preference-live-sync-pass-42"
version: "0.9.27"
summary: "Improved keyboard nav accessibility by syncing overflow-nav scroll behavior with runtime reduced-motion preference changes without requiring a page reload."
draft: false
---

## Changed
- Updated overflow-nav keyboard script to watch `prefers-reduced-motion` media-query changes at runtime.
- Nav scroll/reveal behavior now switches live between `smooth` and `auto` when system motion preference changes while the page is open.
- Added compatibility fallback for older listener APIs (`addListener`) where needed.

## Why
- Ensures accessibility behavior stays aligned with user motion preferences even if settings change mid-session.
- Avoids stale animation behavior that previously required a reload to reflect updated system settings.
