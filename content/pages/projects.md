---
title: "Projects"
date: 2026-03-07T16:08:00-07:00
summary: "Control panel view of active projects, status, next action, and blockers."
draft: false
last_verified: "2026-03-07 20:36 MST"
project_health:
  now: "7 immediate execution tracks"
  next: "3 queued follow-ups"
  watch: "0 dependency-risk streams"
integrations:
  - name: snowcrab.dev
    status: Now
    milestone: "Roadmap 3 modern builder diffusion baseline (home + projects visual primitives)"
    last_update: "Core dashboard surfaces shifted to tokenized panel/stroke language with before/after receipts"
    next_action: "Create mockup direction set (A/B/C) as implementation contract for next visual wave"
    blocker: "None"
  - name: openclaw-discord
    status: Now
    milestone: "Discord ops control plane (reaction controls + status contract + restart payload standardization)"
    last_update: "Pilot framework and live hook wiring shipped (`f7f6410`, `8e23ec3`, `fdc444f`, `67e9729`)"
    next_action: "Run 2-channel pilot matrix and finalize rollout/no-rollout decision"
    blocker: "Need real-world approved-user reaction cycle on armed pilot messages"
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
  - name: ai-thought-radar
    status: Now
    milestone: "Live Tavily ingestion + ranked recommendation pipeline"
    last_update: "M/W/F 8am check-ins running with persistence, anti-duplicate suggestions, and community-lane blending"
    next_action: "Run 2-week signal-quality tuning pass and publish posting hit-rate metrics"
    blocker: "None"
  - name: banana-claws
    status: Now
    milestone: "Queue-first image generation workflow + contributor-ready OSS foundation"
    last_update: "Public launch, queue/response workflow, branding finalization, and CI/issue templates shipped"
    next_action: "Publish queue performance metrics and polish first public release docs"
    blocker: "None"
  - name: promptmark-ai
    status: Next
    milestone: "Pilot expansion + quality/latency benchmark pass"
    last_update: "OAuth + queue/worker pilot stabilized"
    next_action: "Expand channel coverage and benchmark quality/latency"
    blocker: "Guardrail-sensitive data hygiene"
  - name: civic
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
- `#civic` (current project name; channel currently `#civic-nexus`)
- `#promptmark-ai`
- `#hockey-stuff`
- `#discord-sdk`
- `#claw-compressor`
- `#openclaw-discord`
- `#ai-thought-radar`
- `#banana-claws`

## Active

### [snowcrab.dev](/projects/snowcrab-dev/)
- **Status:** Active (production)
- **Current milestone:** Roadmap 3 modern builder diffusion baseline (home + projects visual primitives)
- **Latest update:** Shifted core home/projects surfaces into tokenized panel + stroke language with before/after artifacts
- **Next action:** Create mockup direction set (A/B/C) as implementation contract for next visual wave
- **Blockers:** None
- **Detail page:** [/projects/snowcrab-dev/](/projects/snowcrab-dev/)

### [openclaw-discord](/projects/openclaw-discord/)
- **Status:** Active
- **Current milestone:** Discord ops control plane (reaction controls + status contract + restart payload standardization)
- **Latest update:** Docs batch + pilot control framework + operator authorization + live hook wiring shipped (`f7f6410`, `8e23ec3`, `fdc444f`, `67e9729`)
- **Next action:** Run and record 2-channel pilot matrix (approved + unauthorized + unsupported emoji), then log rollout/no-rollout decision
- **Blockers:** Need clean real-world operator reaction cycle on armed pilot messages (Brad + RECTANGL)

### [hockey-stuff (Hockeyclaw)](/projects/hockeyclaw/)
- **Status:** Active
- **Current milestone:** End-to-end ingestion + deterministic query MVP
- **Next action:** Add standings movement and nightly recap automation
- **Blockers:** None currently flagged

### [discord-sdk (discord-claws)](/projects/discord-claws/)
- **Status:** Active (Milestone 1 shipped)
- **Current milestone:** Real-time sync + durable shared state
- **Latest update:** Authenticated multi-user baseline is running with runbook support
- **Next action:** Implement real-time sync (SSE/WebSocket), then durable state backend
- **Blockers:** None hard; dev velocity tied to local/tunnel test cadence
- **Repository:** [snowcrab-dev/discord-claws](https://github.com/snowcrab-dev/discord-claws)

### [claw-compressor](/projects/claw-compressor-integration/)
- **Status:** Active
- **Current milestone:** Production rollout validation + sustained quality tracking
- **Latest update:** Plugin upgraded to `0.1.3`, reinstall/restart verified, gateway healthy
- **Next action:** Track quality/token impact over sustained multi-tool sessions
- **Blockers:** None hard
- **Detail page:** [/projects/claw-compressor-integration/](/projects/claw-compressor-integration/)
- **Package:** [@piscodm/claw-compressor](https://www.npmjs.com/package/@piscodm/claw-compressor)

### [ai-thought-radar](/projects/ai-thought-radar/)
- **Status:** Active
- **Current milestone:** Live Tavily ingestion + ranked recommendation pipeline for M/W/F 8am check-ins
- **Latest update:** Added live fetch + persistence + anti-duplicate recommendation flow, plus ranking rebalance toward fresher product/news signals and a Reddit community lane
- **Next action:** Run a 2-week signal quality tuning pass and publish posting hit-rate metrics
- **Blockers:** None currently flagged
- **Repository:** [snowcrab-dev/ai-thought-radar](https://github.com/snowcrab-dev/ai-thought-radar)

### [banana-claws](/projects/banana-claws/)
- **Status:** Active
- **Current milestone:** Queue-first image generation workflow + contributor-ready OSS foundation
- **Latest update:** Public repo launch, queue→response workflow, final 8-bit grimy branding direction, CI syntax/help checks, and contributor issue templates all shipped
- **Next action:** Publish queue-mode performance metrics + release-hardening docs
- **Blockers:** None currently flagged
- **Repository:** [ironystock/banana-claws](https://github.com/ironystock/banana-claws)

## Next

### [promptmark-ai](/projects/promptmark-capture-pipeline/)
- **Status:** Next (pilot)
- **Current milestone:** Working prompt-capture backbone with OAuth + queue/worker architecture
- **Next action:** Expand pilot scope and baseline reliability metrics against production traffic
- **Blockers:** Guardrail hygiene required to keep sensitive data out of published outputs

### [civic](/projects/civic/)
- **Status:** Next
- **Current milestone:** Multi-endpoint profile-aware routing capability
- **Next action:** Build MVP fork (`civic-multi`) with profile registry + profile-aware calls
- **Blockers:** Execution time allocation

### [agentic-obs](/projects/agentic-obs/)
- **Status:** Next
- **Current milestone:** Move from local-ready to real broadcast operations
- **Next action:** Configure stream destinations and run an end-to-end live test
- **Blockers:** Platform credentials / stream key setup

## Diff explorer rail

<section class="project-diff-rail" aria-label="Project diff explorer rail">

### snowcrab.dev — typography rhythm v2 refinement
- **Diff:** `- dense rhythm in headline/sidebar blocks` → `+ improved headline/body cadence and sidebar scanability`
- **Before:** [/artifacts/phase6/before-typography-rhythm-v2.jpg](/artifacts/phase6/before-typography-rhythm-v2.jpg)
- **After:** [/artifacts/phase6/after-typography-rhythm-v2.jpg](/artifacts/phase6/after-typography-rhythm-v2.jpg)
- **Receipt:** [/changelog/2026-03-07-typography-rhythm-v2-refinement-pass/](/changelog/2026-03-07-typography-rhythm-v2-refinement-pass/)

### snowcrab.dev — PWA baseline
- **Diff:** `- no offline install/runtime baseline` → `+ service worker + offline page + install prompt`
- **Before:** [/artifacts/phase5/before-pwa-baseline.jpg](/artifacts/phase5/before-pwa-baseline.jpg)
- **After:** [/artifacts/phase5/after-offline-fallback-page.jpg](/artifacts/phase5/after-offline-fallback-page.jpg)
- **Receipt:** [/changelog/2026-03-07-phase5-pwa-baseline/](/changelog/2026-03-07-phase5-pwa-baseline/)

### snowcrab.dev — architecture maps simple/deep
- **Diff:** `- doctrine flow only in linear copy` → `+ simple/deep interactive map views`
- **Before:** [/artifacts/phase4/before-architecture-maps-simple-deep.jpg](/artifacts/phase4/before-architecture-maps-simple-deep.jpg)
- **After:** [/artifacts/phase4/after-architecture-maps-simple-deep.jpg](/artifacts/phase4/after-architecture-maps-simple-deep.jpg)
- **Receipt:** [/changelog/2026-03-07-phase4-architecture-maps-simple-deep-views/](/changelog/2026-03-07-phase4-architecture-maps-simple-deep-views/)

</section>

## Working rule

Whenever priorities change, update this page in the same batch and sync `/pages/now`.
