const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, '../public/images/gallery/TOP-SyP-324.webp');
const outputPath = path.join(__dirname, '../public/images/gallery/TOP-SyP-324-hero.webp');

async function optimizeHeroImage() {
  console.log('🎨 Optimizing hero image for fast LCP...');
  
  try {
    const info = await sharp(inputPath)
      .resize(400, null, { // Ancho máximo 400px para hero móvil
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: 75,
        effort: 6
      })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const newSize = info.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ Hero image optimized:`);
    console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`  Optimized: ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`  Savings: ${savings}%`);
  } catch (error) {
    console.error('✗ Error:', error.message);
  }
}

optimizeHeroImage();
