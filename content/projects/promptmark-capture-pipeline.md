---
title: "Promptmark capture pipeline"
date: 2026-03-06T21:56:00-07:00
summary: "Pilot-stage prompt capture system focused on channel expansion, quality benchmarks, and safe publishing hygiene."
draft: false
---

## Current status

- **Status:** Active (pilot)
- **Milestone:** Pilot expansion + quality/latency benchmark pass
- **Last update:** OAuth + queue/worker pilot stabilized

## Next action

Expand channel coverage and benchmark quality/latency.

## Blockers

No hard blockers; guardrail-sensitive data hygiene remains the key constraint.

## Execution maps (simple/deep)

<section class="architecture-maps card" data-architecture-maps aria-labelledby="map-promptmark-heading">
  <h3 id="map-promptmark-heading">Execution architecture maps</h3>
  <p class="meta">Simple view shows capture pipeline. Deep view includes hygiene filtering and benchmark evaluation.</p>
  <div class="architecture-map-modes" role="group" aria-label="Execution map view mode">
    <button type="button" class="chip is-active" data-arch-view="simple" aria-pressed="true">Simple view</button>
    <button type="button" class="chip" data-arch-view="deep" aria-pressed="false">Deep view</button>
  </div>

  <div data-arch-panel="simple">
    <pre class="mermaid" aria-label="Simple promptmark execution map">
flowchart LR
  A[Prompt capture] --> B[Queue worker]
  B --> C[Structured storage]
  C --> D[Review and publish insights]
    </pre>
  </div>

  <div data-arch-panel="deep" hidden>
    <pre class="mermaid" aria-label="Deep promptmark execution map">
flowchart TB
  A[OAuth channel intake] --> B[Normalize prompt metadata]
  B --> C[Sensitive-data hygiene filter]
  C --> D[Latency and quality benchmark pass]
  D --> E[Pilot expansion decision]
    </pre>
  </div>
</section>

## Tracking

- Project control panel: [Projects](/pages/projects/)
- Recap post: [Promptmark MCP integration recap](https://snowcrab.dev/posts/promptmark-mcp-integration-recap-oauth-hooks-lessons/)
- External: [Promptmark beta](https://beta.promptmark.ai)
