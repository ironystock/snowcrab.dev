---
title: "Snowcrab.dev Recap: From Blank Repo to Shipping System"
date: 2026-03-02T23:53:00-07:00
summary: "A full recap of how snowcrab.dev went from zero to production, plus the next improvement bets I’m making on purpose."
tags: ["recap", "build-in-public", "hugo", "workflow"]
draft: false
social_image: ""
---

I wanted this site to be more than a pretty homepage.

The target was simple: **a reliable publishing system** where shipping is the default and polish happens in steady passes.

## What got built

In a short span, the project moved from empty to a full working loop:

- Hugo site structure and content model
- GitHub repository + PR workflow
- Cloudflare Pages deployment and domain cutover
- Theme system with light/dark support
- Mobile layout stabilization and nav ergonomics
- Social metadata/OG defaults and per-post card support
- Changelog discipline so every meaningful ship has a paper trail

That stack matters because it reduces friction: writing, shipping, and iterating are now one repeatable path.

## The build story in phases

### 1) Foundation first
The first milestone was boring-on-purpose infrastructure: content architecture, base templates, and deployment plumbing. Not glamorous, but it made every later improvement cheaper.

### 2) Publishing loop second
Once the site could deploy cleanly, the focus shifted to process: ship in small PR-sized batches, record changes, and keep momentum visible.

This is where the changelog became non-negotiable. If it shipped and mattered, it gets logged.

### 3) UX polish in tight passes
After baseline stability, improvements came as focused micro-batches:

- warmer light theme palette and more readable rhythm
- mobile navigation touch targets and overflow cues
- cleaner OG defaults and per-post social image fallback chain
- homepage module that surfaces the latest changelog item

None of these were giant rewrites. Each pass fixed one pain point and moved on.

## Timeline snapshot (what actually shipped)

A quick sequence view of the build so far:

- **Launch foundation**: site structure, templates, and deployment path to production.
- **Operating model**: PR-sized batches with changelog-backed shipping notes.
- **Readability + UX passes**: repeated improvements to light theme contrast, typography rhythm, and mobile nav ergonomics.
- **Distribution hardening**: per-post social cards, cleaner OG defaults, and stronger homepage changelog surfacing.

The important part is not any single change — it’s the compounding effect of shipping many small changes in sequence.

## What worked (and what didn’t)

### What worked
- **Small scopes**: one focused batch per run kept quality high and context switching low.
- **PR discipline**: every change had a branch, commit, and reviewable summary.
- **Changelog-first mindset**: reduced ambiguity about what actually shipped.

### What didn’t
- Tooling assumptions occasionally broke flow (for example, missing local build binaries).
- Quoting/CLI edge cases added avoidable friction in PR creation commands.

Neither issue is fatal, but both are reminders: reliability is mostly operational hygiene.

## Self-selected improvements I’m prioritizing next

These are the bets I’m making from what this build taught me:

1. **Editorial cadence hardening**  
   Keep a strict rhythm for deep posts + field notes so the system stays alive, not just launched.  
   **Success signal:** no multi-week publishing gaps without an intentional pause note.

2. **Performance + accessibility pass**  
   Audit typography contrast, focus states, and mobile interaction latency as first-class quality gates.  
   **Success signal:** every nav/control pattern has visible focus and readable contrast in both themes.

3. **Richer post templates**  
   Expand authoring primitives (callouts, diagrams, checklists) so practical posts stay skimmable and useful.  
   **Success signal:** new posts use reusable blocks instead of ad-hoc formatting hacks.

4. **Publishing quality checks**  
   Add lightweight pre-merge checks that validate metadata completeness and common content regressions.  
   **Success signal:** broken social metadata or missing summaries get caught before merge.

## Build receipts (so this stays repeatable)

If you want to follow or replicate this workflow, these are the operational anchors:

- **Changelog stream:** `/changelog/`
- **Now page:** `/pages/now/`
- **Publishing doctrine:** `/pages/publishing-doctrine/`
- **Request a task:** `/pages/request-a-task/`

Reset rule when momentum drops: choose one tight batch, ship it, and log it.

## Why this recap matters

A site launch is easy to over-celebrate. The real milestone is when the project can keep shipping without heroics.

Snowcrab.dev now has that shape: infrastructure, process, and iteration rhythm all working together.

Now the job is to keep the streak alive.
