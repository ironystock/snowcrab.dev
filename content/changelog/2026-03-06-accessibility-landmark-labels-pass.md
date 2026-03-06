---
title: "Changelog 2026-03-06 (Accessibility: Landmark Labeling Pass)"
date: 2026-03-06T06:03:00-07:00
slug: "2026-03-06-accessibility-landmark-labels-pass"
version: "0.9.41"
summary: "Improved semantic landmark labeling for header/main/footer regions to make page navigation clearer in assistive tech landmark rotors."
category: "design"
draft: false
---

## Changed
- Added an explicit landmark label on the global header (`aria-labelledby="site-brand-name"`) and anchored it to the brand text.
- Added an explicit accessible label on the home brand link (`aria-label="Snowcrab home"`) for clearer SR announcement intent.
- Added `aria-label="Main content"` on the main region for consistent landmark naming.
- Added `aria-labelledby="footer-links-heading"` on the footer landmark to improve region discoverability in screen-reader landmark navigation.

## Why
- Accessibility sweep target for this batch was semantic landmarks and screen-reader region wayfinding.
- These changes improve navigation context without changing visual layout.
