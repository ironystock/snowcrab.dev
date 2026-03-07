---
title: "Changelog 2026-03-07 (Now Page Freshness SLA + Sync Template)"
date: 2026-03-07T15:05:00-07:00
slug: "2026-03-07-now-page-freshness-sla-and-sync-template"
version: "0.9.0"
summary: "Added freshness signaling for /pages/now/, rewrote the page to a strict operating template, and updated heartbeat rules to prioritize stale-now syncs."
draft: false
---

## Added
- Freshness card on `/pages/now/` showing age in hours.
- Age-based signals:
  - `24h+` aging warning
  - `48h+` stale warning with fallback links to Projects/Roadmap/Changelog.

## Changed
- Rewrote `/pages/now/` into a strict operating template:
  - Active right now (top 5)
  - What changed in last 24h
  - Next 24h intent
  - Blockers
  - Live links + operating rule

## Ops policy
- Updated heartbeat execution contract to force a "Now sync" when `/pages/now/` is stale and meaningful shipping occurred in the last 24h.
