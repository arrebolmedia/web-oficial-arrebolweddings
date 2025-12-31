# Script de Despliegue Rápido - Arrebol Weddings
# Uso: .\deploy.ps1 "mensaje del commit"

param(
    [Parameter(Mandatory=$false)]
    [string]$CommitMessage = "Update website"
)

Write-Host "`n🚀 Iniciando despliegue..." -ForegroundColor Cyan

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

# 5. Desplegar en servidor
Write-Host "`n🌐 Desplegando en servidor..." -ForegroundColor Yellow
ssh root@data.arrebolweddings.com @"
cd /var/www/arrebolweddings.com && \
echo '📥 Pulling latest changes...' && \
git pull origin master && \
echo '🔨 Building project...' && \
npm run build && \
echo '� Copying static files for standalone...' && \
cp -r .next/static .next/standalone/.next/ && \
cp -r public .next/standalone/ && \
echo '�🔄 Restarting server...' && \cd .next/standalone && \pm2 restart arrebol-weddings
"@

Write-Host "`n✅ ¡Despliegue completado exitosamente!" -ForegroundColor Green
Write-Host "🌍 Tu sitio está actualizado en producción`n" -ForegroundColor Cyan
