---
title: "Changelog 2026-03-04 (PNG Favicon 256 Added)"
date: 2026-03-04T23:54:00-07:00
slug: "2026-03-04-favicon-png-256-added"
version: "0.5.7"
summary: "Added 256x256 PNG favicon output and wired HTML/manifest to prefer PNG for broader browser compatibility."
draft: false
---

## Added
- New favicon asset: `/static/favicon-256.png` (256x256 PNG).

## Changed
- Base template now includes PNG favicon and uses PNG for apple-touch icon.
- Web manifest now lists PNG favicon first, with SVG as secondary icon.
