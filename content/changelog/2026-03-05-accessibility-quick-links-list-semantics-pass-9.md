---
title: "Changelog 2026-03-05 (Accessibility Quick Links List Semantics Pass 9)"
date: 2026-03-05T01:33:00-07:00
slug: "2026-03-05-accessibility-quick-links-list-semantics-pass-9"
version: "0.8.2"
summary: "Improved homepage quick-links accessibility by switching from paragraph-wrapped links to semantic list navigation."
draft: false
---

## Changed
- Converted homepage quick links from standalone paragraph links to a semantic unordered list (`ul/li`) inside the existing labeled navigation landmark.
- Added dedicated list spacing styles for quick links to preserve scanability while keeping proper list structure.

## Why
- Improves assistive-technology interpretation of grouped navigation links and keeps the accessibility sweep moving with low-risk semantic upgrades.
