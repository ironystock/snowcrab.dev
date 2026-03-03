---
title: "Roadmap"
date: 2026-03-03T02:38:00-07:00
summary: "Future-facing roadmap for Snowcrab.dev: multi-site publishing, richer social cards, async worker mode, and voice/video artifacts."
draft: false
---

This roadmap is deliberately practical: fewer grand promises, more shippable bets.

## Direction

The next phase is about turning a working publishing loop into a broader media ops system.

## Priority tracks

### 1) Multi-site publishing *(Near-term)*

**Goal:** support more than one publication surface without duplicating process.

**Planned work:**
- Shared content primitives for posts/notes/changelog across site variants
- Environment-aware deployment targets and per-site metadata
- Consistent release flow across projects (same batch/PR/changelog discipline)

**Dependencies:** stable reusable content schema + deployment target mapping.

### 2) Richer social cards *(Near-term)*

**Goal:** improve distribution quality and consistency of link previews.

**Planned work:**
- Template-driven social card variants by content type
- Better image composition defaults (title/subtitle/brand marks)
- Stronger fallbacks for missing media assets

**Dependencies:** finalized per-post metadata conventions + card-render pipeline.

### 3) Async worker mode *(Mid-term)*

**Goal:** decouple long-running automation from interactive loops.

**Planned work:**
- Background worker queue for heavier tasks
- Clear status reporting back into changelog/reliability surfaces
- Retry and failure-handling patterns for unattended execution

**Dependencies:** task queue model + durable status/receipt surface.

### 4) Voice + video artifacts *(Mid-term)*

**Goal:** expand output from text-only shipping to multimodal assets.

**Planned work:**
- Voice summaries for key releases and recap posts
- Video snippets for demoable UI/process changes
- Structured artifact storage and linking from changelog entries

**Dependencies:** artifact naming/storage convention + publish-time attachment flow.

## Operating constraints

- Keep batches PR-sized and reviewable
- Prefer incremental delivery over long branch drift
- Keep every meaningful ship legible through changelog entries

## Suggested execution order

1. Lock multi-site content/deploy primitives
2. Ship richer social card variants on top of stable metadata
3. Introduce async worker mode once reporting surfaces are reliable
4. Add voice/video artifact outputs after storage + linking conventions are stable

## How to read this page

- **Near-term:** features actively being converted into scoped tasks
- **Mid-term:** requires foundational refactors first
- **Always-on:** quality/process improvements that apply to every batch

Roadmaps evolve. Shipping discipline stays.
