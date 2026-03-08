---
title: "Roadmap"
date: 2026-03-07T19:00:00-07:00
summary: "Roadmap 3: visual language overhaul + modern builder-inspired UX + data storytelling expansion."
draft: false
---

This is the public execution roadmap for snowcrab.dev.

**Update rule:** shipped items get strike-through with changelog receipts.

## Status legend

- ~~[x]~~ = shipped
- [ ] = queued / in progress
- BLOCKED = waiting on dependency

## Roadmap 3 — Modern Builder UX Overhaul *(active wave)*

### Track A — Visual language reset (go big) *(Now)*
- ~~[x] Border/aesthetic overhaul: move beyond rounded-box stack to layered modern surfaces.~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-roadmap3-border-aesthetic-baseline/))
- ~~[x] Border token system v2 (hairline, soft, accent, focus) + component-level adoption.~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-roadmap3-border-aesthetic-baseline/))
- ~~[x] Card chrome simplification pass (fewer nested boxes, stronger hierarchy).~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-roadmap3-card-chrome-simplification-pass/))
- ~~[x] Hero + section transitions with premium-but-calm visual cadence.~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-phase3-motion-token-pass/))

### Track B — Modern builder inspiration diffusion *(Now/Next)*
- ~~[x] Integrate inspiration patterns from modern builder sites (Linear/Vercel/Raycast/Cursor/Framer class language).~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-roadmap3-modern-builder-diffusion-home-projects/))
- ~~[x] Ship homepage + projects “big swing” pass with new visual primitives.~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-roadmap3-modern-builder-diffusion-home-projects/))
- ~~[x] Create mockup direction set (A/B/C) and use it as implementation contract.~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-roadmap3-mockup-direction-set-abc/))

<section class="roadmap-mockup-set card" aria-labelledby="roadmap-mockup-set-heading">
  <h4 id="roadmap-mockup-set-heading">Mockup direction set (A/B/C)</h4>
  <p class="meta">Implementation contract for upcoming visual batches.</p>
  <ul class="roadmap-mockup-grid">
    <li>
      <h5>A · Minimal Signal</h5>
      <p>Low-gloss, data-first look: restrained color, sharp hierarchy, maximum scan speed.</p>
      <p class="meta">Use for ops-heavy and reliability surfaces.</p>
    </li>
    <li>
      <h5>B · Balanced Modern (default)</h5>
      <p>Builder-inspired premium feel with calm gradients, light depth, and strong readability.</p>
      <p class="meta">Primary direction for homepage + projects + changelog.</p>
    </li>
    <li>
      <h5>C · Expressive Narrative</h5>
      <p>Higher contrast and richer visual framing for flagship case studies and storytelling pages.</p>
      <p class="meta">Use selectively for feature narratives and launch recaps.</p>
    </li>
  </ul>
</section>

### Track C — Charts & graph storytelling *(Now/Next)*
- ~~[x] Add meaningful charts to Projects (lane trend, ship cadence, blocker distribution).~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-roadmap3-charts-graph-placement-pass/))
- ~~[x] Add changelog analytics mini-dashboard (velocity, categories, risk markers).~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-roadmap3-charts-graph-placement-pass/))
- ~~[x] Add post-level visual receipts/metrics where appropriate.~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-roadmap3-trackc-post-level-metrics-receipts/))

### Track D — Advanced feature candidates *(Exploration)*
- ~~[x] WebGPU-enhanced background/data visuals (optional progressive enhancement).~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-trackd-webgpu-enhanced-visuals-prototype/))
- ~~[x] Interactive execution graph (state transitions over time).~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-trackd-interactive-execution-graph-prototype/))
- ~~[x] Temporal playback mode (“what changed this week” cinematic timeline).~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-trackd-temporal-playback-mode-prototype/))
- ~~[x] AI-assisted diff narration mode for executive summaries.~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-trackd-ai-assisted-diff-narration-mode/))

<section class="execution-graph-prototype card" id="execution-graph-prototype" aria-labelledby="execution-graph-prototype-heading">
  <h4 id="execution-graph-prototype-heading">Interactive execution graph prototype</h4>
  <p class="meta">Roadmap-adjacent state transitions with two views: lane flow and time progression.</p>
  <div class="execution-graph-modes" role="group" aria-label="Execution graph view mode">
    <button type="button" class="chip is-active" data-graph-view="flow" aria-pressed="true">Flow view</button>
    <button type="button" class="chip" data-graph-view="timeline" aria-pressed="false">Timeline view</button>
  </div>

  <div data-graph-panel="flow">
    <pre class="mermaid" aria-label="Execution state flow graph">
flowchart LR
  Q[Queued] --> N[Now]
  N --> S[Shipped]
  N --> B[Blocked]
  B --> N
  S --> R[Receipted]
  R --> A[Archived]
    </pre>
  </div>

  <div data-graph-panel="timeline" hidden>
    <pre class="mermaid" aria-label="Execution timeline progression graph">
flowchart TB
  W1[Wave planning] --> W2[Focused batches]
  W2 --> W3[Artifacts + changelog]
  W3 --> W4[State/queue sync]
  W4 --> W5[Next wave input]
    </pre>
  </div>
</section>

<section class="temporal-playback-prototype card" id="temporal-playback-prototype" aria-labelledby="temporal-playback-heading">
  <h4 id="temporal-playback-heading">Temporal playback mode prototype</h4>
  <p class="meta">Cinematic replay of this week’s shipped changes. Use Play to step through the execution story.</p>

  <div class="temporal-playback-controls" role="group" aria-label="Temporal playback controls">
    <button type="button" class="chip is-active" data-playback-action="play" aria-pressed="true">Play</button>
    <button type="button" class="chip" data-playback-action="pause" aria-pressed="false">Pause</button>
    <button type="button" class="chip" data-playback-action="restart" aria-pressed="false">Restart</button>
    <label class="meta" for="temporal-playback-speed">Speed</label>
    <select id="temporal-playback-speed" class="temporal-playback-speed" aria-label="Playback speed">
      <option value="1">1×</option>
      <option value="1.5" selected>1.5×</option>
      <option value="2">2×</option>
    </select>
  </div>

  <div class="temporal-playback-narration-controls" role="group" aria-label="Executive narration mode">
    <button type="button" class="chip is-active" data-narration-mode="executive" aria-pressed="true">Executive narration</button>
    <button type="button" class="chip" data-narration-mode="source" aria-pressed="false">Source summary</button>
  </div>

  <div class="temporal-playback-stage" aria-live="polite">
    <p class="temporal-playback-kicker">Now showing</p>
    <h5 data-playback-headline>Loading weekly replay…</h5>
    <p data-playback-summary class="meta"></p>
    <p data-playback-narration class="meta temporal-playback-narration"></p>
    <p data-playback-meta class="meta"></p>
    <div class="temporal-playback-progress" role="presentation"><span data-playback-progress></span></div>
  </div>

  <ol class="temporal-playback-rail" data-playback-rail>
    <li data-playback-date="2026-03-07" data-playback-title="Track D interactive execution graph shipped" data-playback-summary="Introduced a switchable flow/timeline execution graph on the roadmap page to visualize queue state transitions." data-playback-impact="Faster exec-state orientation for stakeholder readouts." data-playback-receipt="/changelog/2026-03-07-trackd-interactive-execution-graph-prototype/"></li>
    <li data-playback-date="2026-03-07" data-playback-title="Roadmap 3 chart storytelling pass" data-playback-summary="Added project trend and changelog analytics visuals to strengthen weekly execution visibility." data-playback-impact="Executive snapshots now show pace + risk mix at a glance." data-playback-receipt="/changelog/2026-03-07-roadmap3-charts-graph-placement-pass/"></li>
    <li data-playback-date="2026-03-07" data-playback-title="Promptmark pilot stabilization sync" data-playback-summary="Merged cross-channel pilot updates into project detail, changelog, and recap artifacts." data-playback-impact="Reduced reporting drift by unifying pilot status across surfaces." data-playback-receipt="/changelog/2026-03-07-promptmark-pilot-stabilization-harvest-sync/"></li>
    <li data-playback-date="2026-03-07" data-playback-title="Queue-state drift guardrail hardening" data-playback-summary="Enforced CI checks for queue-state alignment between now/projects/roadmap and docs state." data-playback-impact="Improved trust in public status by blocking queue drift regressions." data-playback-receipt="/changelog/2026-03-07-surface-sync-guardrail-now-projects-roadmap/"></li>
    <li data-playback-date="2026-03-07" data-playback-title="Temporal playback mode prototype" data-playback-summary="Added cinematic weekly replay controls (play, pause, restart, speed) directly on roadmap Track D." data-playback-impact="Weekly progress can be replayed in briefing-friendly sequence." data-playback-receipt="/changelog/2026-03-07-trackd-temporal-playback-mode-prototype/"></li>
  </ol>
</section>

<section class="webgpu-prototype card" id="webgpu-prototype" aria-labelledby="webgpu-prototype-heading">
  <h4 id="webgpu-prototype-heading">WebGPU-enhanced background/data visual prototype</h4>
  <p class="meta">Progressive enhancement: WebGPU-capable browsers get animated data-field rendering, while all others get a static-safe fallback.</p>
  <div class="webgpu-prototype-stage" data-webgpu-stage>
    <canvas id="webgpu-prototype-canvas" width="960" height="240" aria-label="WebGPU data-field prototype canvas"></canvas>
    <p class="meta" id="webgpu-prototype-status">Detecting WebGPU capability…</p>
  </div>
</section>

### Track E — Governance & quality guardrails *(Continuous)*
- [ ] Before/after artifact receipts for every major visual batch.
- ~~[x] Sync `/pages/now`, `/pages/projects`, and `/pages/roadmap/` in same batch.~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-surface-sync-guardrail-now-projects-roadmap/))
- [ ] Keep heartbeat queue aligned to active roadmap items (no placeholder drift).

## Roadmap 2 archive (complete)

Roadmap 2 (UX modernization + feature diffusion) is fully complete and preserved through changelog receipts.

## Operating contract

- Default ship path: direct to `main`
- PR fallback: only for risky/guardrail-sensitive changes
- No filler batches; ship meaningful outcomes only
- Every meaningful ship gets a changelog entry
- Heartbeat reconciles `HEARTBEAT.md` ↔ `docs/STATE.md` ↔ open roadmap items before status reporting
