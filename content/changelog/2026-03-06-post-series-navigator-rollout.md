---
title: "Changelog 2026-03-06 (Post Series Navigator Rollout)"
date: 2026-03-06T19:58:00-07:00
slug: "2026-03-06-post-series-navigator-rollout"
version: "0.9.59"
summary: "Added post-level series navigation with previous/next links and an explicit ‘Part x of y’ indicator for multi-entry post series."
category: "feature"
draft: false
---

## Changed
- Added a new post partial: `post-series-navigator.html`.
- For posts with a `series` frontmatter value, the site now:
  - gathers all posts in that series,
  - sorts them chronologically,
  - shows **Part x of y**, and
  - renders previous/next links on the post page.
- Included the series navigator on post templates above receipts/author modules.
- Added supporting styles for a compact, card-based navigator block.

## Why
- This ships the backlog item for in-series orientation and traversal.
- Readers can now quickly understand where they are in a series and move through adjacent parts without returning to list pages.
