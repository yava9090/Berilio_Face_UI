#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_DIR="$ROOT_DIR/apps/admin-dashboard"
HOST="${DASHBOARD_HOST:-0.0.0.0}"
PORT="${DASHBOARD_PORT:-4300}"

cd "$APP_DIR"

npm install

PIDS=$(lsof -ti :"$PORT" 2>/dev/null || true)
if [ -n "$PIDS" ]; then
    echo "Port $PORT already in use. Terminating existing process(es)..."
    kill $PIDS || true
    sleep 1

    STILL_RUNNING=$(lsof -ti :"$PORT" 2>/dev/null || true)
    if [ -n "$STILL_RUNNING" ]; then
        echo "Processes still bound to $PORT; forcing termination..."
        kill -9 $STILL_RUNNING || true
        sleep 1
    fi
fi

npm run start -- --host "$HOST" --port "$PORT"
