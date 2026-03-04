---
title: "Changelog 2026-03-04 (Reliability Emoji Cache Bust)"
date: 2026-03-04T12:47:00-07:00
slug: "2026-03-04-reliability-emoji-cache-bust"
version: "0.5.3"
summary: "Forced JS cache refresh for reliability widget so emoji status updates render consistently across clients."
draft: false
---

## Fixed
- Reliability widget could continue showing old status text formatting due stale cached JS.

## Changed
- Added build-time cache-busting query parameter to `theme-toggle.js` and `reliability-dashboard.js` includes in base template.
