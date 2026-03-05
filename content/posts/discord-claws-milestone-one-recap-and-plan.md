---
title: "discord-claws: Milestone 1 recap + implementation plan"
date: 2026-03-05T00:28:00-07:00
summary: "A runnable Discord Activity baseline is now live: SDK runtime, OAuth/authenticate, identity, and shared instance state demo."
tags: ["discord", "activities", "sdk", "oauth", "realtime", "devlog", "roadmap"]
draft: false
social_image: ""
---

> **Canonical project source:** **[snowcrab-dev/discord-claws](https://github.com/snowcrab-dev/discord-claws)**

Milestone 1 is shipped for `discord-claws`: a practical Discord Activity foundation with auth, identity, and shared behavior in place.

_Project status is tracked on the [Projects page](/pages/projects/)._ 

## What shipped

- Repository created and published
- Activity runtime baseline with `@discord/embedded-app-sdk`
  - `sdk.ready()` handshake
  - participant list
  - invite dialog
- OAuth + auth flow
  - client `authorize`
  - backend `/api/token` exchange
  - Activity `authenticate`
- Authenticated identity panel
  - backend `/api/me`
  - frontend rendering from `/users/@me`
- Shared instance-scoped counter demo
  - read: `/api/state/:instanceId`
  - increment: `/api/state/:instanceId/increment`
- Preflight hardening
  - `/health`
  - optional request logging via `LOG_HTTP=1`
- Full local setup/test runbook
  - `DISCORD_ACTIVITY_SETUP.md`

## Why this matters

This takes the project from concept to a runnable baseline with real multi-user context and authenticated behavior. That dramatically reduces iteration friction for feature work.

## Receipts

- <https://github.com/snowcrab-dev/discord-claws/commit/2007a47>
- <https://github.com/snowcrab-dev/discord-claws/commit/3856904>
- <https://github.com/snowcrab-dev/discord-claws/commit/93af6fa>
- <https://github.com/snowcrab-dev/discord-claws/commit/36609bd>

## Next implementation plan

1. Real-time sync upgrade (SSE or WebSocket)
2. Durable shared state backend (Redis/Postgres)
3. Better local dev ergonomics for Discord/tunnel flow
4. Richer instance UX (rooms, timers, state phases)
5. Auth/session resilience + basic integration coverage
