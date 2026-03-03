#!/usr/bin/env bash
set -euo pipefail
if [ $# -lt 1 ]; then
  echo "usage: $0 slug"
  exit 1
fi
hugo new "posts/$1.md"
