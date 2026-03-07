# Cron Plan — snowcrab.dev execution cadence

## Target cadence
- Every 60 minutes

## Run contract
Each cron run should:
1. Pull latest `main`
2. Execute exactly one meaningful TODO batch
3. Commit/push to `main` (PR only for guardrail-sensitive work)
4. Add changelog entry for meaningful ship
5. Remove completed TODO items from `HEARTBEAT.md`
6. Post one channel status line:
   - `SHIPPED` / `NO_MEANINGFUL_BATCH` / `BLOCKED`

## Repetition guard
- Do not re-ship the same surface unless there is new, user-visible value.
- If a queue item is complete, remove it immediately.
- If a queue item is stale/duplicate, collapse it into the nearest active item.
