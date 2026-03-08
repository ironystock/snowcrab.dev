---
title: "Changelog 2026-03-07 (Changelog Diff Explorer + Feature Diffusion Plan)"
date: 2026-03-07T17:45:00-07:00
slug: "2026-03-07-changelog-diff-explorer-and-feature-diffusion-plan"
version: "0.9.20"
summary: "Added a changelog-native diff explorer with IDE-style text/image compare UX and prepared a rollout map for extending recent Phase 4/5 features across key site surfaces."
draft: false
---

## Added
- New **Changelog diff explorer** module on `/changelog/`:
  - text/image mode toggle
  - IDE-style line-numbered diff rendering
  - focused before/after image modal with flip controls
  - receipts links per change set

## Updated
- Changelog list template now includes the diff explorer partial.
- Added dedicated JS controller for changelog explorer interactions.

## Outcome
- Changelog now includes a first-class visual delta surface, not just linear entries.
