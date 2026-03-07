# STATE

## Status
- State: Active
- Last updated: 2026-03-07 16:40 MST

## Last shipped batch
- Phase 4 contributor spotlight rail shipped on homepage sidebar: added contributor cards with role/focus context, direct links to shipped work, and durable data source wiring (`/data/contributor_spotlight.yaml`).

## Next queued action
- Phase 5 kickoff: PWA baseline (manifest/offline fallback/install behavior).

## Active blockers
- None.


## Imported Context Snapshot (2026-03-05)
- Source: `/home/brad/.openclaw/workspace/memory/channel-snowcrab-dev.md`
- Purpose: migrated pre-restart project context into durable docs.

### Snapshot
```md
# Channel Notes — #snowcrab-dev

_Last updated: 2026-03-05 (pre-gateway-restart snapshot)_

## Operating mode
- Default shipping path is **direct-to-main** (single focused batch per push).
- Use PR fallback only for risky/guardrail-sensitive changes.
- Avoid filler/micro passes; bundle into meaningful outcomes.

## Heartbeat policy
- Heartbeat backlog is active for site improvements.
- On each heartbeat tick, post one status line in channel:
  - `SHIPPED` / `NO_MEANINGFUL_BATCH` / `BLOCKED`.

## Publishing discipline
- Always add changelog entry for meaningful ship.
- Keep `/pages/now` and `/pages/projects` synced when priorities/projects change.
- Duplicate-content guardrail in place (avoid duplicate posts for same period/topic).

## TTS policy (channel-specific)
For replies to `bpw.civic` and `RECTANGL` (`<@238712621421821953>`):
- Use local speaker output only via `/home/brad/.openclaw/workspace/scripts/speak-local.sh`.
- Do **not** send Discord TTS media attachments.
- Prerequisites: `ELEVENLABS_API_KEY`, `ELEVENLABS_VOICE_ID`, `mpv`.

## Recent important infra/content notes
- Reliability widget script load + layout + emoji status compression shipped.
- External links now open in new tab and show external glyph (`↗`) in markdown-rendered content.
- New brand assets synced (PNG favicon/OG) with header currently using SVG logo source per preference.
- Cross-channel project intake template published at:
  - `/pages/cross-channel-project-update-template/`

## Current active projects reflected on site
- snowcrab.dev
- Hockeyclaw (NHL MVP)
- discord-claws
- Promptmark capture pipeline (pilot)
- OBS / Streaming infrastructure
```
