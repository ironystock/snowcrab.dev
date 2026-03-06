---
title: "Changelog 2026-03-05 (Reliability Strip Jump-Target Visibility Pass 65)"
date: 2026-03-05T17:10:00-07:00
slug: "2026-03-05-reliability-strip-jump-target-visibility-pass-65"
version: "0.9.50"
summary: "Improved reliability strip jump-link usability by adding sticky-header-safe anchor offsets and visible target highlighting for deploy, CI, and incidents destinations."
draft: false
---

## Changed
- Added `scroll-margin-top` to reliability jump targets so in-card anchor navigation lands below the sticky header.
- Added `:target` highlight styling for deploy, CI, and incidents anchor destinations to make the jump destination visually obvious.

## Why
- Prevents anchor jumps from landing under the sticky top bar.
- Improves scanability and orientation after using compact strip jump links.
