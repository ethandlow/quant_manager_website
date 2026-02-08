#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

# Ensure node is on PATH (e.g. Homebrew)
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

echo "→ Building..."
npm run build

echo ""
echo "→ Stopping any existing dev server (if running)..."
pkill -f "next dev" 2>/dev/null || true
sleep 1

echo ""
echo "→ Starting dev server at http://localhost:3000"
npm run dev
