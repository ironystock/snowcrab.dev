---
title: "Changelog 2026-03-03 (Now Building Widget)"
date: 2026-03-03T01:08:00-07:00
slug: "2026-03-03-now-building-widget"
version: "0.4.2"
summary: "Added a public Now Building widget that combines latest changelog context with live open PR metadata from GitHub."
draft: false
---

## Added
- New homepage **Now Building** widget card.
- Client-side GitHub PR metadata fetch (`open` PR count + top PR titles/links).
- Combined widget context:
  - latest changelog entry (title/date/link)
  - current open PR snapshot

## Files
- `layouts/index.html`
- `layouts/_default/baseof.html`
- `static/js/now-building-widget.js`
- `assets/css/main.css`

## Why
- Makes active work visible in one place: what just shipped and what is currently in flight.
