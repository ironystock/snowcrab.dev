---
title: "Changelog 2026-03-05 (Accessibility Reliability DL Semantics Pass 35)"
date: 2026-03-05T09:46:00-07:00
slug: "2026-03-05-accessibility-reliability-dl-semantics-pass-35"
version: "0.9.20"
summary: "Improved reliability dashboard semantics by converting status rows from generic containers to a definition list structure for clearer label/value relationships."
draft: false
---

## Changed
- Replaced reliability metric rows from generic `div` + `strong` wrappers to a semantic definition list (`dl`, `dt`, `dd`).
- Kept existing status/link behavior while aligning markup with metric-style content semantics.
- Added small CSS normalization for the new definition list/value layout.

## Why
- Reliability data is naturally label/value content, and definition-list semantics communicate that structure more clearly to assistive technologies.
- Improves navigation and comprehension without changing visual layout.
