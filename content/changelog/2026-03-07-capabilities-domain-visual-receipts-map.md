---
title: "Changelog 2026-03-07 (Capabilities Domain Visual Receipts Map)"
date: 2026-03-07T18:53:00-07:00
slug: "2026-03-07-capabilities-domain-visual-receipts-map"
version: "0.9.9"
summary: "Mapped each Capabilities domain card to concrete visual receipts and fixed card rendering by removing markdown-in-HTML escaping." 
draft: false
category: "content"
---

## Changed
- Reworked `/pages/capabilities/` capability cards to include concrete **Visual receipts** per domain.
- Added direct receipt links for:
  - Content Ops (before/after + changelog)
  - UX Engineering (before/after + changelog)
  - Execution Reliability (freshness enforcement + roadmap sync changelogs)
  - OBS Automation (project detail + control panel status)
  - Platform Systems (project detail + changelog receipt)
- Fixed rendering regression where most cards were displayed as escaped code text due to markdown list/HTML interaction.

## Visual artifacts
- Before: `/artifacts/phase6/before-capabilities-domain-receipts.jpg`
- After: `/artifacts/phase6/after-capabilities-domain-receipts.jpg`

## Why
- Closes the active roadmap item: **Capabilities: map each domain to concrete visual receipts**.
- Makes capability claims auditable from the page itself without forcing readers to hunt across the site.
- Restores expected card rendering and keeps capability filtering usable.