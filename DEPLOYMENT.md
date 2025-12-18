# Deployment Guide - Arrebol Weddings

## Servidor de Producción
**Host:** data.arrebolweddings.com  
**Plataforma:** Digital Ocean  
**Conexión:** SSH  
**Repositorio:** https://github.com/arrebolmedia/web-oficial-arrebolweddings.git

---

## 🚀 Despliegue Rápido (RECOMENDADO)

### Método Automatizado con Git

**Usa el script `deploy.ps1` para desplegar en 1 minuto:**

```powershell
# Con mensaje de commit personalizado
.\deploy.ps1 "Descripción de los cambios"

# Con mensaje por defecto
.\deploy.ps1
```

**El script hace:**
1. ✅ Commit de cambios locales
2. ☁️ Push a GitHub
3. 🌐 Pull en servidor
4. 🔨 Build en servidor (Next.js)
5. 🔄 Reinicio de PM2

**Ventajas:**
- Solo sube código fuente (KB en lugar de 200MB)
- Build optimizado en servidor
- Historial en Git
- ~60 segundos total

---

## 📋 Proceso Manual (Backup)

### 1. Commit y Push Local
```bash
git add .
git commit -m "Descripción de cambios"
git push origin master
```

### 2. Desplegar en Servidor
```bash
ssh root@data.arrebolweddings.com "cd /var/www/arrebolweddings.com && git pull origin master && npm run build && pm2 restart arrebol-weddings"
```

---

## 🔧 Método Alternativo (Sin Git)

### 1. Build Local
```bash
cd c:\Projects\Web-Arrebol\arrebol-weddings-site
npm run build
```

### 2. Subir Archivos al Servidor
Desde tu máquina local, usar rsync o scp para transferir los archivos:

```bash
# Opción 1: Rsync (recomendado - solo sube cambios)
rsync -avz --delete .next/ root@data.arrebolweddings.com:/var/www/arrebolweddings.com/.next/
rsync -avz --delete public/ root@data.arrebolweddings.com:/var/www/arrebolweddings.com/public/
rsync -avz package*.json root@data.arrebolweddings.com:/var/www/arrebolweddings.com/

# Opción 2: SCP (sube todo)
scp -r .next root@data.arrebolweddings.com:/var/www/arrebolweddings.com/
scp -r public root@data.arrebolweddings.com:/var/www/arrebolweddings.com/
```

### 4. Reiniciar la Aplicación en el Servidor
Una vez conectado por SSH:

```bash
cd /var/www/arrebolweddings.com
npm install --production
pm2 restart arrebol-weddings
# O reiniciar todos los procesos:
# pm2 restart all
```

### 5. Verificar que está funcionando
```bash
pm2 status
pm2 logs arrebol-weddings
```

## Script de Despliegue Rápido
Crear un archivo `deploy.sh` en la raíz del proyecto:

```bash
#!/bin/bash
echo "🚀 Iniciando despliegue..."
npm run build
echo "📦 Build completado, subiendo archivos..."
rsync -avz --delete .next/ root@data.arrebolweddings.com:/var/www/arrebolweddings.com/.next/
rsync -avz --delete public/ root@data.arrebolweddings.com:/var/www/arrebolweddings.com/public/
rsync -avz package*.json root@data.arrebolweddings.com:/var/www/arrebolweddings.com/
echo "🔄 Reiniciando servidor..."
ssh root@data.arrebolweddings.com "cd /var/www/arrebolweddings.com && npm install --production && pm2 restart arrebol-weddings"
echo "✅ Despliegue completado!"
```

## Notas Importantes
- El build debe completarse sin errores antes de desplegar
- Siempre hacer backup antes de desplegar cambios críticos
- Verificar que las variables de entorno estén configuradas en el servidor
- El servidor usa Node.js con PM2 para mantener la aplicación corriendo

## Variables de Entorno
Asegurarse de que el archivo `.env.local` esté configurado en el servidor con:
- Credenciales de email (SMTP)
- Cualquier API key necesaria

## Rollback
Si algo sale mal:
```bash
ssh root@data.arrebolweddings.com
cd /var/www/arrebolweddings.com
git pull  # Si usas Git
pm2 restart arrebol-weddings
```

## Verificar Estado
```bash
# Ver logs en tiempo real
ssh root@data.arrebolweddings.com "pm2 logs arrebol-weddings"

# Ver estado de todos los procesos
ssh root@data.arrebolweddings.com "pm2 status"
```
