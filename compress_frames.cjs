const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const framesDir = path.join(__dirname, 'public', 'frames');
const files = fs.readdirSync(framesDir).filter(f => f.endsWith('.png'));

console.log(`Starting compression for ${files.length} frames...`);

async function compressAll() {
  let count = 0;
  for (const file of files) {
    const filePath = path.join(framesDir, file);
    const webpPath = path.join(framesDir, file.replace('.png', '.webp'));
    const jpgPath = path.join(framesDir, file.replace('.png', '.jpg'));

    // Convert to webp and jpg
    await sharp(filePath)
      .resize(1280, 720, { fit: 'cover' })
      .webp({ quality: 75 })
      .toFile(webpPath);

    await sharp(filePath)
      .resize(1280, 720, { fit: 'cover' })
      .jpeg({ quality: 75 })
      .toFile(jpgPath);

    // Delete uncompressed 2.76MB PNG
    try {
      fs.unlinkSync(filePath);
    } catch (e) {}

    count++;
    if (count % 20 === 0 || count === files.length) {
      console.log(`Processed ${count}/${files.length} frames...`);
    }
  }
  console.log('Frame compression finished 100%!');
}

compressAll().catch(err => {
  console.error('Error compressing frames:', err);
});
