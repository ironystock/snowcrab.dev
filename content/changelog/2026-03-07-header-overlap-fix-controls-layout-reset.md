---
title: "Changelog 2026-03-07 (Header Overlap Fix + Controls Layout Reset)"
date: 2026-03-07T17:24:00-07:00
slug: "2026-03-07-header-overlap-fix-controls-layout-reset"
version: "0.9.18"
summary: "Fixed header control overlap by replacing margin-hacked positioning with a dedicated responsive controls container."
draft: false
---

## Fixed
- Resolved header control overlap/collision between Search, Install app, and Theme buttons.

## Changed
- Added dedicated `.header-actions` container in header layout.
- Removed hardcoded `margin-right` positioning hacks on individual controls.
- Updated responsive behavior so controls stack cleanly on smaller breakpoints without overlap.

## Outcome
- Header controls remain functional and readable across viewport widths.
