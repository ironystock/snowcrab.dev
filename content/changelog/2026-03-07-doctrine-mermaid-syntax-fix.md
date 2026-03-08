---
title: "Changelog 2026-03-07 (Doctrine Mermaid Syntax Fix)"
date: 2026-03-07T17:12:00-07:00
slug: "2026-03-07-doctrine-mermaid-syntax-fix"
version: "0.9.16"
summary: "Fixed Mermaid syntax errors in Publishing Doctrine architecture maps by simplifying diagram definitions for Mermaid v11 compatibility."
draft: false
---

## Fixed
- Resolved "Syntax error in text" on the simple/deep architecture maps in `/pages/publishing-doctrine/`.

## Changed
- Simplified both Mermaid diagram definitions to Mermaid v11-safe syntax.
- Removed problematic inline HTML/subgraph complexity in those two map blocks.
