# 🚀 Guía de Scripts de Deploy - Docker + Traefik

## ⚠️ IMPORTANTE: Cuál Script Usar

Tu servidor usa **Docker + Traefik**, NO PM2. Por lo tanto:

### ✅ USA ESTE:
```powershell
.\deploy.ps1 "Tu mensaje de commit"
```
El script ahora **detecta automáticamente** que usas Docker (por el archivo `docker-compose.yml`) y ejecuta el despliegue correcto con Traefik.

### O también puedes usar:
```powershell
.\deploy-docker.ps1 "Tu mensaje de commit"
```
Este script está específicamente diseñado para Docker + Traefik con más opciones.

---

## 🔍 ¿Por qué fallaba antes?

El script `deploy.ps1` original estaba configurado para **PM2** (Process Manager), pero tu infraestructura usa:
- **Docker** para containerización
- **Traefik** como proxy reverso con SSL automático
- **Red traefik-public** para routing

El script intentaba ejecutar `pm2 restart` cuando debía hacer `docker-compose up`.

---

## 🐳 Arquitectura Actual (Docker + Traefik)

```
Internet → Traefik (Puerto 80/443)
            ↓
         SSL/TLS Automático
            ↓
    Docker Container (arrebol-weddings)
            ↓
        Next.js Standalone (Puerto 3000)
```

### Ventajas:
- ✅ SSL automático con Let's Encrypt
- ✅ Zero-downtime deployments
- ✅ Fácil escalabilidad
- ✅ Aislamiento completo
- ✅ Rollback rápido

---

## 📋 Scripts Disponibles

### 1. `deploy.ps1` (RECOMENDADO - Auto-detección)
**Qué hace:**
- Detecta automáticamente si usas Docker o PM2
- Ejecuta el proceso correcto según tu configuración
- Soporta ambos métodos de despliegue

**Uso:**
```powershell
.\deploy.ps1 "Add new feature"
```

**Proceso (Modo Docker):**
1. Verifica cambios en Git
2. Commit y push a GitHub
3. SSH al servidor
4. Pull latest changes
5. Detiene PM2 si existe (migración legacy)
6. Build imagen Docker **sin cache**
7. Down → Up con docker-compose
8. Limpia imágenes antiguas
9. Verifica estado del contenedor

---

### 2. `deploy-docker.ps1` (Específico para Docker)
**Qué hace:**
- Despliegue específico para Docker + Traefik
- Más opciones y flags
- Mejor feedback y verificación

**Uso:**
```powershell
# Deploy normal
.\deploy-docker.ps1 "Update contact form"

# Deploy sin cache (más lento pero más seguro)
.\deploy-docker.ps1 "Major update" -SkipCache

# Deploy y ver logs inmediatamente
.\deploy-docker.ps1 "Hotfix" -ViewLogs
```

**Opciones:**
- `-SkipCache`: Fuerza rebuild completo (útil para cambios en dependencias)
- `-ViewLogs`: Muestra logs después del deploy

---

## 🔧 Troubleshooting

### Error: "Container not found"
```powershell
# Verificar en el servidor
ssh root@data.arrebolweddings.com

# Ver contenedores
docker ps -a

# Ver logs
docker logs arrebol-weddings
```

### Error: "Port already in use"
```bash
# En el servidor, detener contenedor viejo
docker-compose down

# Verificar que nada use el puerto 3000
netstat -tulpn | grep 3000

# Si PM2 está corriendo, detenerlo
pm2 stop all
pm2 delete all

# Reiniciar deploy
docker-compose up -d
```

### Error: "Build failed"
```powershell
# Hacer build sin cache
.\deploy-docker.ps1 "Rebuild" -SkipCache
```

### Verificar estado de Traefik
```bash
ssh root@data.arrebolweddings.com

# Ver red de Traefik
docker network ls | grep traefik

# Ver contenedores en la red
docker network inspect traefik-public

# Logs de Traefik (si tienes acceso)
docker logs traefik
```

---

## 📊 Comandos Útiles en el Servidor

### Ver estado
```bash
ssh root@data.arrebolweddings.com
cd /var/www/arrebolweddings.com

# Estado de contenedores
docker ps

# Logs en tiempo real
docker logs -f arrebol-weddings

# Logs últimas 100 líneas
docker logs --tail=100 arrebol-weddings
```

### Reiniciar
```bash
cd /var/www/arrebolweddings.com

# Reinicio rápido
docker-compose restart

# Reinicio completo (recrea contenedor)
docker-compose down && docker-compose up -d
```

### Rebuild manual
```bash
cd /var/www/arrebolweddings.com

# Pull cambios
git pull origin master

# Rebuild sin cache
docker-compose build --no-cache

# Deploy
docker-compose up -d
```

---

## 🎯 Workflow Recomendado

### Desarrollo → Producción

1. **Desarrollar localmente**
   ```powershell
   cd C:\Projects\Web-Arrebol\arrebol-weddings-site
   npm run dev
   # Prueba en http://localhost:3000
   ```

2. **Probar build local**
   ```powershell
   npm run build
   npm start
   # Verifica que funciona en modo producción
   ```

3. **Deploy a producción**
   ```powershell
   .\deploy.ps1 "Descripción clara del cambio"
   ```

4. **Verificar en producción**
   - Abre https://arrebolweddings.com
   - Verifica que los cambios están aplicados
   - Revisa consola del navegador (F12)

5. **Monitorear logs (si es necesario)**
   ```powershell
   ssh root@data.arrebolweddings.com 'docker logs -f arrebol-weddings'
   ```

---

## 🚨 Migración de PM2 a Docker (Completado)

Si ves mensajes sobre PM2 en los scripts, es porque el código maneja ambos casos:

```powershell
# El script automáticamente:
pm2 stop arrebol-weddings 2>/dev/null || true
pm2 delete arrebol-weddings 2>/dev/null || true
```

Esto asegura que si había PM2 corriendo (setup anterior), se detiene antes de iniciar Docker.

---

## ✅ Checklist Pre-Deploy

Antes de cada deploy, verifica:

- [ ] Código funciona localmente
- [ ] Build local exitoso (`npm run build`)
- [ ] No hay errores en consola
- [ ] Cambios committeados en Git
- [ ] Tienes acceso SSH al servidor
- [ ] `docker-compose.yml` está actualizado
- [ ] Variables de entorno correctas

---

## 📝 Notas Adicionales

### ¿Por qué --no-cache en build?
- Asegura que los cambios en `next.config.ts` se apliquen
- Previene problemas de cache en producción
- Solo tarda ~2-3 minutos más

### ¿Por qué down → up?
- Asegura recreación completa del contenedor
- Aplica cambios en `docker-compose.yml`
- Limpia configuraciones antiguas

### Traefik labels en docker-compose.yml
```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.arrebol-secure.rule=Host(`arrebolweddings.com`)"
  - "traefik.http.routers.arrebol-secure.tls.certresolver=le"
```
Estas labels configuran automáticamente:
- Routing por dominio
- SSL/TLS con Let's Encrypt
- Redirección HTTP → HTTPS

---

**Última actualización:** 2 de enero de 2026
**Estado:** ✅ Scripts actualizados y probados para Docker + Traefik
