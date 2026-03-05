---
title: "Changelog 2026-03-05 (Accessibility Changelog Filter Focus Retention Pass 55)"
date: 2026-03-05T14:40:00-07:00
slug: "2026-03-05-accessibility-changelog-filter-focus-retention-pass-55"
version: "0.9.40"
summary: "Improved changelog filter keyboard accessibility by preserving meaningful focus when filtering hides the currently focused result item."
draft: false
---

## Changed
- Added focus-state tracking before changelog filter updates.
- If filtering hides the currently focused list item, focus now moves to a stable announcement target (filter summary, with panel fallback).
- Preserved existing filter behavior, URL sync, and empty-state announcements.

## Why
- Prevents keyboard users from losing context when active focus target disappears after a filter change.
- Improves assistive-tech continuity by moving focus to a predictable status/region anchor.
