---
title: "Changelog 2026-03-05 (Reliability Strip Jump Links Pass 64)"
date: 2026-03-05T16:55:00-07:00
slug: "2026-03-05-reliability-strip-jump-links-pass-64"
version: "0.9.49"
summary: "Improved reliability dashboard scanability by turning compact strip chips into in-card jump links that move directly to deploy, CI, and incidents detail rows."
draft: false
---

## Changed
- Converted compact reliability strip chips from static text spans into anchor links.
- Added in-card anchor targets for:
  - deploy row,
  - CI row,
  - incidents section.
- Added lightweight strip-link styling to preserve pill visuals while enabling clear hover/focus link behavior.

## Why
- Speeds navigation from high-level strip status to detailed context without extra scrolling.
- Improves keyboard ergonomics by making compact status chips actionable navigation controls.
