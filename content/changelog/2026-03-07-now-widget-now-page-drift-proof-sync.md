---
title: "Changelog 2026-03-07 (Now Widget ↔ Now Page Drift-Proof Sync)"
date: 2026-03-07T15:41:00-07:00
slug: "2026-03-07-now-widget-now-page-drift-proof-sync"
version: "0.9.6"
summary: "Made homepage 'Now shipping' widget derive directly from /pages/now/ bullets + lastmod metadata to eliminate manual drift."
draft: false
---

## Fixed
- Removed independent/static homepage 'Now shipping' copy that drifted from `/pages/now/`.

## Changed
- Homepage widget now auto-syncs from `/pages/now/`:
  - shows last updated date from Now page
  - renders top active bullets directly from Now page content
- Added ops rule in heartbeat contract: no independent manual status copy for homepage Now widget.
