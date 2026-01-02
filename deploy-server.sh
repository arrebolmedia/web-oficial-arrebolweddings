#!/bin/bash
set -e

cd /var/www/arrebolweddings.com
echo 'Pull changes'
git pull origin master
pm2 stop arrebol-weddings 2>/dev/null || true
pm2 delete arrebol-weddings 2>/dev/null || true
docker compose build --no-cache
docker compose down
docker compose up -d
sleep 5
docker ps | grep arrebol
docker image prune -f
echo 'Deploy done'