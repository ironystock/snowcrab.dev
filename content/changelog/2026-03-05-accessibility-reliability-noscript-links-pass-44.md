---
title: "Changelog 2026-03-05 (Accessibility Reliability No-JS Links Pass 44)"
date: 2026-03-05T11:56:00-07:00
slug: "2026-03-05-accessibility-reliability-noscript-links-pass-44"
version: "0.9.29"
summary: "Improved reliability-module no-JS fallback by replacing generic guidance text with direct links to latest deploy commits and CI runs on main."
draft: false
---

## Changed
- Updated reliability module `<noscript>` fallback to include direct actionable links:
  - latest deploy commits on `main`,
  - latest GitHub Actions runs for `main`.
- Replaced prior generic no-JS guidance text that referenced links not available in non-JS mode.

## Why
- Gives users a functional fallback path when dynamic reliability status cannot load.
- Reduces dead-end messaging and improves accessibility/operability without JavaScript.
