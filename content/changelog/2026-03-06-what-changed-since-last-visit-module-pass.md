---
title: "Changelog 2026-03-06 (What Changed Since Last Visit Module Pass)"
date: 2026-03-06T06:27:00-07:00
slug: "2026-03-06-what-changed-since-last-visit-module-pass"
version: "0.6.19"
summary: "Added a homepage 'What changed since last visit' module backed by localStorage and latest changelog metadata to surface whether new updates landed since a reader’s previous visit."
category: "design"
draft: false
---

## Changed
- Added a new homepage module: **What changed since last visit**.
- Wired latest changelog metadata into module data attributes at render time.
- Added a client-side script that compares the latest changelog publish timestamp against the reader’s stored last-visit timestamp in `localStorage`.
- Module now reports one of three states: first tracked visit, new changes since last visit, or fully up to date.
- Persisted visit timestamps on page hide/unload and added small supporting styles for last-seen emphasis.

## Why
- This batch implements the backlog item for “what changed since last visit” using localStorage + changelog feed context.
- The update gives returning readers a quick status check without requiring manual changelog scanning.
