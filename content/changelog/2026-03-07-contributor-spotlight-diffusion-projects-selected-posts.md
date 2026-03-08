---
title: "Changelog 2026-03-07 (Contributor Spotlight Diffusion: Projects + Selected Posts)"
date: 2026-03-07T18:24:00-07:00
slug: "2026-03-07-contributor-spotlight-diffusion-projects-selected-posts"
version: "0.9.8"
summary: "Diffused the contributor spotlight rail from homepage into Projects and selected posts via reusable layout wiring."
draft: false
category: "content"
---

## Changed
- Diffused the reusable **Contributor spotlight** rail onto `/pages/projects/`.
- Added opt-in post-level spotlight support in the single-post template via `show_contributor_spotlight: true`.
- Enabled spotlight rail on selected posts:
  - `/posts/openclaw-discord-reaction-controls-pilot/`
  - `/posts/claw-compressor-rollout-v0-1-1-quality-safety-update/`

## Why
- Completes the queued Roadmap Track B spotlight diffusion batch.
- Brings collaborator attribution and receipts context to high-signal decision and narrative surfaces.
- Keeps feature diffusion centralized in shared partials, reducing future drift.
