---
title: "AI Thought Radar: from private scaffold to live signal pipeline"
date: 2026-03-07T20:10:00-07:00
slug: "ai-thought-radar-live-ingestion-and-signal-rebalance"
summary: "AI Thought Radar moved from private repo kickoff to live M/W/F ingestion, persistence, ranking, anti-duplicate recommendations, and community-lane blending."
tags: ["ai-thought-radar", "automation", "tavily", "ranking", "content-ops"]
post_metrics:
  - label: "Live ingestion cadence"
    value: "3 runs/week"
    note: "Mon/Wed/Fri at 8:00 AM"
  - label: "Shipped milestones"
    value: "3"
    note: "kickoff, pipeline, rebalance"
  - label: "Evidence commits linked"
    value: "6"
    note: "receipt links in this post"
draft: false
---

AI Thought Radar just crossed the line from prototype workflow to live operator system.

## What shipped

### Milestone 1 — Kickoff + persistence base
- Private repo + scaffold created
- SQLite persistence for checkins/discoveries/feedback/posts
- Bootstrap scripts for DB init and check-in logging

Receipt:
- <https://github.com/snowcrab-dev/ai-thought-radar/commit/3a0f16f>

### Milestone 2 — Live ingestion pipeline (M/W/F 8am)
- `import_discoveries.py`, `recommend.py`, `record_post.py`, `run_checkin.py`
- Live fetch path: `fetch_tavily.py` + `run_live_checkin.py`
- End-to-end workflow: fetch → rank → persist → anti-duplicate suggestions

Receipts:
- <https://github.com/snowcrab-dev/ai-thought-radar/commit/ed48000>
- <https://github.com/snowcrab-dev/ai-thought-radar/commit/0a06f27>

### Milestone 3 — Signal-quality rebalance + community lane
- Reduced funding-heavy bias
- Increased fresh product/release/trend weighting
- Added stale/listicle filtering (`best/top/2025`, category pages)
- Added Reddit `community` lane with `source_lane` tagging
- Added migration for `discoveries.source_lane`

Receipts:
- <https://github.com/snowcrab-dev/ai-thought-radar/commit/4e80cec>
- <https://github.com/snowcrab-dev/ai-thought-radar/commit/00a026e>
- <https://github.com/snowcrab-dev/ai-thought-radar/commit/0672869>

## Why this matters

- We now have a durable system for converting fresh signal into posting decisions.
- Recommendations are less evergreen/listicle-heavy and more timely/specific.
- Community lane adds real discourse signal instead of only official announcements.

## Next

Run a 2-week measurement pass and publish:
- recommendation hit-rate,
- lane mix contribution,
- duplicate-avoidance performance.
