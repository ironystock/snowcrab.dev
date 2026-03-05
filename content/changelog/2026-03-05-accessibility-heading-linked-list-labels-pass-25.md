---
title: "Changelog 2026-03-05 (Accessibility Heading-Linked List Labels Pass 25)"
date: 2026-03-05T06:48:00-07:00
slug: "2026-03-05-accessibility-heading-linked-list-labels-pass-25"
version: "0.9.10"
summary: "Improved list semantics across homepage and list templates by replacing generic aria labels with heading-linked relationships for clearer assistive navigation context."
draft: false
---

## Changed
- Updated homepage latest-posts feed to use heading-linked labeling (`aria-labelledby="latest-posts-heading"`) instead of a generic list label.
- Removed redundant quick-links list labeling now that the parent nav is already heading-labeled.
- Updated list template entry region to use a dedicated heading-linked section label (`published-entries-heading`) and tied entry lists to that heading.

## Why
- Heading-linked labels provide stronger, reusable context across related regions.
- Reduces redundant ARIA text while improving structural consistency for screen-reader navigation.
