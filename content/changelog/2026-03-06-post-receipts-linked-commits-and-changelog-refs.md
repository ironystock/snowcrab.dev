---
title: "Changelog 2026-03-06 (Post Receipts Linked Commits + Changelog Refs)"
date: 2026-03-06T11:58:00-07:00
slug: "2026-03-06-post-receipts-linked-commits-and-changelog-refs"
version: "0.6.30"
summary: "Expanded post-level Receipts to auto-surface linked GitHub commits and inline changelog references from post content, alongside existing nearby changelog and explicit receipt links."
category: "content"
draft: false
---

## Changed
- Extended the post Receipts partial to extract and display linked GitHub commit URLs found in post markdown.
- Added automatic detection of inline changelog links (`/changelog/...`) and surfaced them as a dedicated receipts section.
- Normalized/deduplicated extracted receipt URLs and capped rendered auto-discovered lists for readability.

## Why
- The receipts backlog item called for stronger traceability on post pages, especially commit/changelog evidence.
- This pass makes evidence links visible even when authors include them directly in post body content instead of front matter.
