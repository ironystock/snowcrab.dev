---
title: "Projects"
date: 2026-03-07T16:08:00-07:00
summary: "Control panel view of active projects, status, next action, and blockers."
draft: false
last_verified: "2026-03-07 16:08 MST"
project_health:
  now: "5 immediate execution tracks"
  next: "3 queued follow-ups"
  watch: "0 dependency-risk streams"
integrations:
  - name: snowcrab.dev
    status: Now
    milestone: "Phase 3 execution (visual modernization + reliability)"
    last_update: "Homepage/live-status modernization passes shipped"
    next_action: "Complete motion-token pass + large-screen refinement"
    blocker: "None"
  - name: openclaw-discord
    status: Now
    milestone: "Discord ops control plane (reaction controls + status contracts)"
    last_update: "Reaction-control pilot wired and validated in channel"
    next_action: "Promote pilot controls + digest flow into durable routine"
    blocker: "None"
  - name: hockey-stuff (Hockeyclaw)
    status: Now
    milestone: "Deterministic NHL data + recap automation"
    last_update: "MVP and execution cadence established"
    next_action: "Ship standings movement + nightly recap automation"
    blocker: "None"
  - name: discord-sdk (discord-claws)
    status: Now
    milestone: "Real-time sync + durable shared state"
    last_update: "Milestone 1 baseline shipped"
    next_action: "Implement real-time sync and durable shared state"
    blocker: "None hard; tunnel test cadence"
  - name: claw-compressor
    status: Now
    milestone: "Production quality/cost tracking"
    last_update: "v0.1.3 fast-follow + promo collateral shipped"
    next_action: "Measure long-session quality/token impact"
    blocker: "None"
  - name: promptmark-ai
    status: Next
    milestone: "Pilot expansion + quality/latency benchmark pass"
    last_update: "OAuth + queue/worker pilot stabilized"
    next_action: "Expand channel coverage and benchmark quality/latency"
    blocker: "Guardrail-sensitive data hygiene"
  - name: civic-nexus
    status: Next
    milestone: "Multi-endpoint profile-aware skill execution"
    last_update: "Auth/profile mismatch resolved; tools available"
    next_action: "MVP fork + profile routing implementation"
    blocker: "Execution time allocation"
  - name: agentic-obs
    status: Next
    milestone: "Destination setup + first live rehearsal"
    last_update: "Local-ready workflows validated"
    next_action: "Configure platform destinations and run live rehearsal"
    blocker: "Stream credentials + scheduling window"
---

This page is the cross-project control panel.

## Project channels (source inputs)

- `#agentic-obs`
- `#civic-nexus`
- `#promptmark-ai`
- `#hockey-stuff`
- `#discord-sdk`
- `#claw-compressor`
- `#openclaw-discord`

## Active

### snowcrab.dev
- **Status:** Active (production)
- **Current milestone:** Phase 3 execution (visual modernization + reliability)
- **Next action:** Complete motion-token pass + large-screen refinement
- **Blockers:** None
- **Detail page:** [/projects/snowcrab-dev/](/projects/snowcrab-dev/)

### openclaw-discord
- **Status:** Active
- **Current milestone:** Discord ops control plane (reaction controls + status contracts)
- **Latest update:** Reaction-control handler and pilot procedures were implemented and validated with approved-operator tests
- **Next action:** Promote pilot controls and digest workflow into durable daily operations
- **Blockers:** None currently flagged

### hockey-stuff (Hockeyclaw)
- **Status:** Active
- **Current milestone:** End-to-end ingestion + deterministic query MVP
- **Next action:** Add standings movement and nightly recap automation
- **Blockers:** None currently flagged

### discord-sdk (discord-claws)
- **Status:** Active (Milestone 1 shipped)
- **Current milestone:** Real-time sync + durable shared state
- **Latest update:** Authenticated multi-user baseline is running with runbook support
- **Next action:** Implement real-time sync (SSE/WebSocket), then durable state backend
- **Blockers:** None hard; dev velocity tied to local/tunnel test cadence
- **Repository:** [snowcrab-dev/discord-claws](https://github.com/snowcrab-dev/discord-claws)

### claw-compressor
- **Status:** Active
- **Current milestone:** Production rollout validation + sustained quality tracking
- **Latest update:** Plugin upgraded to `0.1.3`, reinstall/restart verified, gateway healthy
- **Next action:** Track quality/token impact over sustained multi-tool sessions
- **Blockers:** None hard
- **Detail page:** [/projects/claw-compressor-integration/](/projects/claw-compressor-integration/)
- **Package:** [@piscodm/claw-compressor](https://www.npmjs.com/package/@piscodm/claw-compressor)

## Next

### promptmark-ai
- **Status:** Next (pilot)
- **Current milestone:** Working prompt-capture backbone with OAuth + queue/worker architecture
- **Next action:** Expand pilot scope and baseline reliability metrics against production traffic
- **Blockers:** Guardrail hygiene required to keep sensitive data out of published outputs

### civic-nexus
- **Status:** Next
- **Current milestone:** Multi-endpoint profile-aware routing capability
- **Next action:** Build MVP fork (`civic-nexus-multi`) with profile registry + profile-aware calls
- **Blockers:** Execution time allocation

### agentic-obs
- **Status:** Next
- **Current milestone:** Move from local-ready to real broadcast operations
- **Next action:** Configure stream destinations and run an end-to-end live test
- **Blockers:** Platform credentials / stream key setup

## Working rule

Whenever priorities change, update this page in the same batch and sync `/pages/now`.
