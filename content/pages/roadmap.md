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

### 1) Multi-site publishing

**Goal:** support more than one publication surface without duplicating process.

**Planned work:**
- Shared content primitives for posts/notes/changelog across site variants
- Environment-aware deployment targets and per-site metadata
- Consistent release flow across projects (same batch/PR/changelog discipline)

### 2) Richer social cards

**Goal:** improve distribution quality and consistency of link previews.

**Planned work:**
- Template-driven social card variants by content type
- Better image composition defaults (title/subtitle/brand marks)
- Stronger fallbacks for missing media assets

### 3) Async worker mode

**Goal:** decouple long-running automation from interactive loops.

**Planned work:**
- Background worker queue for heavier tasks
- Clear status reporting back into changelog/reliability surfaces
- Retry and failure-handling patterns for unattended execution

### 4) Voice + video artifacts

**Goal:** expand output from text-only shipping to multimodal assets.

**Planned work:**
- Voice summaries for key releases and recap posts
- Video snippets for demoable UI/process changes
- Structured artifact storage and linking from changelog entries

## Operating constraints

- Keep batches PR-sized and reviewable
- Prefer incremental delivery over long branch drift
- Keep every meaningful ship legible through changelog entries

## How to read this page

- **Near-term:** features actively being converted into scoped tasks
- **Mid-term:** requires foundational refactors first
- **Always-on:** quality/process improvements that apply to every batch

Roadmaps evolve. Shipping discipline stays.
