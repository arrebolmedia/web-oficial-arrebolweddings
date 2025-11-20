const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');
const MAX_SIZE_MB = 1;

async function compressLargeImages() {
  const files = fs.readdirSync(galleryDir).filter(file => 
    /\.webp$/i.test(file)
  );

  console.log(`Checking ${files.length} WebP images for compression...`);

  let compressed = 0;
  let skipped = 0;

  for (const file of files) {
    const inputPath = path.join(galleryDir, file);
    const stats = fs.statSync(inputPath);
    const sizeMB = stats.size / 1024 / 1024;

    if (sizeMB > MAX_SIZE_MB) {
      const originalSize = sizeMB.toFixed(2);

      try {
        await sharp(inputPath)
          .webp({ quality: 70, effort: 6 })
          .toFile(inputPath + '.tmp');

        const newStats = fs.statSync(inputPath + '.tmp');
        const newSize = (newStats.size / 1024 / 1024).toFixed(2);
        const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);

        fs.renameSync(inputPath + '.tmp', inputPath);
        
        console.log(`✓ ${file}: ${originalSize}MB → ${newSize}MB (saved ${savings}%)`);
        compressed++;
      } catch (error) {
        console.error(`✗ Error compressing ${file}:`, error.message);
        if (fs.existsSync(inputPath + '.tmp')) {
          fs.unlinkSync(inputPath + '.tmp');
        }
      }
    } else {
      skipped++;
    }
  }

  console.log(`\n✓ Compressed: ${compressed} images`);
  console.log(`○ Skipped (under ${MAX_SIZE_MB}MB): ${skipped} images`);
  console.log('\nCompression complete!');
}

compressLargeImages();
