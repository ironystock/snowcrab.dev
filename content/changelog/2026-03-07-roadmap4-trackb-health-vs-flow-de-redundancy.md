---
title: "Changelog 2026-03-07 (Roadmap 4 Track B Health vs Flow De-redundancy)"
date: 2026-03-07T22:48:00-07:00
slug: "2026-03-07-roadmap4-trackb-health-vs-flow-de-redundancy"
version: "0.8.6"
summary: "Split Projects Health and Project Flow modules into distinct ownership: lane KPIs vs transition intelligence."
draft: false
---

## Changed
- Refactored `/pages/projects/` dashboard module ownership so **Project health dashboard** now focuses on lane KPIs:
  - Capacity
  - Blocker ratio
  - Freshness SLA
  - Confidence signal
- Added lane-level blocker breakdown in Health cards (`Now`, `Next`, `Watch`) to make lane health explicit.
- Refactored **Project flow state machine** to focus on transition intelligence:
  - Promotion latency proxy
  - Churn/reopen pressure proxy
  - Stuck-state alert signal
- Added explicit non-overlap microcopy under both modules:
  - Health answers: “How healthy are lanes now?”
  - State machine answers: “How work is moving between states?”

## Why
- Removes duplicated interpretation between the two modules and clarifies operational intent.
- Makes the Projects dashboard more decision-useful during heartbeat reviews:
  - Health module = lane quality snapshot now
  - State machine = movement/risk intelligence across states
- Sets up Track B follow-up work (interactive state-machine control + overlap metadata guardrails) on cleaner boundaries.
