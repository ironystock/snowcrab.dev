---
title: "Changelog 2026-03-07 (Inline Expandable Git Commit Diffs)"
date: 2026-03-07T17:56:00-07:00
slug: "2026-03-07-changelog-inline-expandable-git-commit-diffs"
version: "0.9.21"
summary: "Updated changelog UX to support per-entry expandable commit diffs sourced directly from Git commit patches."
draft: false
---

## Added
- Per-entry expandable **View commit diff** section on `/changelog/` items.
- On expand, changelog now fetches and renders the Git commit patch (file-by-file) for that entry’s commit.

## Changed
- Commit diffs render inline with line-numbered add/remove/context styling.
- Diff loading is lazy (fetches only when entry is expanded).

## Notes
- Uses Hugo `.GitInfo.Hash` to bind each changelog entry to its source commit.
