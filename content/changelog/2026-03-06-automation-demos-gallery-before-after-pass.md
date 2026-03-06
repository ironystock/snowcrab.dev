---
title: "Changelog 2026-03-06 (Automation Demos Gallery Before/After Pass)"
date: 2026-03-06T08:42:00-07:00
slug: "2026-03-06-automation-demos-gallery-before-after-pass"
version: "0.6.28"
summary: "Upgraded /pages/automation-demos into a structured gallery of before/after cards with embedded diff snippets and receipt links."
category: "content"
draft: false
---

## Changed
- Rebuilt `/pages/automation-demos` into a card-based gallery layout.
- Converted each demo into explicit **Before** and **After** columns for faster comparison.
- Added minimal embedded diff snippets per demo to show concrete behavior deltas.
- Standardized receipt lines (PR + changelog links) with safer external-link handling.
- Added dedicated gallery/card styles for layout, spacing, and scanability.

## Why
- This batch implements the backlog item for an automation demos gallery with before/after cards and diff snippets.
- The update makes automation outcomes easier to review and verify at a glance.
