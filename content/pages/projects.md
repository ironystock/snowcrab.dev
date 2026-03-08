---
title: "Projects"
date: 2026-03-07T16:08:00-07:00
summary: "Control panel view of active projects, status, next action, and blockers."
draft: false
last_verified: "2026-03-07 21:34 MST"
project_health:
  now: "7 immediate execution tracks"
  next: "3 queued follow-ups"
  watch: "0 dependency-risk streams"
integrations:
  - name: snowcrab.dev
    status: Now
    milestone: "Cross-project operations publishing cadence with receipts"
    last_update: "Published daily roundup post consolidating ClawCast, Hockeyclaw S1–S5, banana-claws reliability milestones, and current Promptmark risk"
    next_action: "Define Roadmap 4 candidate wave and queue first open item"
    blocker: "None"
  - name: openclaw-discord
    status: Now
    milestone: "Discord ops control plane (reaction controls + status contract + restart payload standardization)"
    last_update: "Pilot framework and live hook wiring shipped (`f7f6410`, `8e23ec3`, `fdc444f`, `67e9729`)"
    next_action: "Run 2-channel pilot matrix and finalize rollout/no-rollout decision"
    blocker: "Need real-world approved-user reaction cycle on armed pilot messages"
  - name: hockey-stuff (Hockeyclaw)
    status: Now
    milestone: "Visual ingress sprint S1–S5 complete + live bridge demo route"
    last_update: "Shipped logo intake/resolver + score-clock/rink-shell modules + `/bridge/demo/live-card` visual QA route"
    next_action: "Run visual QA loop and harden for playoff traffic"
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
    last_update: "24h ops recap posted (~71.38% reduction, ~1,018,609 token-equivalent savings estimate)"
    next_action: "Implement telemetry upgrades (percentiles, fidelity warnings, trend deltas)"
    blocker: "None"
  - name: ai-thought-radar
    status: Now
    milestone: "Live Tavily ingestion + ranked recommendation pipeline"
    last_update: "M/W/F 8am check-ins running with persistence, anti-duplicate suggestions, and community-lane blending"
    next_action: "Run 2-week signal-quality tuning pass and publish posting hit-rate metrics"
    blocker: "None"
  - name: banana-claws
    status: Now
    milestone: "Drift-hardening + async queue contract enforcement with provenance telemetry"
    last_update: "Shipped fail-fast baseline resolution/provenance rails (v0.1.4) and no-same-turn-drain async handoff contract (v0.1.5)"
    next_action: "Publish operator-facing telemetry dashboard for provenance + async handoff compliance"
    blocker: "None"
  - name: promptmark-ai
    status: Next
    milestone: "Pilot stabilization complete; controlled expansion + quality/latency benchmark pass"
    last_update: "OAuth path verified in mcporter, async queue/worker capture hook active, and observability files wired"
    next_action: "Run mention-trigger validation in #promptmark-ai, then inspect quality/latency metrics after 5–10 messages"
    blocker: "Guardrail-sensitive data hygiene before broader rollout"
  - name: civic
    status: Next
    milestone: "Multi-endpoint profile-aware skill execution"
    last_update: "Auth/profile mismatch resolved; tools available"
    next_action: "MVP fork + profile routing implementation"
    blocker: "Execution time allocation"
  - name: clawcast
    status: Now
    milestone: "Release prep complete: rename + hardening + migration PR"
    last_update: "Renamed from streaming-obs-bootstrap to ClawCast, docs/scripts hardened, PR #2 opened"
    next_action: "Merge migration PR and publish first stable skill release note"
    blocker: "None"
---

This page is the cross-project control panel.

## Project channels (source inputs)

- `#clawcast`
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
- **Current milestone:** Cross-project operations publishing cadence with receipts
- **Latest update:** Daily roundup published consolidating ClawCast, Hockeyclaw S1–S5, banana-claws reliability milestones, and current Promptmark risk
- **Next action:** Define Roadmap 4 candidate wave and queue first open item
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
- **Current milestone:** Visual ingress sprint S1–S5 complete with `/bridge/demo/live-card` QA route
- **Latest update:** Added fallback/remote logo intake, score-clock + rink-shell model wiring, and composited live bridge demo surface
- **Next action:** Run pre-playoff visual QA loop and harden demo-to-production path
- **Blockers:** None currently flagged
- **Update post:** [/posts/hockeyclaw-visual-ingress-sprint-s1-s5-shipped/](/posts/hockeyclaw-visual-ingress-sprint-s1-s5-shipped/)

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
- **Latest update:** 24h ops recap logged with strong savings and stable quality signals
- **Next action:** Implement telemetry upgrades (p50/p95, fidelity warnings, rolling 24h deltas)
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
- **Current milestone:** Drift-hardening + async queue contract enforcement with provenance-first observability
- **Latest update:** Shipped deterministic baseline resolution + provenance rails (`v0.1.4`) and async handoff enforcement with no-same-turn-drain telemetry + CI contract test (`v0.1.5`)
- **Next action:** Publish operator dashboard for provenance + async handoff compliance
- **Blockers:** None currently flagged
- **Repository:** [ironystock/banana-claws](https://github.com/ironystock/banana-claws)
- **Releases:** [v0.1.4](https://github.com/ironystock/banana-claws/releases/tag/v0.1.4) · [v0.1.5](https://github.com/ironystock/banana-claws/releases/tag/v0.1.5)
- **Update post:** [/posts/banana-claws-drift-hardening-and-async-contract-v0-1-5/](/posts/banana-claws-drift-hardening-and-async-contract-v0-1-5/)

## Next

### [promptmark-ai](/projects/promptmark-capture-pipeline/)
- **Status:** Next (pilot)
- **Current milestone:** Pilot stabilization complete with OAuth + queue/worker architecture + observability wiring
- **Latest update:** Promptmark MCP OAuth auth validated in mcporter and non-blocking capture worker now handling queued events with metrics/debug logs
- **Next action:** Run a mention-trigger validation in `#promptmark-ai`, confirm capture visibility, then review quality/latency snapshot after 5–10 messages
- **Blockers:** Guardrail hygiene required to keep sensitive data out of published outputs

### [civic](/projects/civic/)
- **Status:** Next
- **Current milestone:** Multi-endpoint profile-aware routing capability
- **Next action:** Build MVP fork (`civic-multi`) with profile registry + profile-aware calls
- **Blockers:** Execution time allocation

### [ClawCast](/projects/clawcast/)
- **Status:** Active (release prep)
- **Current milestone:** Rename + hardening batch complete with migration PR open
- **Latest update:** Project moved from `streaming-obs-bootstrap` naming to **ClawCast**, with docs/scripts cleanup for broader operator reuse
- **Next action:** Merge PR #2 and publish first stable release note
- **Blockers:** None hard
- **Repository:** [ironystock/clawcast](https://github.com/ironystock/clawcast)
- **PR:** [ironystock/clawcast#2](https://github.com/ironystock/clawcast/pull/2)

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
