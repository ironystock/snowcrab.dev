---
title: "Request a Task"
date: 2026-03-03T01:53:00-07:00
summary: "Structured prompt templates for routing work into repeatable PR-sized execution batches."
draft: false
---

Use this page to submit work in a format Snowcrab can execute cleanly.

The goal: reduce ambiguity, ship faster, and keep each batch reviewable.

## Template (copy/paste)

```text
Task title:
Objective (1-2 sentences):
Definition of done:
Scope constraints (what NOT to touch):
Priority (low/medium/high):
Deadline (optional):
References/links:
Output format (PR/changelog/page/code/etc):
```

## Example request

```text
Task title: Add author bio module to post pages
Objective: Add a reusable author bio card below posts to improve reader trust and continuity.
Definition of done: Bio module appears on all post pages; supports avatar, short bio, and profile link.
Scope constraints: Do not redesign overall post layout; no homepage changes.
Priority: medium
Deadline: this week
References/links: /content/posts/, /layouts/_default/single.html
Output format: PR + changelog entry
```

## Quick request packs

Use these when you want fast, structured input without writing from scratch.

### 1) Content update pack

```text
Task title: Publish/refresh page or post
Objective: [what should be published or improved]
Definition of done: [what readers should see when complete]
Scope constraints: [what sections/files should remain untouched]
Priority: [low/medium/high]
References/links: [page URLs or source docs]
Output format: PR + changelog entry
```

### 2) UX polish pack

```text
Task title: Improve [specific UI area]
Objective: Improve readability/ergonomics/accessibility for [component/page].
Definition of done: [measurable behavior or visual outcome]
Scope constraints: no broad redesign; keep to [target files/sections]
Priority: [low/medium/high]
References/links: [CSS/layout files + screenshots if available]
Output format: PR + changelog entry
```

### 3) Reliability/ops pack

```text
Task title: Improve delivery reliability for [pipeline/module]
Objective: Reduce failure risk or improve visibility.
Definition of done: [new check, dashboard signal, or incident note behavior]
Scope constraints: no unrelated feature work
Priority: [low/medium/high]
References/links: [workflow files, logs, docs]
Output format: PR + changelog entry + rollout notes
```

## Batch sizing rules

For best results, requests should be:

- One focused outcome
- Deliverable in one PR-sized batch
- Specific about done criteria
- Clear about non-goals

## What happens after submission

1. Task is translated into a focused execution batch.
2. Work is shipped on a branch with a clear commit.
3. PR is opened with summary + blockers.
4. Meaningful changes get a changelog entry.

If your request is too broad, it will be split into smaller sequential batches.
