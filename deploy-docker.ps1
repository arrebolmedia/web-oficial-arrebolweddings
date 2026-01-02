# Script de Despliegue con Docker + Traefik - Arrebol Weddings
# Este script asegura el despliegue correcto con Docker y Traefik
# Uso: .\deploy-docker.ps1 "mensaje del commit"

param(
    [Parameter(Mandatory=$false)]
    [string]$CommitMessage = "Update website",
    [Parameter(Mandatory=$false)]
    [switch]$SkipCache,
    [Parameter(Mandatory=$false)]
    [switch]$ViewLogs
)

Write-Host "`n🚀 Iniciando despliegue con Docker + Traefik..." -ForegroundColor Cyan

# 1. Verificar que existe docker-compose.yml
if (-not (Test-Path "docker-compose.yml")) {
    Write-Host "❌ No se encontró docker-compose.yml" -ForegroundColor Red
    Write-Host "Este script requiere Docker. Usa deploy.ps1 para PM2" -ForegroundColor Yellow
    exit 1
}

# 2. Verificar cambios
Write-Host "`n📝 Verificando cambios..." -ForegroundColor Yellow
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "❌ No hay cambios para desplegar" -ForegroundColor Red
    exit 1
}

# 3. Agregar cambios al staging
Write-Host "`n📦 Agregando archivos..." -ForegroundColor Yellow
git add .

# 4. Hacer commit
Write-Host "`n💾 Haciendo commit: $CommitMessage" -ForegroundColor Yellow
git commit -m "$CommitMessage"

# 5. Push a GitHub
Write-Host "`n☁️  Subiendo a GitHub..." -ForegroundColor Yellow
git push origin master

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al hacer push a GitHub" -ForegroundColor Red
    exit 1
}

# 6. Desplegar en servidor con Docker + Traefik
Write-Host "`n🐳 Desplegando con Docker en servidor..." -ForegroundColor Yellow

$buildFlag = if ($SkipCache) { "--no-cache" } else { "" }

ssh root@data.arrebolweddings.com @"
set -e
cd /var/www/arrebolweddings.com

echo '📥 Pulling latest changes from GitHub...'
git pull origin master

echo '🛑 Deteniendo PM2 si existe (migración Docker)...'
pm2 stop arrebol-weddings 2>/dev/null || true
pm2 delete arrebol-weddings 2>/dev/null || true

echo '🐳 Construyendo imagen Docker...'
docker-compose build $buildFlag

echo '🔄 Desplegando con Traefik...'
docker-compose down
docker-compose up -d

echo '⏳ Esperando que el contenedor inicie...'
sleep 5

echo '🔍 Verificando estado del contenedor...'
docker ps --filter name=arrebol-weddings --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'

echo '🧹 Limpiando imágenes antiguas...'
docker image prune -f

echo ''
echo '✅ Deploy completado exitosamente!'
echo '🌐 Sitio disponible en: https://arrebolweddings.com'
echo ''
"@

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n❌ Error durante el despliegue" -ForegroundColor Red
    Write-Host "Ver logs: ssh root@data.arrebolweddings.com 'docker logs arrebol-weddings'" -ForegroundColor Gray
    exit 1
}

Write-Host "`n✅ ¡Despliegue completado exitosamente!" -ForegroundColor Green
Write-Host "🌍 Tu sitio está actualizado en producción con Traefik" -ForegroundColor Cyan
Write-Host "🌐 URL: https://arrebolweddings.com`n" -ForegroundColor Green

Write-Host "📊 Comandos útiles:" -ForegroundColor Gray
Write-Host "   Ver logs:    ssh root@data.arrebolweddings.com 'docker logs -f arrebol-weddings'" -ForegroundColor Gray
Write-Host "   Ver estado:  ssh root@data.arrebolweddings.com 'docker ps'" -ForegroundColor Gray
Write-Host "   Reiniciar:   ssh root@data.arrebolweddings.com 'cd /var/www/arrebolweddings.com && docker-compose restart'`n" -ForegroundColor Gray

if ($ViewLogs) {
    Write-Host "`n📊 Mostrando logs..." -ForegroundColor Yellow
    ssh root@data.arrebolweddings.com "docker logs --tail=50 arrebol-weddings"
}
