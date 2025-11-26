const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');
const TARGET_SIZE_KB = 500;
const TARGET_SIZE_BYTES = TARGET_SIZE_KB * 1024;

// Files that still need compression
const filesToCompress = [
  'CyD-38.webp',
  'CyD-68.webp',
  'K&E-102.webp',
  'K&E-145.webp',
  'K&E-151.webp',
  'K&E-430.webp',
  'KyB-607.webp',
  'PyC-174.webp',
  'PyC-275.webp',
  'PyP-110.webp',
  'PyP-535.webp',
  'R&K-112.webp',
  'R&K-76.webp',
  'R&K-84.webp',
  'SYO-209.webp',
  'T&M-643.webp',
  'TOP-KyB-236.webp',
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
    let quality = 75;
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
        
        if (quality > 55) {
          quality = Math.max(55, Math.round(quality * ratio * 0.93));
        } else {
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
          quality = 70;
        }
        
        console.log(`  → Attempt ${attempt}: ${newSizeKB}KB (too large) - Adjusting to ${width}x${height}, q${quality}`);
      }
    }

    console.log(`  ✗ Could not reach target after ${maxAttempts} attempts`);
  } catch (error) {
    console.error(`  ✗ Error compressing ${file}:`, error.message);
  }
}

async function compressRemaining() {
  console.log(`Compressing ${filesToCompress.length} remaining images to ${TARGET_SIZE_KB}KB max...\n`);

  for (const file of filesToCompress) {
    const inputPath = path.join(galleryDir, file);
    if (fs.existsSync(inputPath)) {
      await compressImage(inputPath, file);
    } else {
      console.log(`✗ ${file}: File not found`);
    }
  }

  console.log('\n✓ Compression complete!');
}

compressRemaining();
