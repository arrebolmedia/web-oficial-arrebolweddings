# 🚀 Deployment Guide

## Configuración actual

El sitio está configurado con **Git Deployment** en el servidor de producción.

### Servidor de producción
- **IP:** 138.68.55.125
- **Directorio:** `/var/www/arrebolweddings.com`
- **PM2 Process:** arrebol-weddings
- **Puerto:** 3000

## Cómo desplegar cambios

### Método automático (recomendado)

1. Hacer commit de tus cambios localmente:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   ```

2. Push a GitHub:
   ```bash
   git push origin master
   ```

3. Ejecutar el script de deployment en el servidor:
   ```bash
   ssh root@138.68.55.125 "/var/www/arrebolweddings.com/deploy.sh"
   ```

El script automáticamente:
- ✅ Hace `git pull` para obtener los últimos cambios
- ✅ Instala nuevas dependencias si las hay
- ✅ Ejecuta el build de producción
- ✅ Reinicia la aplicación en PM2

### Verificar el deployment

```bash
ssh root@138.68.55.125 "pm2 status"
```

## Ventajas de este método

- **Rápido:** Solo se descargan los cambios (no todo el código)
- **Rastreable:** Histórico completo en Git
- **Reversible:** Se puede hacer rollback a commits anteriores
- **Eficiente:** No se suben archivos innecesarios

## Troubleshooting

### Si el deployment falla:
```bash
ssh root@138.68.55.125
cd /var/www/arrebolweddings.com
git status
npm install
npm run build
pm2 restart arrebol-weddings
```

### Ver logs de PM2:
```bash
ssh root@138.68.55.125 "pm2 logs arrebol-weddings"
```

### Rollback a versión anterior:
```bash
ssh root@138.68.55.125 "cd /var/www/arrebolweddings.com && git log --oneline"
ssh root@138.68.55.125 "cd /var/www/arrebolweddings.com && git reset --hard <commit-hash> && npm run build && pm2 restart arrebol-weddings"
```
