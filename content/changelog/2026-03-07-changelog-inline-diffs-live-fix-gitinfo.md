---
title: "Changelog 2026-03-07 (Changelog Inline Diffs Live Fix: GitInfo + Demo Removal)"
date: 2026-03-07T18:10:00-07:00
slug: "2026-03-07-changelog-inline-diffs-live-fix-gitinfo"
version: "0.9.25"
summary: "Fixed live changelog inline commit diffs by enabling Hugo GitInfo and removed the legacy top diff demo so changelog diff UX is per-entry as intended."
draft: false
---

## Fixed
- Live changelog did not show per-entry inline commit diffs because `.GitInfo` was unavailable in build output.

## Changed
- Enabled Hugo `enableGitInfo = true`.
- Removed legacy top-of-page changelog diff demo from `/changelog/`.
- Kept per-entry expandable commit diffs as the canonical changelog diff UX.
