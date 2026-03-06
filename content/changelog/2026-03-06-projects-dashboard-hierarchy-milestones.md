---
title: "Projects dashboard: milestone-forward hierarchy + semantic status details"
date: 2026-03-06T04:50:00-07:00
categories: ["design", "reliability"]
summary: "Improved /pages/projects scanability and accessibility by surfacing milestone context and switching integration cards to semantic definition-list details."
---

Shipped a focused hierarchy pass for `/pages/projects`:

- Added explicit `milestone` data to each integration item so progress state is visible at a glance.
- Upgraded integration cards to a clearer structure:
  - named card headers with stable `aria-labelledby`
  - milestone callout row
  - semantic `<dl>` details for **Last update**, **Next action**, and **Blocker**
- Updated styles to improve visual grouping and make status details easier to scan without sacrificing card density.

Result: the projects control panel now communicates **status + milestone + action + blocker** in one pass, with cleaner semantic markup for assistive tech.
