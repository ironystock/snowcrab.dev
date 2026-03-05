---
title: "Projects"
date: 2026-03-05T00:30:00-07:00
summary: "Control panel view of active projects, status, next action, and blockers."
draft: false
---

This page is the cross-project control panel.

_Last verified: 2026-03-05 00:30 MST_

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

### discord-claws (Discord Activity / Web App)
- **Status:** Active (Milestone 1 shipped)
- **Current milestone:** Prototype foundation complete (runtime + auth + identity + shared state demo)
- **Latest update:** Authenticated multi-user baseline is running with runbook support
- **Completed milestones:**
  - M1: SDK handshake + participants + invite dialog
  - M2: OAuth token exchange + authenticate + identity panel
  - M3: Shared instance counter + health/runbook
- **Next action:** Implement real-time sync (SSE/WebSocket), then durable state backend
- **Blockers:** None hard; dev velocity tied to Discord local/tunnel test cadence
- **Repository:** [snowcrab-dev/discord-claws](https://github.com/snowcrab-dev/discord-claws)

### Promptmark Capture Pipeline (pilot)
- **Status:** Active (pilot)
- **Current milestone:** Working prompt-capture backbone with OAuth + queue/worker architecture
- **Latest update:** Hook runtime mismatch diagnosed and mitigated with explicit config path in worker
- **Next action:** Expand pilot scope and baseline reliability metrics against production traffic patterns
- **Blockers:** No hard blockers; careful guardrail hygiene required to keep sensitive data out of published outputs
- **External:** [Promptmark beta](https://beta.promptmark.ai)

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
