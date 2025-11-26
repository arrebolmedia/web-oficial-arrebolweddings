const fs = require('fs').promises;
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');

async function getImageStats() {
  const files = await fs.readdir(galleryDir);
  const webpFiles = files.filter(f => f.endsWith('.webp') && !f.endsWith('.NEW.webp'));
  
  const stats = await Promise.all(
    webpFiles.map(async (file) => {
      const filePath = path.join(galleryDir, file);
      const stat = await fs.stat(filePath);
      return {
        name: file,
        size: stat.size
      };
    })
  );
  
  const totalSize = stats.reduce((sum, s) => sum + s.size, 0);
  const avgSize = totalSize / stats.length;
  const maxFile = stats.reduce((max, s) => s.size > max.size ? s : max);
  const minFile = stats.reduce((min, s) => s.size < min.size ? s : min);
  
  console.log('📊 Image Statistics:\n');
  console.log(`Total images: ${stats.length}`);
  console.log(`Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Average size: ${(avgSize / 1024).toFixed(2)} KB`);
  console.log(`Largest: ${maxFile.name} (${(maxFile.size / 1024).toFixed(2)} KB)`);
  console.log(`Smallest: ${minFile.name} (${(minFile.size / 1024).toFixed(2)} KB)`);
  
  // Count by size ranges
  const ranges = {
    '< 50KB': 0,
    '50-100KB': 0,
    '100-150KB': 0,
    '150-200KB': 0,
    '200-250KB': 0,
    '> 250KB': 0
  };
  
  stats.forEach(s => {
    const kb = s.size / 1024;
    if (kb < 50) ranges['< 50KB']++;
    else if (kb < 100) ranges['50-100KB']++;
    else if (kb < 150) ranges['100-150KB']++;
    else if (kb < 200) ranges['150-200KB']++;
    else if (kb < 250) ranges['200-250KB']++;
    else ranges['> 250KB']++;
  });
  
  console.log('\n📦 Size Distribution:');
  Object.entries(ranges).forEach(([range, count]) => {
    const percent = ((count / stats.length) * 100).toFixed(1);
    console.log(`  ${range}: ${count} (${percent}%)`);
  });
}

getImageStats().catch(console.error);
