# Guía de Migración a Docker + Traefik

## ✅ Archivos Creados

1. **Dockerfile** - Imagen optimizada de Next.js
2. **docker-compose.yml** - Configuración de Traefik
3. **.dockerignore** - Archivos excluidos del build
4. **deploy-docker.ps1** - Script de despliegue automatizado

## 🚀 Despliegue

### Primera vez (Migración)

```powershell
# 1. Hacer commit de los nuevos archivos
git add Dockerfile docker-compose.yml .dockerignore deploy-docker.ps1 next.config.ts
git commit -m "Add Docker + Traefik configuration"
git push origin master

# 2. En el servidor, detener PM2 y lanzar Docker
ssh root@data.arrebolweddings.com

cd /var/www/arrebolweddings.com
git pull origin master

# Detener PM2
pm2 stop arrebol-weddings
pm2 delete arrebol-weddings
pm2 save

# Construir y lanzar Docker
docker-compose build
docker-compose up -d

# Ver logs
docker logs -f arrebol-weddings
```

### Despliegues Posteriores

```powershell
.\deploy-docker.ps1 "Descripción de los cambios"
```

## 🔍 Verificación

```bash
# Ver contenedores
docker ps

# Ver logs
docker logs -f arrebol-weddings

# Reiniciar
docker-compose restart

# Detener
docker-compose down

# Ver red de Traefik
docker network inspect traefik-public
```

## ⚙️ Configuración de Traefik

El sitio está configurado con:
- ✅ HTTP → HTTPS redirect automático
- ✅ Certificado SSL con Let's Encrypt
- ✅ www.arrebolweddings.com → arrebolweddings.com
- ✅ Red compartida: `traefik-public`

## 🎯 Ventajas

1. **Aislamiento**: El sitio corre en su propio contenedor
2. **SSL Automático**: Traefik maneja Let's Encrypt
3. **Sin Nginx**: Traefik actúa como reverse proxy
4. **Consistencia**: Mismo setup que otros servicios
5. **Fácil rollback**: `docker-compose down && docker-compose up -d`

## 📝 Notas

- El sitio seguirá corriendo en el puerto 3000 internamente
- Traefik lo expondrá en 80/443 automáticamente
- Los certificados SSL se renuevan automáticamente
- PM2 ya no es necesario (Docker maneja el proceso)
