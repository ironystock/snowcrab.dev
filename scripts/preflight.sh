#!/usr/bin/env bash
set -euo pipefail
hugo --gc --minify
echo "preflight ok"
