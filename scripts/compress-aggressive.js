const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');
const TARGET_SIZE_KB = 500;
const TARGET_SIZE_BYTES = TARGET_SIZE_KB * 1024;

const filesToCompress = [
  'KandE-102.webp',
  'KandE-145.webp',
  'KandE-430.webp',
  'KyB-607.webp',
  'PyC-174.webp',
  'PyC-275.webp',
  'PyP-110.webp',
  'PyP-535.webp',
  'RandK-112.webp',
  'RandK-84.webp',
  'TOP-SyP-324.webp'
];

async function compressImageSafe(inputPath, file) {
  const stats = fs.statSync(inputPath);
  const originalSizeKB = (stats.size / 1024).toFixed(2);

  if (stats.size <= TARGET_SIZE_BYTES) {
    console.log(`✓ ${file}: ${originalSizeKB}KB - Already under target`);
    return;
  }

  try {
    const metadata = await sharp(inputPath).metadata();
    let quality = 65;
    let width = metadata.width;
    let height = metadata.height;
    let attempt = 0;
    const maxAttempts = 15;

    console.log(`\nProcessing ${file}: ${originalSizeKB}KB (${width}x${height})`);

    const tempPath = inputPath + '.compressed.tmp';

    while (attempt < maxAttempts) {
      attempt++;
      
      await sharp(inputPath)
        .resize(width, height, {
          fit: 'cover',
          position: 'centre'
        })
        .webp({ quality, effort: 6 })
        .toFile(tempPath);

      const tempStats = fs.statSync(tempPath);
      const newSizeKB = (tempStats.size / 1024).toFixed(2);

      if (tempStats.size <= TARGET_SIZE_BYTES || Math.abs(tempStats.size - TARGET_SIZE_BYTES) < 10240) {
        // Delete original and rename temp
        try {
          fs.unlinkSync(inputPath);
          fs.renameSync(tempPath, inputPath);
          const savings = ((1 - tempStats.size / stats.size) * 100).toFixed(1);
          console.log(`  ✓ Attempt ${attempt}: ${newSizeKB}KB (${width}x${height}, q${quality}) - Success! [saved ${savings}%]`);
          return;
        } catch (err) {
          console.log(`  ✗ Failed to replace file: ${err.message}`);
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
          return;
        }
      }

      if (tempStats.size > TARGET_SIZE_BYTES) {
        const ratio = Math.sqrt(TARGET_SIZE_BYTES / tempStats.size);
        
        if (quality > 45) {
          quality = Math.max(45, Math.round(quality * ratio * 0.90));
        } else {
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
          quality = 60;
        }
        
        console.log(`  → Attempt ${attempt}: ${newSizeKB}KB (too large) - Adjusting to ${width}x${height}, q${quality}`);
      }

      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }

    console.log(`  ✗ Could not reach target after ${maxAttempts} attempts`);
  } catch (error) {
    console.error(`  ✗ Error compressing ${file}:`, error.message);
  }
}

async function compressAggressively() {
  console.log(`Aggressively compressing ${filesToCompress.length} images to ${TARGET_SIZE_KB}KB max...\n`);

  for (const file of filesToCompress) {
    const inputPath = path.join(galleryDir, file);
    if (fs.existsSync(inputPath)) {
      await compressImageSafe(inputPath, file);
    } else {
      console.log(`✗ ${file}: File not found`);
    }
  }

  console.log('\n✓ Aggressive compression complete!');
}

compressAggressively();
