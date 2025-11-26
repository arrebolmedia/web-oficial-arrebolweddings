const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');
const TARGET_SIZE_KB = 500;
const TARGET_SIZE_BYTES = TARGET_SIZE_KB * 1024;

async function compressImage(inputPath, file) {
  const stats = fs.statSync(inputPath);
  const originalSizeKB = (stats.size / 1024).toFixed(2);

  // Si ya está por debajo del objetivo, saltar
  if (stats.size <= TARGET_SIZE_BYTES) {
    console.log(`✓ ${file}: ${originalSizeKB}KB - Already under target, skipping`);
    return;
  }

  try {
    const metadata = await sharp(inputPath).metadata();
    let quality = 80;
    let width = metadata.width;
    let height = metadata.height;
    let attempt = 0;
    const maxAttempts = 10;

    console.log(`\nProcessing ${file}: ${originalSizeKB}KB (${width}x${height})`);

    while (attempt < maxAttempts) {
      attempt++;

      // Crear imagen temporal
      const tempPath = inputPath + '.tmp';
      
      await sharp(inputPath)
        .resize(width, height, {
          fit: 'cover',
          position: 'centre'
        })
        .webp({ quality, effort: 6 })
        .toFile(tempPath);

      const tempStats = fs.statSync(tempPath);
      const newSizeKB = (tempStats.size / 1024).toFixed(2);

      // Si está dentro del objetivo o muy cerca, aceptar
      if (tempStats.size <= TARGET_SIZE_BYTES || Math.abs(tempStats.size - TARGET_SIZE_BYTES) < 10240) {
        const outputPath = inputPath.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
        fs.renameSync(tempPath, outputPath);
        
        // Si el nombre cambió, eliminar el original
        if (outputPath !== inputPath) {
          fs.unlinkSync(inputPath);
        }
        
        const savings = ((1 - tempStats.size / stats.size) * 100).toFixed(1);
        console.log(`  ✓ Attempt ${attempt}: ${newSizeKB}KB (${width}x${height}, q${quality}) - Success! [saved ${savings}%]`);
        return;
      }

      // Ajustar parámetros para el siguiente intento
      if (tempStats.size > TARGET_SIZE_BYTES) {
        const ratio = Math.sqrt(TARGET_SIZE_BYTES / tempStats.size);
        
        if (quality > 60) {
          // Primero reducir calidad
          quality = Math.max(60, Math.round(quality * ratio * 0.95));
        } else {
          // Luego reducir tamaño
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
          quality = 75; // Restablecer calidad al reducir tamaño
        }
        
        console.log(`  → Attempt ${attempt}: ${newSizeKB}KB (too large) - Adjusting to ${width}x${height}, q${quality}`);
      }

      fs.unlinkSync(tempPath);
    }

    console.log(`  ✗ Could not reach target after ${maxAttempts} attempts`);
  } catch (error) {
    console.error(`  ✗ Error compressing ${file}:`, error.message);
    const tempPath = inputPath + '.tmp';
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

async function compressAllImages() {
  const files = fs.readdirSync(galleryDir).filter(file => 
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  console.log(`Found ${files.length} images to compress to ${TARGET_SIZE_KB}KB max...\n`);

  for (const file of files) {
    const inputPath = path.join(galleryDir, file);
    await compressImage(inputPath, file);
  }

  console.log('\n✓ Compression complete!');
}

compressAllImages();
