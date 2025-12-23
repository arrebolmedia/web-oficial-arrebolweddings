# Script de Despliegue con Docker + Traefik - Arrebol Weddings
# Uso: .\deploy-docker.ps1 "mensaje del commit"

param(
    [Parameter(Mandatory=$false)]
    [string]$CommitMessage = "Update website"
)

Write-Host "`n🚀 Iniciando despliegue con Docker..." -ForegroundColor Cyan

# 1. Verificar cambios
Write-Host "`n📝 Verificando cambios..." -ForegroundColor Yellow
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "❌ No hay cambios para desplegar" -ForegroundColor Red
    exit 1
}

# 2. Agregar cambios al staging
Write-Host "`n📦 Agregando archivos..." -ForegroundColor Yellow
git add .

# 3. Hacer commit
Write-Host "`n💾 Haciendo commit: $CommitMessage" -ForegroundColor Yellow
git commit -m "$CommitMessage"

# 4. Push a GitHub
Write-Host "`n☁️  Subiendo a GitHub..." -ForegroundColor Yellow
git push origin master

# 5. Desplegar en servidor con Docker
Write-Host "`n🐳 Desplegando con Docker en servidor..." -ForegroundColor Yellow
ssh root@data.arrebolweddings.com @"
cd /var/www/arrebolweddings.com && \
echo '📥 Pulling latest changes...' && \
git pull origin master && \
echo '🛑 Deteniendo PM2 (si está corriendo)...' && \
pm2 stop arrebol-weddings 2>/dev/null || true && \
pm2 delete arrebol-weddings 2>/dev/null || true && \
echo '🐳 Construyendo imagen Docker...' && \
docker-compose build && \
echo '🔄 Reiniciando contenedor...' && \
docker-compose up -d && \
echo '🧹 Limpiando imágenes antiguas...' && \
docker image prune -f
"@

Write-Host "`n✅ ¡Despliegue completado exitosamente!" -ForegroundColor Green
Write-Host "🌍 Tu sitio está actualizado en producción con Traefik`n" -ForegroundColor Cyan
Write-Host "📊 Ver logs: ssh root@data.arrebolweddings.com 'docker logs -f arrebol-weddings'" -ForegroundColor Gray
