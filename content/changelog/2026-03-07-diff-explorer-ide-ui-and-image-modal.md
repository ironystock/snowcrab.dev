---
title: "Changelog 2026-03-07 (Diff Explorer IDE UI + Image Modal + Artifact Pair Fix)"
date: 2026-03-07T17:16:00-07:00
slug: "2026-03-07-diff-explorer-ide-ui-and-image-modal"
version: "0.9.17"
summary: "Upgraded diff explorer to IDE-style code diffs, added focused image modal with before/after flip controls, and replaced duplicate image-pair demos with verified distinct artifact pairs."
draft: false
---

## Fixed
- Verified and corrected duplicate image-pair outputs in explorer dataset (two demo pairs were identical files).
- Replaced those with distinct before/after artifact sets.

## Added
- IDE-styled diff viewer with line numbers and add/remove highlighting.
- Focused image modal for before/after inspection.
- In-modal flip controls (`Before` / `After`) plus keyboard arrows.

## Changed
- Image tiles no longer navigate away to raw files on click; they open in the modal compare surface.
