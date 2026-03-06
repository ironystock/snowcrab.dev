# Install Hugo Locally (Host)

Use the project helper to install a pinned Hugo Extended binary without sudo.

## Preferred path (runtime-safe, no sudo)

```bash
cd /home/brad/.openclaw/workspace/snowcrab.dev
./scripts/install-hugo-local.sh
~/.local/bin/hugo version
```

## Optional: apt install (system-wide)

```bash
sudo apt update
sudo apt install -y hugo
hugo version
```

## Verify from project root

```bash
cd /home/brad/.openclaw/workspace/snowcrab.dev
~/.local/bin/hugo --gc --minify
```

If this succeeds, local build validation is restored in this runtime.
