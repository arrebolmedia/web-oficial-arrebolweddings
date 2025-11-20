const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');

async function convertToWebP() {
  const files = fs.readdirSync(galleryDir).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  console.log(`Found ${files.length} images to convert to WebP...`);

  for (const file of files) {
    const inputPath = path.join(galleryDir, file);
    const outputPath = path.join(galleryDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);

    try {
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024 / 1024).toFixed(2);
      const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);

      console.log(`✓ ${file} → ${path.basename(outputPath)}: ${originalSize}MB → ${newSize}MB (saved ${savings}%)`);
      
      // Eliminar archivo original después de conversión exitosa
      fs.unlinkSync(inputPath);
    } catch (error) {
      console.error(`✗ Error converting ${file}:`, error.message);
    }
  }

  console.log('\nConversion to WebP complete!');
}

convertToWebP();
