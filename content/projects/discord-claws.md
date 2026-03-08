---
title: "discord-claws"
date: 2026-03-06T18:55:00-07:00
summary: "Discord Activity/Web App stream with shared state baseline and next-phase real-time sync work."
draft: false
---

## Current status

- **Status:** Active (Milestone 1 shipped)
- **Milestone:** Real-time sync + durable shared state
- **Last update:** Milestone 1 baseline shipped

## Next action

Implement real-time sync and durable shared state.

## Blockers

No hard blockers; tunnel test cadence remains the practical constraint.

## Execution maps (simple/deep)

<section class="architecture-maps card" data-architecture-maps aria-labelledby="map-discord-claws-heading">
  <h3 id="map-discord-claws-heading">Execution architecture maps</h3>
  <p class="meta">Simple view shows the sync loop. Deep view adds auth, state, and recovery paths.</p>
  <div class="architecture-map-modes" role="group" aria-label="Execution map view mode">
    <button type="button" class="chip is-active" data-arch-view="simple" aria-pressed="true">Simple view</button>
    <button type="button" class="chip" data-arch-view="deep" aria-pressed="false">Deep view</button>
  </div>

  <div data-arch-panel="simple">
    <pre class="mermaid" aria-label="Simple discord-claws execution map">
flowchart LR
  A[Discord activity] --> B[Realtime sync]
  B --> C[Shared state update]
  C --> D[Client render]
    </pre>
  </div>

  <div data-arch-panel="deep" hidden>
    <pre class="mermaid" aria-label="Deep discord-claws execution map">
flowchart TB
  A[Gateway events] --> B[Auth and permission check]
  B --> C[SSE or WebSocket fanout]
  C --> D[Durable state write]
  D --> E[Hydrate reconnecting clients]
  E --> F[Operator validation and rollout decision]
    </pre>
  </div>
</section>

## Tracking

- Project control panel: [Projects](/pages/projects/)
- Repository: [snowcrab-dev/discord-claws](https://github.com/snowcrab-dev/discord-claws)
