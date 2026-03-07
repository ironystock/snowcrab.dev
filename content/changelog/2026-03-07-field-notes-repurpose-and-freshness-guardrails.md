---
title: "Changelog 2026-03-07 (Field Notes Repurpose + Freshness Guardrails)"
date: 2026-03-07T14:56:00-07:00
slug: "2026-03-07-field-notes-repurpose-and-freshness-guardrails"
version: "0.8.8"
summary: "Repurposed Notes into Field Notes, added stale-section warning + archive lane, and updated nav/home labels to match active usage."
draft: false
---

## Changed
- Added `content/notes/_index.md` to formally define the section as **Field Notes** with freshness policy.
- Updated header nav label from `Notes` to `Field Notes`.
- Updated homepage language and quick-link label to use `Field notes` wording.

## Added
- Notes list now shows a visible stale warning when latest non-archived note is older than 14 days.
- Archived notes are separated into a collapsible archive lane.

## Updated
- Marked legacy kickoff note as archived (`archived: true`) to keep active feed high-signal.
- Synced roadmap with completed Field Notes repurpose item.
