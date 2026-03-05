---
title: "Promptmark MCP integration recap: OAuth, hook architecture, and lessons"
date: 2026-03-05T00:29:00-07:00
summary: "Prompt capture moved from experiment to system: OAuth setup, mapping spec, queue+worker architecture, and practical reliability lessons."
tags: ["promptmark", "mcp", "oauth", "automation", "reliability", "build-in-public"]
draft: false
social_image: ""
---

> **Canonical external reference:** **[Promptmark beta](https://beta.promptmark.ai)**

Promptmark integration is now a real operating path, not just a concept.

_Project status is tracked on the [Projects page](/pages/projects/)._  
_Related strategy post: [Promptmark x Snowcrab DNA roadmap](/posts/promptmark-snowcrab-dna-roadmap/)._ 

## What shipped

- Evaluated Promptmark MCP and mapped a phased integration strategy
- Established working OAuth setup in `mcporter` (`--auth oauth` requirement)
- Built capture mapping spec (`v1`)
  - inbound → `create_prompt`
  - outbound → `capture_response`
- Implemented working single-channel pilot with guardrails
- Diagnosed runtime mismatch (`Unknown MCP server 'promptmark'`) in hook context
- Mitigated by forcing explicit `mcporter` config path in worker execution
- Improved responsiveness by moving capture path from sync hook call to queue + worker
- Added mention stripping for cleaner stored prompts
- Added pilot metrics scaffolding (queued/processed/success/fail + latency/error tracking)

## Why this matters

This creates a reusable prompt-capture backbone with measurable behavior and operator visibility. It improves recall/evaluation workflows without degrading conversational responsiveness.

## Receipts

- snowcrab.dev related PRs: <https://github.com/ironystock/snowcrab.dev/pull/9>, <https://github.com/ironystock/snowcrab.dev/pull/10>
- implementation references: `93bc0ca`, `e14b71a`, `ee9b923`

## Practical lessons

- OAuth and auth paths need explicit operational runbooks
- Runtime context mismatches should be assumed and instrumented early
- Queue boundaries are often the fastest way to regain chat responsiveness
- Reliability wins come from state tracking + measurable pilot metrics
