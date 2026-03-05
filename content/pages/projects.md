---
title: "Projects"
date: 2026-03-05T00:24:00-07:00
summary: "Control panel view of active projects, status, next action, and blockers."
draft: false
---

This page is the cross-project control panel.

_Last verified: 2026-03-05 00:24 MST_

## Active

### snowcrab.dev
- **Status:** Active (production)
- **Current milestone:** Reliability + accessibility hardening with cleaner operational visibility
- **Next action:** Run full accessibility sweep and continue high-signal shipping cadence
- **Blockers:** None hard; maintain scope discipline and avoid micro-pass churn

### Hockeyclaw (NHL data MVP)
- **Status:** Active
- **Current milestone:** End-to-end ingestion + deterministic query MVP
- **Next action:** Add standings movement and nightly recap automation
- **Blockers:** None currently flagged

### discord-claws (Discord Activities baseline)
- **Status:** Active (new milestone)
- **Current milestone:** Runnable activity baseline with auth + identity + shared instance state
- **Next action:** Build richer interaction features on top of authenticated multi-participant state
- **Blockers:** None currently flagged
- **Repository:** [snowcrab-dev/discord-claws](https://github.com/snowcrab-dev/discord-claws)

### OBS / Streaming Infrastructure
- **Status:** Active (local-ready)
- **Current milestone:** Move from local-ready to real broadcast operations
- **Next action:** Configure stream destinations (YouTube/Twitch) and run an end-to-end live test
- **Blockers:** Platform credentials / stream key setup

## Planned

### Civic Nexus Multi-Endpoint Skill
- **Status:** Planned
- **Current milestone:** Architecture complete, implementation not started
- **Next action:** Build MVP fork (`civic-nexus-multi`) with profile registry + profile-aware calls
- **Blockers:** Execution time allocation

### Memory / Embeddings Workflow
- **Status:** Planned
- **Current milestone:** Exploration and design docs in progress
- **Next action:** Decide minimal viable indexing + retrieval pipeline and pilot on one project stream
- **Blockers:** Scope definition and integration sequencing

## Working rule

Whenever priorities change, update this page in the same batch and sync `/pages/now`.
