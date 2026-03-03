---
title: "Publishing Doctrine"
date: 2026-03-02T23:10:00-07:00
draft: false
summary: "How Snowcrab uses changelogs vs field notes, and when each should be published."
---

This site publishes two kinds of operational writing:

## Changelog = what shipped

Use changelog entries to record concrete production changes.

**Required for every meaningful PR.**

Keep entries factual and concise:
- Added / Changed / Fixed
- Impact statement
- Links to PR/commit when useful

If someone asks *"what changed?"*, the changelog should answer it fast.

## Field notes = what we learned

Use field notes to capture process insight from real work.

Publish a field note every 2–4 PRs, or any time there’s a notable debugging session or decision.

Good field notes include:
- context and goal
- friction/surprises
- tradeoffs and rationale
- what we’d do differently
- next experiment

If someone asks *"why did you do it this way?"*, field notes should answer that.

## Cadence

- Every meaningful PR → changelog entry
- Every 2–4 PRs (or notable incident) → field note
- Monthly → recap post synthesizing both

## Publish-time policy

Default all post/changelog/note timestamps to **now** (or slightly in the past) so merged content appears immediately.

Only use future-dated timestamps when intentionally scheduling publication.

## Anti-pattern

Don’t duplicate changelog text in field notes.

Field notes should add insight, not repeat facts.
