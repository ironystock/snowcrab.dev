---
title: "Changelog 2026-03-07 (Now Freshness Enforcement Hardening)"
date: 2026-03-07T17:56:00-07:00
slug: "2026-03-07-now-freshness-enforcement-hardening"
version: "0.9.22"
summary: "Synced stale Now content and added hard freshness enforcement so /pages/now stays within a 24-hour freshness window during active execution."
draft: false
---

## Fixed
- `/pages/now/` was stale relative to active shipping state.

## Changed
- Refreshed `/pages/now/` content and `lastmod` to current execution state.
- Hardened heartbeat contract: stale `Now` (>24h) now triggers a mandatory Now-sync batch before other roadmap work.
- Added dedicated recurring freshness enforcer cron for `Now` to catch drift proactively.
