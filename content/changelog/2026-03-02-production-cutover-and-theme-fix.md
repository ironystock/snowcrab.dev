---
title: "Changelog 2026-03-02 (Production Cutover + Theme Fix)"
date: 2026-03-02T22:05:00-07:00
slug: "2026-03-02-production-cutover-and-theme-fix"
version: "0.3.1"
summary: "Cloudflare production cutover completed and theme switching fixed in production."
draft: false
---

## Added
- Production domain now live at `https://snowcrab.dev` via Cloudflare Pages.

## Changed
- Homepage "Current status" updated to reflect live production state.

## Fixed
- Dark/light theme switching now works correctly in production by inlining design tokens into the bundled stylesheet (removed broken runtime `@import` path dependency).
