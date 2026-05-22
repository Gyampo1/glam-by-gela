#!/usr/bin/env bash
# Deploy Glam by Gela landing page to Apache (local hosting)
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
TARGET="${1:-/var/www/html/studio}"

echo "Deploying from $PROJECT_DIR to $TARGET ..."

mkdir -p "$TARGET"
cp -f "$PROJECT_DIR/index.html" "$TARGET/"
cp -r "$PROJECT_DIR/css" "$PROJECT_DIR/js" "$TARGET/"
if [ -d "$PROJECT_DIR/images" ]; then
  cp -r "$PROJECT_DIR/images" "$TARGET/"
fi

echo "Done."
echo ""
echo "  Local:   http://localhost/studio/"
echo "  Network: http://$(hostname -I 2>/dev/null | awk '{print $1}' || echo 'YOUR_IP')/studio/"
echo ""
echo "To use as homepage instead, run:"
echo "  $0 /var/www/html"
echo "  (backs up existing index.html first — edit script if needed)"
