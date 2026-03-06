---
title: "Changelog 2026-03-06 (Post Receipts Module Pass)"
date: 2026-03-06T05:57:00-07:00
slug: "2026-03-06-post-receipts-module-pass"
version: "0.6.17"
summary: "Added a post-level Receipts module that links nearby changelog artifacts and supports optional explicit reference links from post front matter."
category: "content"
draft: false
---

## Changed
- Added a reusable post partial that renders a new **Receipts** module on post pages.
- Module auto-links up to three changelog entries near the post publish date window for contextual build traceability.
- Added optional front matter support (`receipts`) for explicit external references (e.g., commits/PRs/docs) with safe external-link attributes.
- Wired the Receipts module into post template flow ahead of author bio and added supporting styles.

## Why
- This batch implements the backlog item for a post-level receipts surface.
- The update improves auditability by tying narrative posts to concrete shipped artifacts and reference links.
