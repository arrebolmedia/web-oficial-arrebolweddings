const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');
const TARGET_SIZE_KB = 500;
const TARGET_SIZE_BYTES = TARGET_SIZE_KB * 1024;

const filesToCompress = [
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

async function compressToNew(inputPath, file) {
  const stats = fs.statSync(inputPath);
  const originalSizeKB = (stats.size / 1024).toFixed(2);

  if (stats.size <= TARGET_SIZE_BYTES) {
    console.log(`✓ ${file}: ${originalSizeKB}KB - Already under target`);
    return;
  }

  try {
    const metadata = await sharp(inputPath).metadata();
    let quality = 60;
    let width = metadata.width;
    let height = metadata.height;
    let attempt = 0;
    const maxAttempts = 15;

    console.log(`\nProcessing ${file}: ${originalSizeKB}KB (${width}x${height})`);

    const outputPath = inputPath.replace('.webp', '.NEW.webp');

    while (attempt < maxAttempts) {
      attempt++;
      
      await sharp(inputPath)
        .resize(width, height, {
          fit: 'cover',
          position: 'centre'
        })
        .webp({ quality, effort: 6 })
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSizeKB = (newStats.size / 1024).toFixed(2);

      if (newStats.size <= TARGET_SIZE_BYTES || Math.abs(newStats.size - TARGET_SIZE_BYTES) < 10240) {
        const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);
        console.log(`  ✓ Attempt ${attempt}: ${newSizeKB}KB (${width}x${height}, q${quality}) - Success! [saved ${savings}%]`);
        console.log(`     Created: ${path.basename(outputPath)}`);
        return;
      }

      if (newStats.size > TARGET_SIZE_BYTES) {
        const ratio = Math.sqrt(TARGET_SIZE_BYTES / newStats.size);
        
        if (quality > 40) {
          quality = Math.max(40, Math.round(quality * ratio * 0.88));
        } else {
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
          quality = 55;
        }
        
        console.log(`  → Attempt ${attempt}: ${newSizeKB}KB (too large) - Adjusting to ${width}x${height}, q${quality}`);
      }

      if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
    }

    console.log(`  ✗ Could not reach target after ${maxAttempts} attempts`);
  } catch (error) {
    console.error(`  ✗ Error compressing ${file}:`, error.message);
  }
}

async function compressToNewFiles() {
  console.log(`Creating compressed copies of ${filesToCompress.length} images...\n`);

  for (const file of filesToCompress) {
    const inputPath = path.join(galleryDir, file);
    if (fs.existsSync(inputPath)) {
      await compressToNew(inputPath, file);
    } else {
      console.log(`✗ ${file}: File not found`);
    }
  }

  console.log('\n✓ Compression complete!');
  console.log('\n📝 Next step: Close all File Explorer windows, then run:');
  console.log('   node scripts/replace-compressed.js');
}

compressToNewFiles();
