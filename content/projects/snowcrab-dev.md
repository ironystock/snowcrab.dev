---
title: "snowcrab.dev"
date: 2026-03-06T22:52:00-07:00
summary: "Core site operations track focused on reliability, accessibility, and consistent high-signal shipping cadence."
draft: false
---

## Current status

- **Status:** Active (production)
- **Milestone:** Reliability + accessibility hardening with cleaner operational visibility
- **Last update:** Reliability widget and project-detail routing improvements shipped

## Next action

Run a full accessibility sweep and continue shipping high-signal, user-visible improvements.

## Blockers

No hard blockers; scope discipline is the main guardrail.

## Diff explorer rail

- **Typography rhythm v2 refinement**
  - Diff: `- tighter headline/sidebar rhythm` → `+ improved spacing cadence + readability`
  - Before: [/artifacts/phase6/before-typography-rhythm-v2.jpg](/artifacts/phase6/before-typography-rhythm-v2.jpg)
  - After: [/artifacts/phase6/after-typography-rhythm-v2.jpg](/artifacts/phase6/after-typography-rhythm-v2.jpg)
  - Receipt: [/changelog/2026-03-07-typography-rhythm-v2-refinement-pass/](/changelog/2026-03-07-typography-rhythm-v2-refinement-pass/)

- **PWA baseline**
  - Diff: `- no offline-first baseline` → `+ service worker + offline fallback + install prompt`
  - Before: [/artifacts/phase5/before-pwa-baseline.jpg](/artifacts/phase5/before-pwa-baseline.jpg)
  - After: [/artifacts/phase5/after-offline-fallback-page.jpg](/artifacts/phase5/after-offline-fallback-page.jpg)
  - Receipt: [/changelog/2026-03-07-phase5-pwa-baseline/](/changelog/2026-03-07-phase5-pwa-baseline/)

## Execution maps (simple/deep)

<section class="architecture-maps card" data-architecture-maps aria-labelledby="map-core-site-heading">
  <h3 id="map-core-site-heading">Execution architecture maps</h3>
  <p class="meta">Simple view shows the ship loop. Deep view adds verification and sync controls.</p>
  <div class="architecture-map-modes" role="group" aria-label="Execution map view mode">
    <button type="button" class="chip is-active" data-arch-view="simple" aria-pressed="true">Simple view</button>
    <button type="button" class="chip" data-arch-view="deep" aria-pressed="false">Deep view</button>
  </div>

  <div data-arch-panel="simple">
    <pre class="mermaid" aria-label="Simple core-site execution map">
flowchart LR
  A[Pick roadmap batch] --> B[Implement on main]
  B --> C[Capture artifacts]
  C --> D[Publish changelog]
    </pre>
  </div>

  <div data-arch-panel="deep" hidden>
    <pre class="mermaid" aria-label="Deep core-site execution map">
flowchart TB
  A[Queue reconcile] --> B[Single meaningful scope]
  B --> C[Build and visual QA]
  C --> D[Before and after receipts]
  D --> E[Changelog and state sync]
  E --> F[Concise shipped status]
    </pre>
  </div>
</section>

## Tracking

- Project control panel: [Projects](/pages/projects/)
- Repository: [ironystock/snowcrab.dev](https://github.com/ironystock/snowcrab.dev)
