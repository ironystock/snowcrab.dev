---
title: "Changelog 2026-03-07 (Roadmap 4 Candidate Wave + Queue Definition)"
date: 2026-03-07T21:52:00-07:00
slug: "2026-03-07-roadmap4-candidate-wave-queue-definition"
version: "0.8.3"
summary: "Defined Roadmap 4 candidate wave, created explicit open-track queue items, and synchronized heartbeat/state next action to the first executable item."
draft: false
---

## Changed
- Added a new **Roadmap 4 — Candidate wave** section to `/pages/roadmap/` with explicit open `[ ]` items.
- Queued Track A as the immediate execution lane and set a concrete first open item.
- Added Track B and Track C queued work so the roadmap has durable forward structure.

## Synced
- Updated `docs/STATE.md` last shipped batch + next queued action to match the top open roadmap item.
- Updated workspace `HEARTBEAT.md` TODO queue to the same top item to preserve queue authority alignment.

## Why
- Prevents queue drift by ensuring roadmap, state, and heartbeat all reference the same actionable next batch.
- Restores visible open work on `/pages/roadmap/` for heartbeat-driven execution continuity.
