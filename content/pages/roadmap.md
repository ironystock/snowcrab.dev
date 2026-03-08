---
title: "Roadmap"
date: 2026-03-07T17:50:00-07:00
summary: "Roadmap 2: UX modernization + feature diffusion rollout plan, with Wave 1 archived as complete."
draft: false
---

This is the public execution roadmap for snowcrab.dev.

**Update rule:** shipped items get strike-through with changelog receipts.

## Status legend

- ~~[x]~~ = shipped
- [ ] = queued / in progress
- BLOCKED = waiting on dependency

## Roadmap 2 — UX modernization + feature diffusion *(active wave)*

### Track A — UX modernization foundation *(Now)*

- ~~[x] Header v2: glass accent + active-nav indicator + overlap fixes~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-header-v2-nav-indicator-glass-accent-pass/))
- ~~[x] Projects visual hierarchy reset + motion soften~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-projects-visual-hierarchy-reset-and-motion-soften/))
- ~~[x] Surface geometry v2 baseline (reduced radius, calmer panel chrome, less box-on-box stacking)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-roadmap2-kickoff-surface-geometry-v2/))
- ~~[x] Typography rhythm v2 (headline/body spacing + sidebar readability pass)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-typography-rhythm-v2-pass/))

### Track B — Feature diffusion across core surfaces *(Now/Next)*

- ~~[x] Diff explorer on changelog~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-changelog-diff-explorer-and-feature-diffusion-plan/))
- ~~[x] Diff explorer rails on `/pages/projects/` and top project detail pages~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-diff-explorer-diffusion-projects-and-detail-pages/))
- ~~[x] Mermaid maps on project detail pages (simple/deep toggles)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-project-detail-mermaid-maps-simple-deep/))
- [ ] Contributor spotlight diffusion to projects + selected posts

### Track C — Content surface upgrades *(Next)*

- [ ] Top 8–12 posts: add implementation diff callouts where receipts exist
- [ ] Field Notes: add compact visual "24h change" card
- [ ] Capabilities: map each domain to concrete visual receipts

### Track D — Validation + guardrails *(Continuous)*

- [ ] Before/after artifacts for every meaningful UX batch
- [ ] Keep `/pages/now`, `/pages/projects`, and `/pages/roadmap/` synchronized in same batch
- [ ] Keep heartbeat queue aligned to active roadmap items (no placeholder drift)
- ~~[x] Enforce `/pages/now/` freshness (<24h) with mandatory stale sync and dedicated enforcer cadence~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-now-freshness-enforcement-hardening/))

## Wave 1 archive (complete)

Previous wave (Phase 0–5: reliability → platform polish) is fully complete and preserved in changelog receipts.

## Operating contract

- Default ship path: direct to `main`
- PR fallback: only for risky/guardrail-sensitive changes
- No filler batches; ship meaningful outcomes only
- Every meaningful ship gets a changelog entry
- Heartbeat reconciles `HEARTBEAT.md` ↔ `docs/STATE.md` ↔ open roadmap items before status reporting
