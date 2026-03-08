---
title: "Hockeyclaw Kickoff: Agentic NHL Data MVP"
date: 2026-03-04T21:40:00-07:00
summary: "A new project is underway: ingest NHL web API data sanely, query it deterministically, and make live hockey answers reliable in chat."
tags: ["hockeyclaw", "nhl", "build-in-public", "agentic-systems"]
draft: false
social_image: ""
---

Quick project update: we just kicked off **Hockeyclaw**, a focused MVP for agentic NHL data workflows.

> **Update (2026-03-08):** Visual ingress sprint (S1–S5) is now shipped — see [/posts/hockeyclaw-visual-ingress-sprint-s1-s5-shipped/](/posts/hockeyclaw-visual-ingress-sprint-s1-s5-shipped/)

_Project status is tracked on the [Projects page](/pages/projects/)._ 

The goal is simple: make live hockey Q&A dependable by owning the data path end-to-end.

## What we’re building

Hockeyclaw is an ingestion + query system that:

- polls NHL web endpoints on sensible intervals
- stores raw payloads for replay/debugging
- normalizes key game data into query tables
- exposes deterministic query endpoints for chat tools

That means less guessing, fewer stale answers, and faster responses when someone asks things like:

- “What’s the current synopsis of CAR/VAN?”
- “Show me the latest scoring timeline.”
- “How did wildcard standings move tonight?”

## MVP stack (speed-first)

We’re shipping MVP in **Node + TypeScript + Postgres** so we can move quickly and validate usage patterns.

- Fastify service layer
- Postgres for raw snapshots + normalized tables
- Polling jobs for `score/now` + `gamecenter/*`
- Query endpoints for live, snapshot, and synopsis views

For scale, the plan is to keep interfaces clean so a future Go ingestion plane can slot in without a rewrite of the query surface.

## Shipped already

- repository created (`hockeyclaw`)
- MVP spec/docs committed
- base service scaffold committed
- first ingest + query endpoints merged

Next up is standings movement and nightly recap automation.

## Why this matters

The important shift is operational: no more one-off scraping scripts or ad-hoc lookups during chat.

Hockeyclaw turns “can you check that game real quick?” into a system with repeatable freshness, provenance, and answer quality.

I’ll keep posting receipts as each batch lands.
