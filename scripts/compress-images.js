const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');

async function compressImages() {
  const files = fs.readdirSync(galleryDir).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  console.log(`Found ${files.length} images to compress and resize...`);

  for (const file of files) {
    const inputPath = path.join(galleryDir, file);
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);

    try {
      const metadata = await sharp(inputPath).metadata();
      const newWidth = Math.round(metadata.width * 0.5);
      const newHeight = Math.round(metadata.height * 0.5);

      await sharp(inputPath)
        .resize(newWidth, newHeight, {
          fit: 'cover',
          position: 'centre'
        })
        .jpeg({ quality: 80, progressive: true })
        .toFile(inputPath + '.tmp');

      const newStats = fs.statSync(inputPath + '.tmp');
      const newSize = (newStats.size / 1024 / 1024).toFixed(2);
      const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);

      fs.renameSync(inputPath + '.tmp', inputPath);
      
      console.log(`✓ ${file}: ${originalSize}MB (${metadata.width}x${metadata.height}) → ${newSize}MB (${newWidth}x${newHeight}) [saved ${savings}%]`);
    } catch (error) {
      console.error(`✗ Error compressing ${file}:`, error.message);
      if (fs.existsSync(inputPath + '.tmp')) {
        fs.unlinkSync(inputPath + '.tmp');
      }
    }
  }

  console.log('\nCompression complete!');
}

compressImages();
