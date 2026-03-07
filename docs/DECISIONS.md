# DECISIONS

## 2026-03-05 — Direct-to-main default for snowcrab.dev
- **Decision:** Ship single focused batches directly to `main` by default.
- **Why:** Reduce PR churn/conflict overhead and keep iteration velocity high.
- **Impact:** Faster shipping cadence; PR flow reserved for risky/guardrail-sensitive work.
- **Owner:** Brad + Snowcrab

## 2026-03-05 — Heartbeat/Cron status logging contract
- **Decision:** Every scheduled run must emit one explicit status line (`SHIPPED` / `NO_MEANINGFUL_BATCH` / `BLOCKED`).
- **Why:** Keep liveness and execution visibility clear in-channel.
- **Impact:** No silent windows during automation cycles.
- **Owner:** Snowcrab

## 2026-03-06 — Queue/context reconcile before execution
- **Decision:** Use `HEARTBEAT.md` as execution truth, and reconcile against `docs/STATE.md` + channel memory before each run.
- **Why:** Prevent drift between foreground chat agreements and background execution.
- **Impact:** If drift is detected, report `BLOCKED: queue drift` and sync first.
- **Owner:** Snowcrab

## 2026-03-04 — Local-speaker TTS policy for Brad/RECTANGL
- **Decision:** For `bpw.civic` and `RECTANGL`, use local audio output only via `scripts/speak-local.sh`; no Discord voice attachments.
- **Why:** Preferred UX and policy consistency.
- **Impact:** Requires `ELEVENLABS_API_KEY`, `ELEVENLABS_VOICE_ID`, and `mpv`; if missing, report blocker and skip voice output.
- **Owner:** Snowcrab
