# 🔧 Solución: Page Not Found (404) en Producción

## Problema
Las páginas muestran error 404 en producción después del despliegue con Docker.

## Causa Principal
Next.js con `output: 'standalone'` requiere configuraciones específicas para el routing correcto, especialmente con trailing slashes y rewrites.

## ✅ Solución Implementada

### 1. Actualización de next.config.ts
Se agregaron las siguientes configuraciones:

```typescript
{
  output: 'standalone',
  trailingSlash: true,  // ← NUEVO: Asegura URLs consistentes
  // ... otras configuraciones
  async rewrites() {    // ← NUEVO: Manejo de rutas
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
}
```

### 2. Configuración nginx.conf
Se creó un archivo de referencia con configuración para proxy reverso (Traefik ya maneja esto, pero sirve de documentación).

---

## 🚀 Pasos para Aplicar la Solución

### En Local (Windows)
```powershell
cd C:\Projects\Web-Arrebol\arrebol-weddings-site

# 1. Verificar que los cambios están correctos
npm run build

# 2. Probar localmente
npm start

# 3. Verificar que las rutas funcionan en http://localhost:3000
```

### Deployment a Producción

**Opción 1: Deploy Automático (RECOMENDADO)**
```powershell
cd C:\Projects\Web-Arrebol\arrebol-weddings-site
.\deploy.ps1 "Fix: Add trailingSlash and rewrites for 404 fix"
```

**Opción 2: Deploy con Docker (Si usas Docker)**
```bash
# En el servidor
ssh root@data.arrebolweddings.com

cd /var/www/arrebolweddings.com
git pull origin master

# Reconstruir contenedor con nuevas configuraciones
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# Verificar logs
docker-compose logs -f arrebol-weddings
```

**Opción 3: Deploy Manual**
```bash
ssh root@data.arrebolweddings.com

cd /var/www/arrebolweddings.com
git pull origin master
npm install
npm run build
pm2 restart arrebol-weddings

# Verificar
pm2 logs arrebol-weddings
```

---

## 🔍 Verificación Post-Deploy

### 1. Verificar Estado del Servicio

**Si usas Docker:**
```bash
docker ps
docker logs arrebol-weddings
```

**Si usas PM2:**
```bash
pm2 status
pm2 logs arrebol-weddings
```

### 2. Probar URLs
Probar estas URLs en producción:
- ✅ https://arrebolweddings.com/
- ✅ https://arrebolweddings.com/colecciones/
- ✅ https://arrebolweddings.com/contacto/
- ✅ https://arrebolweddings.com/galeria/
- ✅ https://arrebolweddings.com/paquetes/
- ✅ https://arrebolweddings.com/blog/

### 3. Verificar en Navegador
```
F12 → Network → Verificar que:
- Status: 200 OK (no 404)
- Content-Type: text/html
- No errores de recursos estáticos
```

---

## 🐛 Troubleshooting Adicional

### Problema: Aún hay 404s después del deploy

**1. Verificar que el build fue exitoso:**
```bash
ssh root@data.arrebolweddings.com
cd /var/www/arrebolweddings.com
ls -la .next/
```

**2. Verificar variables de entorno:**
```bash
# Docker
docker exec arrebol-weddings env | grep NODE_ENV

# PM2
pm2 env 0
```

**3. Limpiar cache y rebuild:**
```bash
cd /var/www/arrebolweddings.com

# Limpiar
rm -rf .next
rm -rf node_modules

# Reinstalar y rebuild
npm install
npm run build

# Reiniciar
docker-compose restart  # O pm2 restart arrebol-weddings
```

### Problema: Error en el build

**Verificar logs detallados:**
```bash
# Docker
docker-compose logs --tail=100 arrebol-weddings

# PM2
pm2 logs arrebol-weddings --lines 100
```

### Problema: Rutas específicas no funcionan

**Verificar que todas las páginas tengan page.tsx:**
```bash
find app -name "page.tsx" -o -name "page.js"
```

---

## 📋 Checklist de Verificación

Antes de considerar el problema resuelto:

- [ ] `next.config.ts` tiene `trailingSlash: true`
- [ ] `next.config.ts` tiene configuración de `rewrites()`
- [ ] Build local funciona sin errores: `npm run build`
- [ ] Servidor local funciona: `npm start` → http://localhost:3000
- [ ] Deploy realizado exitosamente
- [ ] Contenedor/Proceso reiniciado
- [ ] URL principal carga correctamente
- [ ] Todas las rutas principales funcionan (ver lista arriba)
- [ ] No hay errores en consola del navegador
- [ ] No hay errores en logs del servidor

---

## 🎯 Prevención Futura

### Para evitar 404s en el futuro:

1. **Siempre probar localmente primero:**
   ```powershell
   npm run build && npm start
   ```

2. **Verificar rutas después de agregar páginas nuevas**

3. **Usar el script deploy.ps1 para consistency:**
   ```powershell
   .\deploy.ps1 "Mensaje descriptivo"
   ```

4. **Monitorear logs después de cada deploy:**
   ```bash
   pm2 logs arrebol-weddings  # O docker logs
   ```

---

## 📚 Referencias

- [Next.js Standalone Output](https://nextjs.org/docs/app/api-reference/next-config-js/output)
- [Next.js Trailing Slash](https://nextjs.org/docs/app/api-reference/next-config-js/trailingSlash)
- [Next.js Rewrites](https://nextjs.org/docs/app/api-reference/next-config-js/rewrites)

---

**Fecha:** 2 de enero de 2026
**Estado:** ✅ Solución implementada - Pending deployment
