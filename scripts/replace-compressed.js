const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');

const filesToReplace = [
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

function replaceFiles() {
  console.log('Replacing original files with compressed versions...\n');

  let successCount = 0;
  let failCount = 0;

  for (const file of filesToReplace) {
    const originalPath = path.join(galleryDir, file);
    const newPath = path.join(galleryDir, file.replace('.webp', '.NEW.webp'));

    if (!fs.existsSync(newPath)) {
      console.log(`✗ ${file}: .NEW file not found, skipping`);
      failCount++;
      continue;
    }

    try {
      // Try to delete original
      if (fs.existsSync(originalPath)) {
        fs.unlinkSync(originalPath);
      }

      // Rename .NEW to original
      fs.renameSync(newPath, originalPath);

      const newStats = fs.statSync(originalPath);
      const newSizeKB = (newStats.size / 1024).toFixed(2);
      console.log(`✓ ${file}: Replaced successfully (${newSizeKB}KB)`);
      successCount++;
    } catch (error) {
      console.log(`✗ ${file}: Failed - ${error.message}`);
      failCount++;
    }
  }

  console.log(`\n✓ Replacement complete!`);
  console.log(`   Success: ${successCount} files`);
  console.log(`   Failed: ${failCount} files`);
}

replaceFiles();
