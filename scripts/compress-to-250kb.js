const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');
const targetSize = 250 * 1024; // 250KB en bytes
const tolerance = 10 * 1024; // ±10KB de tolerancia

async function compressImage(imagePath) {
  const filename = path.basename(imagePath);
  
  // Saltar la imagen hero optimizada
  if (filename.includes('-hero')) {
    console.log(`⏭️  Skipping ${filename} (hero image)`);
    return;
  }

  const originalSize = fs.statSync(imagePath).size;
  
  try {
    // Obtener dimensiones originales
    const metadata = await sharp(imagePath).metadata();
    const originalWidth = metadata.width;
    const originalHeight = metadata.height;
    
    // Reducir dimensiones a la mitad
    const newWidth = Math.round(originalWidth / 2);
    const newHeight = Math.round(originalHeight / 2);
    
    let quality = 75;
    let currentSize = originalSize;
    let attempts = 0;
    const maxAttempts = 15;
    
    console.log(`🔄 Processing ${filename}...`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(2)}KB (${originalWidth}x${originalHeight})`);
    console.log(`   Target: ${newWidth}x${newHeight}, ~250KB`);
    
    while (attempts < maxAttempts) {
      const buffer = await sharp(imagePath)
        .resize(newWidth, newHeight, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality, effort: 6 })
        .toBuffer();
      
      currentSize = buffer.length;
      
      if (Math.abs(currentSize - targetSize) <= tolerance) {
        // Write to .NEW file to avoid Windows file locks
        const newPath = imagePath.replace(/\.webp$/, '.NEW.webp');
        await sharp(buffer).toFile(newPath);
        const savings = ((originalSize - currentSize) / originalSize * 100).toFixed(1);
        console.log(`✓ ${filename}: ${(currentSize / 1024).toFixed(2)}KB (saved ${savings}%)`);
        return;
      }
      
      if (currentSize > targetSize) {
        quality = Math.max(quality - 5, 40);
      } else {
        // Write to .NEW file to avoid Windows file locks
        const newPath = imagePath.replace(/\.webp$/, '.NEW.webp');
        await sharp(buffer).toFile(newPath);
        const savings = ((originalSize - currentSize) / originalSize * 100).toFixed(1);
        console.log(`✓ ${filename}: ${(currentSize / 1024).toFixed(2)}KB (saved ${savings}%)`);
        return;
      }
      
      attempts++;
    }
    
    // Si no alcanzamos el objetivo, guardamos el mejor resultado
    const finalBuffer = await sharp(imagePath)
      .resize(newWidth, newHeight, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 40, effort: 6 })
      .toBuffer();
    
    // Write to .NEW file to avoid Windows file locks
    const newPath = imagePath.replace(/\.webp$/, '.NEW.webp');
    await sharp(finalBuffer).toFile(newPath);
    const savings = ((originalSize - finalBuffer.length) / originalSize * 100).toFixed(1);
    console.log(`⚠ ${filename}: ${(finalBuffer.length / 1024).toFixed(2)}KB (saved ${savings}%, max attempts)`);
    
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
  }
}

async function compressAllImages() {
  console.log('🚀 Starting aggressive compression to 250KB target...\n');
  
  const files = fs.readdirSync(galleryDir)
    .filter(file => file.endsWith('.webp'))
    .map(file => path.join(galleryDir, file));
  
  console.log(`Found ${files.length} images to process\n`);
  
  for (const file of files) {
    await compressImage(file);
  }
  
  console.log('\n✅ Compression complete!');
  
  // Estadísticas finales
  const finalFiles = fs.readdirSync(galleryDir)
    .filter(file => file.endsWith('.webp'))
    .map(file => path.join(galleryDir, file));
  
  const sizes = finalFiles.map(f => fs.statSync(f).size);
  const avgSize = sizes.reduce((a, b) => a + b, 0) / sizes.length;
  const maxSize = Math.max(...sizes);
  
  console.log('\n📊 Final Statistics:');
  console.log(`   Count: ${sizes.length}`);
  console.log(`   Average: ${(avgSize / 1024).toFixed(2)} KB`);
  console.log(`   Max: ${(maxSize / 1024).toFixed(2)} KB`);
}

compressAllImages();
