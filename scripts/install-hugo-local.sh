#!/usr/bin/env bash
set -euo pipefail

# Install pinned Hugo Extended binary to user-local bin without sudo.
# Default target: ~/.local/bin/hugo

VERSION="${1:-0.140.2}"
TARGET_DIR="${HOME}/.local/bin"
TARGET_BIN="${TARGET_DIR}/hugo"
ARCHIVE="hugo_extended_${VERSION}_linux-amd64.tar.gz"
URL="https://github.com/gohugoio/hugo/releases/download/v${VERSION}/${ARCHIVE}"

mkdir -p "${TARGET_DIR}"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "${TMP_DIR}"' EXIT

cd "${TMP_DIR}"
echo "Downloading ${URL}"
curl -fL -o "${ARCHIVE}" "${URL}"
tar -xzf "${ARCHIVE}" hugo
install -m 0755 hugo "${TARGET_BIN}"

"${TARGET_BIN}" version

echo "Installed Hugo to ${TARGET_BIN}"
