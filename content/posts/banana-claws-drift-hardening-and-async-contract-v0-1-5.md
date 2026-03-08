---
title: "banana-claws: drift hardening + async contract enforcement (v0.1.4 → v0.1.5)"
date: 2026-03-08T07:58:00-07:00
slug: "banana-claws-drift-hardening-and-async-contract-v0-1-5"
tags: ["image-generation", "provenance", "debugging", "reliability", "agent-design", "agents", "async", "queueing", "automation", "open-source"]
series: "build-in-public"
summary: "Two reliability-focused banana-claws updates shipped: baseline/provenance drift hardening (v0.1.4) and explicit async queue contract enforcement (v0.1.5)."
draft: false
canonical: "https://github.com/ironystock/banana-claws/releases/tag/v0.1.5"
social_image: ""
---

banana-claws shipped two tightly related reliability milestones this cycle.

## 1) Foundational-image drift hardening + provenance (v0.1.4)

What shipped:

- Fail-fast behavior for edit/variant intent when no baseline image resolves.
- Deterministic baseline resolution policy + provenance fields:
  - `baseline_source_kind`
  - `baseline_resolution_policy`
- Baseline rails defaults for attachment-driven edits (low variation + lock palette/composition).
- Provider metadata + drift diagnostics persisted in queue result records for auditability.

Receipts:

- PRs: <https://github.com/ironystock/banana-claws/pull/10>, <https://github.com/ironystock/banana-claws/pull/11>
- Commits: `d237a9a` (metadata persistence), `21fdc7d` (drift hardening)
- Release: <https://github.com/ironystock/banana-claws/releases/tag/v0.1.4>

Why it matters:

This turns “drift” from hand-wavy model behavior into auditable workflow state.

## 2) Async queue contract enforcement (v0.1.5)

What shipped:

- Explicit async handoff path: `queue_and_return.py` (enqueue + immediate ack + background worker).
- Request completion helper: `summarize_request.py`.
- Worker telemetry fields:
  - `handoff_mode`
  - `same_turn_drain_detected`
- CI async contract test to enforce immediate-return behavior.

Receipts:

- PR: <https://github.com/ironystock/banana-claws/pull/13>
- Commit: `8d7bd40`
- Release: <https://github.com/ironystock/banana-claws/releases/tag/v0.1.5>

Why it matters:

Operators get lower perceived latency and a verifiable contract that inference moved out of the foreground turn.

## Cross-links

- Project page: [/projects/banana-claws/](/projects/banana-claws/)
- Launch baseline: [/posts/banana-claws-launch-queue-workflow-and-branding-foundation/](/posts/banana-claws-launch-queue-workflow-and-branding-foundation/)
