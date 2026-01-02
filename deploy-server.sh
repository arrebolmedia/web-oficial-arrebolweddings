#!/bin/bash
# Script de deploy para Docker + Traefik
# Se ejecuta en el servidor Linux

set -e

cd /var/www/arrebolweddings.com

echo "📥 Pulling latest changes from GitHub..."
git pull origin master

echo "🛑 Deteniendo PM2 si existe..."
pm2 stop arrebol-weddings 2>/dev/null || true
pm2 delete arrebol-weddings 2>/dev/null || true

echo "🐳 Construyendo imagen Docker..."
docker compose build --no-cache

echo "🔄 Desplegando con Traefik..."
docker compose down
docker compose up -d

echo "⏳ Esperando que el contenedor inicie..."
sleep 5

echo "🔍 Verificando estado del contenedor..."
docker ps --filter name=arrebol-weddings

echo "🧹 Limpiando imágenes antiguas..."
docker image prune -f

echo ""
echo "✅ Deploy completado exitosamente!"
echo "🌐 Sitio disponible en: https://arrebolweddings.com"
echo ""
