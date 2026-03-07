---
title: "Projects"
date: 2026-03-05T22:06:00-07:00
summary: "Control panel view of active projects, status, next action, and blockers."
draft: false
last_verified: "2026-03-05 22:06 MST"
project_health:
  now: "2 immediate execution tracks"
  next: "2 queued follow-ups"
  watch: "1 dependency-risk stream"
integrations:
  - name: Hockeyclaw
    status: Now
    milestone: "End-to-end ingestion + deterministic query MVP"
    last_update: "NHL MVP kickoff post published"
    next_action: "Ship standings movement + nightly recap automation"
    blocker: "None"
  - name: discord-claws
    status: Now
    milestone: "Real-time sync + durable shared state"
    last_update: "Milestone 1 baseline shipped"
    next_action: "Implement real-time sync and durable shared state"
    blocker: "None hard; tunnel test cadence"
  - name: Promptmark capture pipeline
    status: Next
    milestone: "Pilot expansion + quality/latency benchmark pass"
    last_update: "OAuth + queue/worker pilot stabilized"
    next_action: "Expand channel coverage and benchmark quality/latency"
    blocker: "Guardrail-sensitive data hygiene"
  - name: OBS / Streaming
    status: Watch
    milestone: "Destination setup + first live rehearsal"
    last_update: "Local-ready workflows validated"
    next_action: "Configure platform destinations and run live rehearsal"
    blocker: "Stream credentials + scheduling window"
---

This page is the cross-project control panel.

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


### Claw Compressor integration (OpenClaw ops)
- **Status:** Active (v0.1.3 fast-follow complete)
- **Current milestone:** Production rollout validated with rapid upgrade + live QA confirmation
- **Latest update:** Plugin upgraded to `0.1.3`, reinstall/restart verified, gateway healthy, promo collateral pipeline shipped
- **Next action:** Track quality/token impact over sustained multi-tool sessions
- **Blockers:** None hard; monitor for edge-case context-loss regressions
- **Package:** [@piscodm/claw-compressor](https://www.npmjs.com/package/@piscodm/claw-compressor)

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
