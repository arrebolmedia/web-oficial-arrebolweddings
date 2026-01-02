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
    # Despliegue con Docker + Traefik usando script bash en el servidor
    Get-Content deploy-server.sh | ssh root@data.arrebolweddings.com "bash -s"
} else {
    # Despliegue con PM2 - Ejecutar comandos uno por uno
    Write-Host "  → Navegando al directorio..." -ForegroundColor Gray
    ssh root@data.arrebolweddings.com "cd /var/www/arrebolweddings.com && git pull origin master"
    
    Write-Host "  → Instalando dependencias..." -ForegroundColor Gray
    ssh root@data.arrebolweddings.com "cd /var/www/arrebolweddings.com && npm install --production"
    
    Write-Host "  → Building project..." -ForegroundColor Gray
    ssh root@data.arrebolweddings.com "cd /var/www/arrebolweddings.com && npm run build"
    
    Write-Host "  → Copiando archivos standalone..." -ForegroundColor Gray
    ssh root@data.arrebolweddings.com "cd /var/www/arrebolweddings.com && cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/"
    
    Write-Host "  → Reiniciando PM2..." -ForegroundColor Gray
    ssh root@data.arrebolweddings.com "cd /var/www/arrebolweddings.com/.next/standalone && pm2 restart arrebol-weddings || pm2 start server.js --name arrebol-weddings"
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
