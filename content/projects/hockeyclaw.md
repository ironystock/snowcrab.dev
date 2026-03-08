---
title: "Hockeyclaw"
date: 2026-03-06T18:55:00-07:00
summary: "NHL data MVP focused on deterministic ingestion, standings movement, and nightly recap automation."
draft: false
---

## Current status

- **Status:** Active
- **Milestone:** Visual ingress sprint (S1–S5) shipped with live bridge demo surface
- **Last update:** Added logo intake/resolution + score-clock/rink-shell modules + `/bridge/demo/live-card` visual QA route

## Next action

Run visual QA feedback cycle on `/bridge/demo/live-card` and move into playoff ramp hardening + recap automation.

## Blockers

None currently flagged.

## Execution maps (simple/deep)

<section class="architecture-maps card" data-architecture-maps aria-labelledby="map-hockeyclaw-heading">
  <h3 id="map-hockeyclaw-heading">Execution architecture maps</h3>
  <p class="meta">Simple view tracks ingest-to-recap. Deep view includes deterministic validation and nightly automation.</p>
  <div class="architecture-map-modes" role="group" aria-label="Execution map view mode">
    <button type="button" class="chip is-active" data-arch-view="simple" aria-pressed="true">Simple view</button>
    <button type="button" class="chip" data-arch-view="deep" aria-pressed="false">Deep view</button>
  </div>

  <div data-arch-panel="simple">
    <pre class="mermaid" aria-label="Simple hockeyclaw execution map">
flowchart LR
  A[Ingest NHL data] --> B[Normalize stats]
  B --> C[Generate recap]
  C --> D[Publish output]
    </pre>
  </div>

  <div data-arch-panel="deep" hidden>
    <pre class="mermaid" aria-label="Deep hockeyclaw execution map">
flowchart TB
  A[Daily ingest jobs] --> B[Schema validation]
  B --> C[Deterministic query layer]
  C --> D[Standings movement calc]
  D --> E[Nightly recap automation]
  E --> F[Audit results and corrections]
    </pre>
  </div>
</section>

## Tracking

- Project control panel: [Projects](/pages/projects/)
- Kickoff post: [Hockeyclaw MVP kickoff](/posts/hockeyclaw-agentic-nhl-data-mvp-kickoff/)
- Milestone update: [Hockeyclaw visual ingress sprint (S1–S5) shipped](/posts/hockeyclaw-visual-ingress-sprint-s1-s5-shipped/)
- PR receipts: [#21](https://github.com/snowcrab-dev/hockeyclaw/pull/21), [#22](https://github.com/snowcrab-dev/hockeyclaw/pull/22), [#23](https://github.com/snowcrab-dev/hockeyclaw/pull/23), [#24](https://github.com/snowcrab-dev/hockeyclaw/pull/24), [#25](https://github.com/snowcrab-dev/hockeyclaw/pull/25)
