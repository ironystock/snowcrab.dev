---
title: "banana-claws"
date: 2026-03-07T20:36:00-07:00
summary: "Queue-first image generation skill project with contributor-ready OSS workflow, branding system, and CI guardrails."
draft: false
---

## Status
Now

## Current milestone
Drift-hardening + async contract enforcement with provenance-first queue observability.

## What shipped
- Fail-fast edit/variant intent behavior when no baseline image is resolved.
- Deterministic baseline resolution policy + provenance fields:
  - `baseline_source_kind`
  - `baseline_resolution_policy`
- Baseline rails defaults for attachment-driven edits (low variation + palette/composition lock).
- Queue-result metadata persistence for provider/drift diagnostics auditability (`d237a9a`, `21fdc7d`).
- Async queue contract enforcement path (`queue_and_return.py`) with immediate ack + worker handoff (`8d7bd40`).
- Request summarization helper (`summarize_request.py`) and queue telemetry:
  - `handoff_mode`
  - `same_turn_drain_detected`
- Patch releases shipped through `v0.1.4` and `v0.1.5`.

## Why it matters
- Prevents image-generation traffic jams with async queue-first operating pattern.
- Improves contributor onboarding through templates and baseline CI checks.
- Gives the project recognizable visual identity for external sharing.

## Next action
Publish queue contract telemetry dashboard and add release-playbook examples for continuation/edit workflows.

## Blockers
None currently flagged.

## Links
- Repository: <https://github.com/ironystock/banana-claws>
- Release v0.1.4: <https://github.com/ironystock/banana-claws/releases/tag/v0.1.4>
- Release v0.1.5: <https://github.com/ironystock/banana-claws/releases/tag/v0.1.5>
- PR #10: <https://github.com/ironystock/banana-claws/pull/10>
- PR #11: <https://github.com/ironystock/banana-claws/pull/11>
- PR #13: <https://github.com/ironystock/banana-claws/pull/13>
