---
title: "Changelog 2026-03-05 (Accessibility Projects Dashboard List Semantics Pass 18)"
date: 2026-03-05T05:03:00-07:00
slug: "2026-03-05-accessibility-projects-dashboard-list-semantics-pass-18"
version: "0.9.3"
summary: "Improved projects dashboard semantics by converting custom role-based card lists to native list/article structure with cleaner accessibility defaults."
draft: false
---

## Changed
- Replaced the projects health dashboard custom `div` + ARIA list roles with native HTML list structure (`ul` + `li`).
- Wrapped each project card in semantic `article` elements while preserving heading associations.
- Updated CSS for the dashboard grid to support native list markup (`list-style: none`, zero padding, normalized list item spacing).

## Why
- Native list semantics are more robust and predictable across assistive technologies than role-mapped generic containers.
- Keeps the same visual layout while improving baseline accessibility and reducing ARIA complexity.
