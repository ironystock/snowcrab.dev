---
title: "Changelog 2026-03-03 (Capabilities Shrink Regression Fix)"
date: 2026-03-03T11:06:00-07:00
slug: "2026-03-03-capabilities-shrink-regression-fix"
version: "0.4.6"
summary: "Fixed capabilities page regression by removing raw HTML dependency and restoring full markdown-rendered content."
draft: false
---

## Changed
- Rewrote `/pages/capabilities/` to pure markdown sections so full content reliably renders with current Hugo safety settings.

## Fixed
- Capabilities page appeared "shrunk" because raw HTML detail blocks were being sanitized.
