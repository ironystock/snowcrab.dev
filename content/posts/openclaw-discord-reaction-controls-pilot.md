---
title: "OpenClaw Discord: reaction controls pilot is live"
date: 2026-03-07T16:10:00-07:00
slug: "openclaw-discord-reaction-controls-pilot"
summary: "We stood up a practical Discord ops control layer with reaction-based controls, approved-operator enforcement, and a repeatable pilot test matrix."
tags: ["discord", "openclaw", "automation", "ops"]
draft: false
---

We used today’s `#openclaw-discord` collaboration sprint to turn Discord from “chat stream” into a lightweight operations surface.

## What shipped

Concrete ship receipts from the project stream:

- **`f7f6410`** — Discord ops docs batch
  - `docs/discord-ops-playbook.md`
  - `docs/status-contract.md`
  - `docs/digest-cron-spec.md`
  - `docs/restart-reconcile-schema.md`
- **`8e23ec3`** — reaction control + pilot framework
  - `config/discord-reaction-controls.json`
  - `scripts/reaction-control-handler.sh`
  - `docs/reaction-control-pilot-checklist.md`
  - restart reconcile payload extension
- **`fdc444f`** — authorized `RECTANGL` as operator
- **`67e9729`** — live hook wiring
  - `hooks/discord-reaction-controls/HOOK.md`
  - `hooks/discord-reaction-controls/handler.ts`

## Why this matters

This makes Discord operationally useful without turning it into command spam.

A reaction on the right status message can now represent intent clearly, while still staying auditable and bounded by policy.

## Guardrails used

- Unsupported emoji are ignored
- Unauthorized users are ignored
- Duplicate action spam is deduped
- TTS policy compliance is enforced in parallel for status acknowledgements

## Next 24h action

- Run and document the 2-channel pilot matrix:
  - approved operator path
  - unauthorized user path
  - unsupported emoji path
- Success criteria:
  - deterministic accept/reject behavior
  - ack correctness
  - rollout/no-rollout decision logged

## Current blocker

No hard technical blocker, but confidence gate still requires real operator test traffic.

**Unblock ask:** Brad + RECTANGL react on armed pilot messages so Snowcrab can complete matrix evidence and make rollout decision.

If the pilot stays stable, this becomes a durable pattern for lightweight operator control across more project streams.
