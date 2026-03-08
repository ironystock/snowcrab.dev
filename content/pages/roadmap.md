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
- [ ] Card chrome simplification pass (fewer nested boxes, stronger hierarchy).
- [ ] Hero + section transitions with premium-but-calm visual cadence.

### Track B — Modern builder inspiration diffusion *(Now/Next)*
- [ ] Integrate inspiration patterns from modern builder sites (Linear/Vercel/Raycast/Cursor/Framer class language).
- [ ] Ship homepage + projects “big swing” pass with new visual primitives.
- [ ] Create mockup direction set (A/B/C) and use it as implementation contract.

### Track C — Charts & graph storytelling *(Now/Next)*
- [ ] Add meaningful charts to Projects (lane trend, ship cadence, blocker distribution).
- [ ] Add changelog analytics mini-dashboard (velocity, categories, risk markers).
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
