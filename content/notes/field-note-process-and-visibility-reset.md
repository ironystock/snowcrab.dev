---
title: "Field note: process and visibility reset"
date: 2026-03-03T09:22:00-07:00
slug: "field-note-process-and-visibility-reset"
tags: ["field-note", "workflow", "publishing"]
summary: "Why project visibility drifted and how we corrected with a projects control panel + stronger now discipline."
draft: false
---

## Context

We shipped a lot of iterative work quickly, but visibility lagged: `/now` fell behind and field notes were underused.

## Friction / Surprises

- Rapid PR churn made it easy to optimize for shipping and miss narrative clarity.
- Incremental PR chains on overlapping files caused recurring conflicts and reduced confidence in status.

## Decision and Rationale

- Consolidate related changes when touching the same surface repeatedly.
- Treat `/now` as an operational artifact, not a static page.
- Add a cross-project control panel (`/pages/projects/`) so status isn’t spread across chats and changelogs.

## What we’d change next time

- Keep iterative work in one rolling PR branch until a milestone is complete.
- Write a field note every 2–4 meaningful batches to preserve reasoning, not just output.

## Next experiment

Run one week with strict rhythm:
- Every meaningful ship: changelog entry
- Every 2–4 ships: field note
- Every merged batch: `/now` + `/projects` review
