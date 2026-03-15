#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../public/images');

async function convertImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const basename = path.basename(inputPath, ext);
  const outputPath = path.join(path.dirname(inputPath), `${basename}.webp`);
  
  // Skip if already webp
  if (ext === '.webp') {
    console.log(`Skipping (already WebP): ${inputPath}`);
    return;
  }
  
  // Skip if webp already exists
  if (fs.existsSync(outputPath)) {
    console.log(`Skipping (WebP exists): ${inputPath}`);
    return;
  }
  
  try {
    console.log(`Converting: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    
    // Convert to WebP with quality 85 (good balance)
    await sharp(inputPath)
      .webp({ quality: 85, effort: 4 })
      .toFile(outputPath);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB -> WebP: ${(webpSize / 1024 / 1024).toFixed(2)} MB (${savings}% smaller)`);
    
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error.message);
  }
}

async function findAndConvertImages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await findAndConvertImages(fullPath);
    } else {
      // Check if it's an image file
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        await convertImage(fullPath);
      }
    }
  }
}

async function main() {
  console.log('Starting image conversion to WebP...\n');
  console.log(`Scanning: ${IMAGES_DIR}\n`);
  
  await findAndConvertImages(IMAGES_DIR);
  
  console.log('\nConversion complete!');
  console.log('\nNext steps:');
  console.log('1. Update image references in code to use .webp extension');
  console.log('2. Test the website');
  console.log('3. Build and verify image size reduction');
}

main().catch(console.error);