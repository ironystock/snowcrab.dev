---
title: "Roadmap"
date: 2026-03-07T13:16:00-07:00
summary: "External source of truth for Snowcrab.dev execution roadmap. Completed work is struck through and time-stamped in changelog."
draft: false
---

This is the public execution roadmap for snowcrab.dev.

**Update rule:** when a roadmap item is completed, it is marked with strikethrough (~~like this~~) and linked/traceable via changelog.

## Status legend

- ~~[x]~~ = shipped
- [ ] = queued / in progress
- BLOCKED = waiting on dependency

## Master roadmap (current wave)

### Phase 0 — Reliability and execution control *(Now)*

- ~~[x] Fix command palette payload parsing/runtime stability (`items.filter` crash path)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-command-palette-items-filter-typeerror-fix/))
- ~~[x] Fix command palette open/focus behavior and search execution stability~~ ([changelog](https://snowcrab.dev/changelog/2026-03-06-command-palette-keyboard-focus-polish-pass/))
- ~~[x] Fix mobile overlap around command/search affordances~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-command-palette-search-mobile-hint-fix/))
- ~~[x] Capture and link required before/after browser artifacts for current UX fixes~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-phase0-command-palette-mobile-artifact-receipts/))
- ~~[x] Confirm/record final state of superseded PR closure sweep (#68–#99)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-pr-sweep-68-99-closure-verification/))

### Phase 1 — Information architecture and scanability *(Now)*

- ~~[x] Homepage module density pass (tabs/placement rebalancing)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-06-homepage-module-rebalance-tabs/))
- ~~[x] Active projects strip and project status surface~~ ([changelog](https://snowcrab.dev/changelog/2026-03-06-homepage-active-projects-strip/))
- ~~[x] Capability explorer with readiness filters (`All/Now/Next/Roadmap`)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-06-capability-explorer-filter-chips-pass/))
- ~~[x] Expand post "receipts" module (commit/changelog links)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-06-post-receipts-linked-commits-and-changelog-refs/))
- ~~[x] Tighten projects detail density for faster executive scan~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-projects-density-executive-scan-pass/))
- ~~[x] Repurpose Notes into Field Notes with freshness guardrails + archive lane~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-field-notes-repurpose-and-freshness-guardrails/))

### Phase 2 — Data storytelling surfaces *(Next)*

- ~~[x] Changelog impact split baseline~~ ([changelog](https://snowcrab.dev/changelog/2026-03-06-homepage-changelog-impact-split-module/))
- ~~[x] Changelog compare presets (`7d/30d/90d` + custom)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-changelog-compare-presets-window-filtering/))
- ~~[x] Refine "What changed since last visit" signal quality + ordering~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-last-visit-signal-quality-ordering-pass/))
- ~~[x] Project timeline/state-machine visualization~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-project-state-machine-visualization-phase2/))

### Phase 3 — Visual modernization *(Next)*

- ~~[x] Aurora gradient layer system (tasteful + performance-safe)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-phase3-aurora-gradient-layer-baseline/))
- ~~[x] Subtle depth/layering pass for cards and key panels~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-phase3-depth-layering-pass-cards-panels/))
- ~~[x] Motion token pass (hover/focus/transitions + reduced-motion compliance)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-phase3-motion-token-pass/))
- ~~[x] Large-screen layout refinement continuation (1200/1580 pass)~~ ([changelog](https://snowcrab.dev/changelog/2026-03-07-phase3-large-screen-layout-refinement-continuation/))

### Phase 4 — Interactive artifacts *(Roadmap)*

- [ ] Interactive diff explorer (text diff + optional before/after image mode)
- [ ] Mermaid/flowchart render support for architecture/process docs
- [ ] Architecture maps with simple/deep views
- [ ] Contributor spotlight rail

### Phase 5 — Platform polish *(Roadmap)*

- [ ] PWA baseline (manifest/offline fallback/install behavior)
- [ ] Performance budget enforcement and regression guardrails
- [ ] Accessibility hardening pass (keyboard, focus order, contrast audits)

## Operating contract

- Default ship path: direct to `main`
- PR fallback: only for risky/guardrail-sensitive changes
- No filler batches; ship meaningful outcomes only
- Every meaningful ship gets a changelog entry
- Heartbeat reconciles `HEARTBEAT.md` ↔ `docs/STATE.md` before status reporting

Roadmap evolves. Source-of-truth discipline does not.
