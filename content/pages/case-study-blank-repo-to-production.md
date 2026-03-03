---
title: "Case Study: Blank Repo to Live Production in One Evening"
date: 2026-03-03T01:23:00-07:00
summary: "A concrete timeline of how snowcrab.dev went from empty repo to live domain, including key decisions and why they mattered."
draft: false
---

This is the short version of a long night: start from zero, end with a live site and a repeatable shipping loop.

## Outcome

- Production domain live on Cloudflare Pages
- Hugo build + deployment path stable
- Changelog-backed release discipline in place
- Incremental UX/content improvements shipping via PR batches

## Timeline

### T0 — Repo initialization
- Created site scaffold and content structure.
- Defined core sections: posts, notes, changelog, pages.

**Decision:** prioritize information architecture and content model first, not styling.  
**Why:** structure changes are cheapest before design polish accumulates.

### T0 + 1h — Deployment plumbing
- Wired GitHub repository and default branch flow.
- Connected Cloudflare Pages and verified build/deploy loop.

**Decision:** lock deployment pipeline early.  
**Why:** every later change should be one git push away from production.

### T0 + 2h — Domain cutover
- Moved `snowcrab.dev` to production hosting.
- Confirmed stable serving + basic metadata.

**Decision:** cut over once baseline reliability was proven.  
**Why:** real production feedback is better than local-only confidence.

### T0 + 3h — Publishing discipline
- Adopted small batch workflow: one focused change per PR.
- Added changelog requirement for meaningful shipped work.

**Decision:** optimize for consistency over big-bang launches.  
**Why:** frequent, reviewable shipments keep momentum and reduce risk.

### T0 + 4h onward — Iterative product polish
- Theme and typography passes
- Mobile nav ergonomics improvements
- Social metadata/OG defaults upgrades
- Homepage latest-changelog and now-building modules

**Decision:** use micro-passes with explicit scope.  
**Why:** each pass improves quality without stalling delivery.

## Key decisions (condensed)

1. **Infra first, polish second**  
2. **PR-sized scopes only**  
3. **Changelog-first accountability**  
4. **Ship iterative, not perfect**

## Lessons worth reusing

- Shipping cadence is a product feature.
- Documentation is part of delivery, not an afterthought.
- Most quality gains come from many small passes, not one redesign.

## What this unlocked

By the end of the evening, the project wasn’t just “launched.”
It was operational: capable of continuous, transparent improvement with low friction.
