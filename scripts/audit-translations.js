#!/usr/bin/env node
/**
 * Script de auditoría de traducciones
 * Detecta textos en español hardcodeados en archivos .tsx que deberían estar en el sistema de traducciones
 * 
 * Uso: node scripts/audit-translations.js
 */

const fs = require('fs');
const path = require('path');

// Patrones de texto en español que indican strings hardcodeados
const spanishPatterns = [
  // Palabras comunes en español
  /["'`]([^"'`]*(?:á|é|í|ó|ú|ñ|ü|¿|¡)[^"'`]*)["'`]/g,
  // Frases comunes en bodas/web
  /["'`](Ver más|Anterior|Siguiente|Volver|Contactar|Enviar|Cargar|Cargando)["'`]/gi,
  /["'`](También te puede|Nuestro blog|Sigue leyendo)["'`]/gi,
  /["'`](¿[^"'`]+\?)["'`]/g, // Preguntas en español
  // Texto con más de 3 palabras (probablemente contenido)
  /["'`]([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[a-záéíóúñA-ZÁÉÍÓÚÑ]+){3,})["'`]/g,
];

// Patrones a ignorar (ya están traducidos o son técnicos)
const ignorePatterns = [
  /content\./,
  /galeria\./,
  /\{t\./,
  /\{blog\./,
  /className=/,
  /href=/,
  /src=/,
  /alt="/,
  /placeholder=/,
  /type=/,
  /name="/,
  /id="/,
  /key=/,
  /console\./,
  /import /,
  /export /,
  /'use client'/,
  /\.webp/,
  /\.mp4/,
  /\.png/,
  /\.jpg/,
  /localhost/,
  /whatsapp/i,
  /instagram/i,
  /arrebol/i,
  /@/,
  /https?:/,
  /UTF-8/,
  /MXN/,
  /metadata/i,        // SEO metadata
  /description:/,     // Meta descriptions
  /openGraph/,        // OG tags
  /\/\//,             // Comments
  /\/\*/,             // Multi-line comments
  /\*\//,             // End of comments
  /This excludes/,    // Code comments
];

// Archivos a ignorar completamente
const ignoreFiles = [
  'politica-de-privacidad', // Legal document, should stay in Spanish
  'layout.tsx',             // SEO metadata
  'app\\page.tsx',          // Home page SEO metadata
  'app/page.tsx',           // Home page SEO metadata (unix path)
];

// Directorios a escanear
const scanDirs = [
  'app',
  'components',
];

// Extensiones a escanear
const extensions = ['.tsx', '.jsx'];

function shouldIgnoreLine(line) {
  return ignorePatterns.some(pattern => pattern.test(line));
}

function findSpanishStrings(content, filePath) {
  const lines = content.split('\n');
  const findings = [];

  lines.forEach((line, index) => {
    if (shouldIgnoreLine(line)) return;

    spanishPatterns.forEach(pattern => {
      const matches = line.matchAll(pattern);
      for (const match of matches) {
        const text = match[1] || match[0];
        // Filtrar strings muy cortos o que son solo caracteres especiales
        if (text.length < 5) return;
        // Filtrar si es parte de un objeto content
        if (line.includes('content.') || line.includes('{galeria.') || line.includes('{t.')) return;
        
        findings.push({
          file: filePath,
          line: index + 1,
          text: text.trim(),
          context: line.trim().substring(0, 100),
        });
      }
    });
  });

  return findings;
}

function shouldIgnoreFile(filePath) {
  return ignoreFiles.some(pattern => filePath.includes(pattern));
}

function scanDirectory(dir, basePath = '') {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) return [];

  const findings = [];
  const items = fs.readdirSync(fullPath);

  items.forEach(item => {
    const itemPath = path.join(fullPath, item);
    const relativePath = path.join(dir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      // Ignorar node_modules y .next
      if (item === 'node_modules' || item === '.next' || item === 'out-es') return;
      // Ignorar directorios en la lista de exclusión
      if (shouldIgnoreFile(relativePath)) return;
      findings.push(...scanDirectory(relativePath));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      // Ignorar archivos en la lista de exclusión
      if (shouldIgnoreFile(relativePath)) return;
      const content = fs.readFileSync(itemPath, 'utf-8');
      findings.push(...findSpanishStrings(content, relativePath));
    }
  });

  return findings;
}

function main() {
  console.log('🔍 Auditando traducciones...\n');

  let allFindings = [];

  scanDirs.forEach(dir => {
    allFindings.push(...scanDirectory(dir));
  });

  // Eliminar duplicados
  const unique = allFindings.filter((finding, index, self) =>
    index === self.findIndex(f => f.file === finding.file && f.line === finding.line && f.text === finding.text)
  );

  if (unique.length === 0) {
    console.log('✅ No se encontraron textos en español sin traducir.\n');
    return;
  }

  console.log(`⚠️  Se encontraron ${unique.length} posibles textos sin traducir:\n`);

  // Agrupar por archivo
  const byFile = {};
  unique.forEach(f => {
    if (!byFile[f.file]) byFile[f.file] = [];
    byFile[f.file].push(f);
  });

  Object.entries(byFile).forEach(([file, findings]) => {
    console.log(`📄 ${file}`);
    findings.forEach(f => {
      console.log(`   Línea ${f.line}: "${f.text}"`);
    });
    console.log('');
  });

  console.log('💡 Sugerencia: Mueve estos textos a lib/content.ts y usa el hook useLanguage()');
}

main();
