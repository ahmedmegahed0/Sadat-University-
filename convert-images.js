import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './src/assets';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    const inputPath = path.join(dir, file);
    const stat = fs.statSync(inputPath);
    if (stat.size > 100 * 1024) { // > 100KB
      const ext = path.extname(file);
      const outputName = file.replace(ext, '.webp');
      const outputPath = path.join(dir, outputName);
      console.log(`Converting ${file} to WebP...`);
      sharp(inputPath).webp({ quality: 80 }).toFile(outputPath)
        .then(() => {
          console.log(`Successfully converted ${file} to ${outputName}`);
          fs.unlinkSync(inputPath); // remove old file
        })
        .catch(err => console.error(`Error converting ${file}`, err));
    }
  }
}
