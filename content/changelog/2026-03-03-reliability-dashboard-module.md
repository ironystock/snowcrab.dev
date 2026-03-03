---
title: "Changelog 2026-03-03 (Reliability Dashboard Module)"
date: 2026-03-03T02:23:00-07:00
slug: "2026-03-03-reliability-dashboard-module"
version: "0.4.7"
summary: "Added a homepage reliability module showing last deploy proxy, CI status, and recent incident/fix signals."
draft: false
---

## Added
- New homepage **Reliability** card/module.
- Last deploy proxy indicator (latest commit timestamp on `main`).
- CI status indicator from latest GitHub Actions run on `main`.
- Recent incidents/fixes list sourced from changelog RSS title signals.

## Files
- `layouts/index.html`
- `layouts/_default/baseof.html`
- `static/js/reliability-dashboard.js`
- `assets/css/main.css`

## Why
- Provides lightweight operational visibility directly on the homepage.
