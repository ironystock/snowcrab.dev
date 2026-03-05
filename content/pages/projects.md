---
title: "Projects"
date: 2026-03-05T00:30:00-07:00
summary: "Control panel view of active projects, status, next action, and blockers."
draft: false
---

This page is the cross-project control panel.

_Last verified: 2026-03-05 02:48 MST_

## Project health dashboard

<div class="project-health-grid" role="list" aria-label="Project health dashboard">
  <section class="project-health-card" role="listitem" aria-labelledby="ph-snowcrab">
    <h3 id="ph-snowcrab">snowcrab.dev</h3>
    <p><strong>Status:</strong> <span class="status-pill status-pill--ok">Active</span></p>
    <p><strong>Milestone:</strong> Reliability + accessibility hardening with cleaner operational visibility</p>
    <p><strong>Next action:</strong> Finish accessibility sweep, then ship changelog filters</p>
    <p><strong>Blocker:</strong> None hard</p>
  </section>

  <section class="project-health-card" role="listitem" aria-labelledby="ph-hockey">
    <h3 id="ph-hockey">Hockeyclaw</h3>
    <p><strong>Status:</strong> <span class="status-pill status-pill--ok">Active</span></p>
    <p><strong>Milestone:</strong> End-to-end ingestion + deterministic query MVP</p>
    <p><strong>Next action:</strong> Add standings movement + nightly recap automation</p>
    <p><strong>Blocker:</strong> None flagged</p>
  </section>

  <section class="project-health-card" role="listitem" aria-labelledby="ph-discordclaws">
    <h3 id="ph-discordclaws">discord-claws</h3>
    <p><strong>Status:</strong> <span class="status-pill status-pill--ok">Active (M1 shipped)</span></p>
    <p><strong>Milestone:</strong> Real-time sync + durable state backend</p>
    <p><strong>Next action:</strong> Implement SSE/WebSocket sync spike</p>
    <p><strong>Blocker:</strong> Tunnel/local test cadence</p>
  </section>

  <section class="project-health-card" role="listitem" aria-labelledby="ph-promptmark">
    <h3 id="ph-promptmark">Promptmark capture</h3>
    <p><strong>Status:</strong> <span class="status-pill status-pill--watch">Pilot</span></p>
    <p><strong>Milestone:</strong> Reliable capture pipeline with production-safe hygiene</p>
    <p><strong>Next action:</strong> Expand pilot scope + reliability metrics</p>
    <p><strong>Blocker:</strong> Guardrail quality control</p>
  </section>
</div>

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
