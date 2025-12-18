# 📖 MUST READ: Guía de Deployment

## ⚡ Deployment Rápido (< 1 minuto)

### Comando Principal
```powershell
.\deploy.ps1 "Tu mensaje de commit"
```

**Ejemplo:**
```powershell
.\deploy.ps1 "Add new contact form validation"
```

---

## 🎯 ¿Cuándo hacer deployment?

### ✅ Hacer Deploy Cuando:
- Agregues nuevas páginas o componentes
- Modifiques contenido o estilos
- Corrijas bugs en producción
- Actualices textos o traducciones
- Cambies precios o información de colecciones

### ❌ NO Hacer Deploy Si:
- Estás probando localmente (usa `npm run dev`)
- El código tiene errores o warnings críticos
- No has probado los cambios localmente primero

---

## 🔄 ¿Qué hace el script de deploy?

El script `deploy.ps1` automatiza 6 pasos en ~60 segundos:

1. **📝 Verifica cambios** - Revisa que haya archivos modificados
2. **📦 Agrega archivos** - `git add .`
3. **💾 Hace commit** - Con tu mensaje personalizado
4. **☁️ Sube a GitHub** - `git push`
5. **🌐 Actualiza servidor** - SSH al servidor → `git pull` → `npm run build`
6. **🔄 Reinicia PM2** - Reinicia la aplicación en producción

---

## 📊 Ventajas vs. SCP (método anterior)

| Método | Tiempo | Tamaño transferido | Velocidad |
|--------|--------|-------------------|-----------|
| **SCP** (anterior) | ~5 minutos | 200+ MB | ❌ Lento |
| **Git Deploy** (actual) | ~60 segundos | ~KB | ✅ 95% más rápido |

---

## 🚀 Workflow Completo

### 1. Desarrollo Local
```powershell
# Navega al proyecto
cd C:\Projects\Web-Arrebol\arrebol-weddings-site

# Inicia servidor de desarrollo
npm run dev

# Abre http://localhost:3000
```

### 2. Prueba tus Cambios
- Verifica que todo funcione correctamente
- Revisa responsive design
- Comprueba que no haya errores en consola

### 3. Deploy a Producción
```powershell
# Un solo comando para todo
.\deploy.ps1 "Descripción clara de los cambios"
```

### 4. Verificación Post-Deploy
- Abre https://arrebolweddings.com
- Verifica que los cambios se reflejen
- Revisa que no haya errores 404

---

## 🔧 Troubleshooting

### ❓ "No hay cambios para hacer commit"
**Solución:** No has modificado ningún archivo. Verifica con:
```powershell
git status
```

### ❓ "Error de conexión SSH"
**Solución:** Verifica credenciales SSH al servidor:
```powershell
ssh root@data.arrebolweddings.com
```

### ❓ "Build failed en servidor"
**Solución:** 
1. Conéctate al servidor: `ssh root@data.arrebolweddings.com`
2. Navega al proyecto: `cd /var/www/arrebolweddings.com`
3. Revisa logs: `pm2 logs arrebol-weddings`
4. Intenta build manual: `npm run build`

### ❓ "El sitio no muestra mis cambios"
**Solución:**
- Limpia caché del navegador (Ctrl + Shift + R)
- Verifica PM2: `ssh root@data.arrebolweddings.com "pm2 status"`
- Reinicia manualmente: `ssh root@data.arrebolweddings.com "cd /var/www/arrebolweddings.com && pm2 restart arrebol-weddings"`

---

## 📁 Estructura de Archivos Importantes

```
arrebol-weddings-site/
├── deploy.ps1                    # 🎯 Script principal de deployment
├── DEPLOYMENT.md                 # 📖 Documentación técnica
├── MUST_READ_DEPLOYMENT.md       # 📚 Esta guía (lectura obligatoria)
├── app/
│   ├── colecciones/              # Colecciones completas (foto + video)
│   ├── colecciones-de-foto/      # Solo fotografía (mitad precio)
│   └── colecciones-de-video/     # Solo video (mitad precio)
└── lib/
    └── content.ts                # Contenido y precios de colecciones
```

---

## 🎨 Modificaciones Recientes

### Páginas Nuevas (Diciembre 2025)
- ✅ `/colecciones-de-foto` - Colecciones solo de fotografía
- ✅ `/colecciones-de-video` - Colecciones solo de video
- 💰 Precios: Mitad del precio original + descuento visual

### Estrategia de Precios
- Precio original: +$20,000 (tachado)
- Precio actual: Precio base (destacado)
- Sin etiquetas "Promoción especial"

---

## 🔐 Acceso al Servidor

**Servidor:** data.arrebolweddings.com  
**Path:** `/var/www/arrebolweddings.com`  
**PM2 Process:** `arrebol-weddings`  
**Puerto:** 3000  
**Repositorio:** https://github.com/arrebolmedia/web-oficial-arrebolweddings.git

---

## 💡 Tips Pro

### 1. Commits Descriptivos
```powershell
# ❌ Mal
.\deploy.ps1 "cambios"

# ✅ Bien
.\deploy.ps1 "Add video collections page with half pricing"
```

### 2. Deploy Frecuente
- Pequeños cambios → Deploy frecuente
- Mejor detectar errores temprano
- Más fácil revertir si algo falla

### 3. Backup antes de Cambios Grandes
```powershell
# Crea una rama de respaldo
git checkout -b backup-$(Get-Date -Format "yyyyMMdd")
git checkout master
```

### 4. Monitoreo Post-Deploy
```powershell
# Ver logs en tiempo real
ssh root@data.arrebolweddings.com "pm2 logs arrebol-weddings --lines 50"
```

---

## 🆘 Contactos de Emergencia

- **Developer:** GitHub Issues en el repositorio
- **Hosting:** Digital Ocean Support
- **DNS:** Proveedor de dominio

---

## 📝 Checklist Pre-Deploy

- [ ] Cambios probados localmente (`npm run dev`)
- [ ] Sin errores en consola del navegador
- [ ] Sin errores de TypeScript (`npm run build`)
- [ ] Mensaje de commit descriptivo preparado
- [ ] Backup reciente (para cambios grandes)

---

## ✨ ¡Ya estás listo!

Ahora puedes hacer deployment con confianza. Recuerda:

1. **Prueba local primero**
2. **Deploy con `.\deploy.ps1 "mensaje"`**
3. **Verifica en producción**

**Tiempo total: ~60 segundos** ⚡

---

*Última actualización: Diciembre 18, 2025*
