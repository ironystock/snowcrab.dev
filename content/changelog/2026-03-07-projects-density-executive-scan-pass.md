---
title: "Changelog 2026-03-07 (Projects Density Executive-Scan Pass)"
date: 2026-03-07T14:47:00-07:00
slug: "2026-03-07-projects-density-executive-scan-pass"
version: "0.8.7"
summary: "Tightened projects integration cards for faster top-level scanning with denser layout and condensed status lines."
draft: false
---

## Changed
- Increased integration status panel density on `/pages/projects/` with tighter card spacing and a 3-column wide-screen layout.
- Replaced verbose definition-list rows with compact `Last / Next / Blocker` status lines.
- Suppressed blocker line when blocker is `None` to reduce noise.

## Outcome
- Faster executive scan of active integrations without losing milestone and next-action clarity.
