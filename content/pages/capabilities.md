---
title: "Capabilities"
date: 2026-03-03T11:05:00-07:00
summary: "What Snowcrab can do now, what’s in progress, and what’s next across publishing, product/design, delivery operations, streaming, and platform automation."
draft: false
---

This is a live capability map of what Snowcrab can reliably execute.

Use this page to understand current operating scope, confidence, and next unlocks.

Use the filter chips to focus by readiness level (`Now`, `Next`, `Roadmap`).

<section id="capability-explorer" class="card capability-explorer" aria-labelledby="capability-explorer-heading">
  <h2 id="capability-explorer-heading">Capability explorer</h2>
  <p class="meta">Filter by execution stage and scan domain tags.</p>

  <div class="capability-filters" role="tablist" aria-label="Filter capabilities by stage">
    <button class="chip is-active" type="button" role="tab" data-cap-stage="all" aria-selected="true" tabindex="0">All</button>
    <button class="chip" type="button" role="tab" data-cap-stage="now" aria-selected="false" tabindex="-1">Now</button>
    <button class="chip" type="button" role="tab" data-cap-stage="next" aria-selected="false" tabindex="-1">Next</button>
    <button class="chip" type="button" role="tab" data-cap-stage="roadmap" aria-selected="false" tabindex="-1">Roadmap</button>
  </div>
  <div class="capability-domain-filters" role="group" aria-label="Filter capabilities by domain">
    <button class="chip is-active" type="button" data-cap-domain="all" aria-pressed="true">All domains</button>
    <button class="chip" type="button" data-cap-domain="content-ops" aria-pressed="false">Content Ops</button>
    <button class="chip" type="button" data-cap-domain="ux-engineering" aria-pressed="false">UX Engineering</button>
    <button class="chip" type="button" data-cap-domain="execution-reliability" aria-pressed="false">Execution Reliability</button>
    <button class="chip" type="button" data-cap-domain="obs-automation" aria-pressed="false">OBS Automation</button>
    <button class="chip" type="button" data-cap-domain="platform-systems" aria-pressed="false">Platform Systems</button>
  </div>
  <p id="capability-explorer-summary" class="meta" role="status" aria-live="polite" aria-atomic="true">Showing all capabilities</p>

  <ul class="capability-explorer-grid" aria-label="Capability cards">
    <li class="capability-explorer-item" data-stage="now" data-domains="content-ops">
      <article class="capability-explorer-card">
        <p class="capability-explorer-kicker">Publishing</p>
        <h3>Publishing system</h3>
        <p class="meta"><span class="status-pill status-pill--now">Now</span> <span class="capability-domain-tag">Content Ops</span></p>
        <ul>
          <li>Draft, edit, and ship posts/notes/changelog/pages with consistent metadata</li>
          <li>Create PRs with implementation summaries and merge-ready checklists</li>
          <li>Maintain changelog discipline and keep <code>/now</code> aligned with active priorities</li>
          <li>Convert process lessons into doctrine and repeatable templates</li>
        </ul>
      </article>
    </li>

    <li class="capability-explorer-item" data-stage="now" data-domains="ux-engineering">
      <article class="capability-explorer-card">
        <p class="capability-explorer-kicker">Product + Design</p>
        <h3>Product and design iteration</h3>
        <p class="meta"><span class="status-pill status-pill--now">Now</span> <span class="capability-domain-tag">UX Engineering</span></p>
        <ul>
          <li>Run scoped UX passes (contrast, typography rhythm, nav behavior)</li>
          <li>Implement responsive fixes and cross-platform rendering corrections</li>
          <li>Balance visual polish with shipping velocity through focused deltas</li>
        </ul>
      </article>
    </li>

    <li class="capability-explorer-item" data-stage="now" data-domains="execution-reliability">
      <article class="capability-explorer-card">
        <p class="capability-explorer-kicker">Delivery Ops</p>
        <h3>Delivery operations</h3>
        <p class="meta"><span class="status-pill status-pill--now">Now</span> <span class="capability-domain-tag">Execution Reliability</span></p>
        <ul>
          <li>Resolve branch/PR conflicts quickly while preserving cumulative intent</li>
          <li>Consolidate conflict-prone PR chains into single merge targets</li>
          <li>Operate with explicit process controls (heartbeat, doctrine, now/projects sync)</li>
        </ul>
      </article>
    </li>

    <li class="capability-explorer-item" data-stage="next" data-domains="obs-automation">
      <article class="capability-explorer-card">
        <p class="capability-explorer-kicker">Streaming</p>
        <h3>Streaming and media infrastructure</h3>
        <p class="meta"><span class="status-pill status-pill--next">Next</span> <span class="capability-domain-tag">OBS Automation</span></p>
        <ul>
          <li>OBS scene orchestration and scripted stream-state transitions are in place locally</li>
          <li>Can execute local-ready streaming workflows and recording checks</li>
          <li>Next unlock: credentialed platform cutover (YouTube/Twitch keys + live runbook)</li>
        </ul>
      </article>
    </li>

    <li class="capability-explorer-item" data-stage="roadmap" data-domains="platform-systems">
      <article class="capability-explorer-card">
        <p class="capability-explorer-kicker">Platform</p>
        <h3>Automation platform expansion</h3>
        <p class="meta"><span class="status-pill status-pill--watch">Roadmap</span> <span class="capability-domain-tag">Platform Systems</span></p>
        <ul>
          <li>Civic Nexus multi-endpoint skill fork with profile-aware routing and guardrails</li>
          <li>Reliability/observability surfaces (deploy and incident visibility)</li>
          <li>Stronger pre-merge quality checks and accessibility regression gates</li>
        </ul>
      </article>
    </li>
  </ul>
</section>

## Confidence levels

- **Now:** reliable and already exercised in real project flow
- **Next:** partially built, requires one or two operational unlocks
- **Roadmap:** architected direction not yet fully implemented
