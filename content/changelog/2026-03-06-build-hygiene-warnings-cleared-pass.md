---
title: "Changelog 2026-03-06 (Build Hygiene Warnings Cleared Pass)"
date: 2026-03-06T13:38:00-07:00
slug: "2026-03-06-build-hygiene-warnings-cleared-pass"
version: "0.6.47"
summary: "Cleared remaining local Hugo build warnings by enabling intended raw HTML rendering and adding a home JSON output template, restoring clean warning-free build output."
category: "ops"
draft: false
---

## Changed
- Enabled Goldmark raw HTML rendering (`markup.goldmark.renderer.unsafe = true`) so authored HTML sections in content pages render as intended.
- Added a dedicated home JSON output template (`layouts/index.json.json`) for configured JSON home output.
- Re-ran local build validation (`hugo --gc --minify`) with warnings cleared.

## Why
- This batch completes the build-hygiene follow-up queue item by removing remaining non-blocking warnings and restoring clean build output.
