const fs = require('fs').promises;
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/gallery');

async function replaceNewFiles() {
  console.log('🔄 Replacing .NEW files with originals...\n');
  
  const files = await fs.readdir(galleryDir);
  const newFiles = files.filter(f => f.endsWith('.NEW.webp'));
  
  let replaced = 0;
  let errors = 0;
  
  for (const newFile of newFiles) {
    const newPath = path.join(galleryDir, newFile);
    const originalPath = newPath.replace('.NEW.webp', '.webp');
    
    try {
      // Delete original
      await fs.unlink(originalPath);
      // Rename .NEW to original
      await fs.rename(newPath, originalPath);
      replaced++;
      console.log(`✓ Replaced ${newFile.replace('.NEW.webp', '.webp')}`);
    } catch (error) {
      errors++;
      console.error(`✗ Error replacing ${newFile}:`, error.message);
    }
  }
  
  console.log(`\n✅ Done! Replaced ${replaced} files`);
  if (errors > 0) {
    console.log(`⚠ Errors: ${errors}`);
  }
}

replaceNewFiles().catch(console.error);
