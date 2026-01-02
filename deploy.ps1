# Script de Despliegue Automático - Arrebol Weddings
# Detecta si usa Docker+Traefik o PM2 y despliega correctamente
# Uso: .\deploy.ps1 "mensaje del commit"

param(
    [Parameter(Mandatory=$false)]
    [string]$CommitMessage = "Update website",
    [Parameter(Mandatory=$false)]
    [switch]$ForceDocker
)

Write-Host "`n🚀 Iniciando despliegue..." -ForegroundColor Cyan

# 1. Verificar cambios
Write-Host "`n📝 Verificando cambios..." -ForegroundColor Yellow
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "❌ No hay cambios para desplegar" -ForegroundColor Red
    exit 1
}

# 2. Verificar si existe docker-compose.yml
$useDocker = $ForceDocker -or (Test-Path "docker-compose.yml")
if ($useDocker) {
    Write-Host "🐳 Modo: Docker + Traefik" -ForegroundColor Magenta
} else {
    Write-Host "⚙️  Modo: PM2" -ForegroundColor Magenta
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

# 6. Desplegar en servidor
Write-Host "`n🌐 Desplegando en servidor..." -ForegroundColor Yellow

if ($useDocker) {
    # Despliegue con Docker + Traefik
    $deployScript = @'
cd /var/www/arrebolweddings.com
echo '📥 Pulling latest changes...'
git pull origin master
echo '🛑 Deteniendo PM2 si existe...'
pm2 stop arrebol-weddings 2>/dev/null || true
pm2 delete arrebol-weddings 2>/dev/null || true
echo '🐳 Construyendo nueva imagen Docker...'
docker compose build --no-cache
echo '🔄 Desplegando con Traefik...'
docker compose down
docker compose up -d
echo '🧹 Limpiando imágenes antiguas...'
docker image prune -f
echo '✅ Deploy completado!'
docker ps | grep arrebol
'@
    ssh root@data.arrebolweddings.com $deployScript
} else {
    # Despliegue con PM2
    $deployScript = @'
cd /var/www/arrebolweddings.com
echo '📥 Pulling latest changes...'
git pull origin master
echo '📦 Instalando dependencias...'
npm install --production
echo '🔨 Building project...'
npm run build
echo '📋 Copiando archivos para standalone...'
cp -r .next/static .next/standalone/.next/
cp -r public .next/standalone/
echo '🔄 Restarting PM2...'
cd .next/standalone
pm2 restart arrebol-weddings || pm2 start server.js --name arrebol-weddings
echo '✅ Deploy completado!'
pm2 status
'@
    ssh root@data.arrebolweddings.com $deployScript
}

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n❌ Error durante el despliegue" -ForegroundColor Red
    Write-Host "Ver logs: ssh root@data.arrebolweddings.com 'docker logs arrebol-weddings'" -ForegroundColor Gray
    exit 1
}

Write-Host "`n✅ ¡Despliegue completado exitosamente!" -ForegroundColor Green
Write-Host "🌍 Tu sitio está actualizado en producción`n" -ForegroundColor Cyan

if ($useDocker) {
    Write-Host "📊 Ver logs: ssh root@data.arrebolweddings.com 'docker logs -f arrebol-weddings'" -ForegroundColor Gray
} else {
    Write-Host "📊 Ver logs: ssh root@data.arrebolweddings.com 'pm2 logs arrebol-weddings'" -ForegroundColor Gray
}
