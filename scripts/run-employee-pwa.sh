#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/.."
APP_DIR="$ROOT_DIR/apps/employee-pwa"
HOST="${EMPLOYEE_PWA_HOST:-0.0.0.0}"
PORT="${EMPLOYEE_PWA_PORT:-4301}"

cd "$APP_DIR"

echo "Instalando dependencias del Employee PWA..."
npm install

if command -v fuser >/dev/null 2>&1; then
    if fuser "$PORT"/tcp >/dev/null 2>&1; then
        echo "Terminando procesos en el puerto $PORT..."
        fuser -k "${PORT}"/tcp || true
        sleep 1
    fi
fi

echo "Iniciando Employee PWA en http://$HOST:$PORT ..."
npm run start -- --host "$HOST" --port "$PORT"
