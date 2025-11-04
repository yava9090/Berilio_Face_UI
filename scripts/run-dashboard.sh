#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/.."
APP_DIR="$ROOT_DIR/apps/admin-dashboard"
HOST="${DASHBOARD_HOST:-0.0.0.0}"
PORT="${DASHBOARD_PORT:-4300}"
MAPBOX_TOKEN_FILE="${MAPBOX_TOKEN_FILE:-$ROOT_DIR/../maps_key.txt}"

cd "$APP_DIR"

if [ -f "$MAPBOX_TOKEN_FILE" ]; then
    MAPBOX_TOKEN="$(tr -d '\r\n' < "$MAPBOX_TOKEN_FILE")"
    mkdir -p public/config
    cat > public/config/runtime-config.local.json <<EOF
{
    "mapboxAccessToken": "$MAPBOX_TOKEN"
}
EOF
    echo "Token de Mapbox cargado en public/config/runtime-config.local.json"
else
    echo "Aviso: no se encontró el token de Mapbox en $MAPBOX_TOKEN_FILE"
fi

npm install

if command -v lsof >/dev/null 2>&1; then
    PIDS=$(lsof -ti :"$PORT" 2>/dev/null || true)
    if [ -n "$PIDS" ]; then
        echo "Puerto $PORT ocupado. Terminando procesos: $PIDS"
        kill $PIDS || true
        sleep 1
        STILL_RUNNING=$(lsof -ti :"$PORT" 2>/dev/null || true)
        if [ -n "$STILL_RUNNING" ]; then
            echo "Forzando terminación de $STILL_RUNNING"
            kill -9 $STILL_RUNNING || true
            sleep 1
        fi
    fi
fi

npm run start -- --host "$HOST" --port "$PORT"
