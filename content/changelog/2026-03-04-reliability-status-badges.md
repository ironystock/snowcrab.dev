---
title: "Changelog 2026-03-04 (Reliability Status Badges)"
date: 2026-03-04T01:35:00-07:00
slug: "2026-03-04-reliability-status-badges"
version: "0.3.46"
summary: "Added visual status badges for reliability signals so deploy/CI state is easier to parse at a glance."
draft: false
---

## Changed
- Added reusable reliability status badge styles (`success`, `warn`, `bad`) in `assets/css/main.css`.
- Updated reliability dashboard markup to use styled status spans.
- Updated reliability dashboard JS to assign status tone classes based on API outcomes and CI conclusion/state.

## Why
- Improve scanability of operational health without requiring readers to parse raw status text.
