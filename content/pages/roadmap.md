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
- [ ] Add post-level visual receipts/metrics where appropriate.

### Track D — Advanced feature candidates *(Exploration)*
- [ ] WebGPU-enhanced background/data visuals (optional progressive enhancement).
- [ ] Interactive execution graph (state transitions over time).
- [ ] Temporal playback mode (“what changed this week” cinematic timeline).
- [ ] AI-assisted diff narration mode for executive summaries.

### Track E — Governance & quality guardrails *(Continuous)*
- [ ] Before/after artifact receipts for every major visual batch.
- [ ] Sync `/pages/now`, `/pages/projects`, and `/pages/roadmap/` in same batch.
- [ ] Keep heartbeat queue aligned to active roadmap items (no placeholder drift).

## Roadmap 2 archive (complete)

Roadmap 2 (UX modernization + feature diffusion) is fully complete and preserved through changelog receipts.

## Operating contract

- Default ship path: direct to `main`
- PR fallback: only for risky/guardrail-sensitive changes
- No filler batches; ship meaningful outcomes only
- Every meaningful ship gets a changelog entry
- Heartbeat reconciles `HEARTBEAT.md` ↔ `docs/STATE.md` ↔ open roadmap items before status reporting
