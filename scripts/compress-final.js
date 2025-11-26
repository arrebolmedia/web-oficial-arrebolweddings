const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');
const TARGET_SIZE_KB = 500;
const TARGET_SIZE_BYTES = TARGET_SIZE_KB * 1024;

// Files that still need compression (with renamed files)
const filesToCompress = [
  'KandE-102.webp',
  'KandE-145.webp',
  'KandE-151.webp',
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

async function compressImage(inputPath, file) {
  const stats = fs.statSync(inputPath);
  const originalSizeKB = (stats.size / 1024).toFixed(2);

  if (stats.size <= TARGET_SIZE_BYTES) {
    console.log(`✓ ${file}: ${originalSizeKB}KB - Already under target`);
    return;
  }

  try {
    const metadata = await sharp(inputPath).metadata();
    let quality = 70;
    let width = metadata.width;
    let height = metadata.height;
    let attempt = 0;
    const maxAttempts = 15;

    console.log(`\nProcessing ${file}: ${originalSizeKB}KB (${width}x${height})`);

    while (attempt < maxAttempts) {
      attempt++;
      
      const buffer = await sharp(inputPath)
        .resize(width, height, {
          fit: 'cover',
          position: 'centre'
        })
        .webp({ quality, effort: 6 })
        .toBuffer();

      const newSizeKB = (buffer.length / 1024).toFixed(2);

      if (buffer.length <= TARGET_SIZE_BYTES || Math.abs(buffer.length - TARGET_SIZE_BYTES) < 10240) {
        fs.writeFileSync(inputPath, buffer);
        const savings = ((1 - buffer.length / stats.size) * 100).toFixed(1);
        console.log(`  ✓ Attempt ${attempt}: ${newSizeKB}KB (${width}x${height}, q${quality}) - Success! [saved ${savings}%]`);
        return;
      }

      if (buffer.length > TARGET_SIZE_BYTES) {
        const ratio = Math.sqrt(TARGET_SIZE_BYTES / buffer.length);
        
        if (quality > 50) {
          quality = Math.max(50, Math.round(quality * ratio * 0.92));
        } else {
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
          quality = 65;
        }
        
        console.log(`  → Attempt ${attempt}: ${newSizeKB}KB (too large) - Adjusting to ${width}x${height}, q${quality}`);
      }
    }

    console.log(`  ✗ Could not reach target after ${maxAttempts} attempts`);
  } catch (error) {
    console.error(`  ✗ Error compressing ${file}:`, error.message);
  }
}

async function compressFinal() {
  console.log(`Compressing final ${filesToCompress.length} images to ${TARGET_SIZE_KB}KB max...\n`);

  for (const file of filesToCompress) {
    const inputPath = path.join(galleryDir, file);
    if (fs.existsSync(inputPath)) {
      await compressImage(inputPath, file);
    } else {
      console.log(`✗ ${file}: File not found`);
    }
  }

  console.log('\n✓ Final compression complete!');
}

compressFinal();
