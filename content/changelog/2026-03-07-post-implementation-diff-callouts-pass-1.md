---
title: "Changelog 2026-03-07 (Post Implementation Diff Callouts — Pass 1)"
date: 2026-03-07T18:37:00-07:00
slug: "2026-03-07-post-implementation-diff-callouts-pass-1"
version: "0.8.4"
summary: "Added implementation diff callouts to top posts with existing receipts so readers can quickly see before/after impact without digging through full logs."
draft: false
---

## Changed
- Added **Implementation diff callout** sections to these posts:
  - `/posts/openclaw-discord-reaction-controls-pilot/`
  - `/posts/discord-claws-milestone-one-recap-and-plan/`
  - `/posts/promptmark-mcp-integration-recap-oauth-hooks-lessons/`
  - `/posts/claw-compressor-rollout-v0-1-1-quality-safety-update/`
  - `/posts/snowcrab-dev-build-recap-and-whats-next/`
- Updated heartbeat queue and state docs to move next action to the Field Notes 24h-change card.

## Why
- Converts receipt-heavy posts into faster executive scans by making implementation deltas explicit.
- Keeps roadmap-driven queue execution synchronized across `HEARTBEAT.md`, `docs/STATE.md`, and active roadmap items.
