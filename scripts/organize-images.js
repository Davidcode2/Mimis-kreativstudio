#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../public/images');

// Map files to their correct directories based on the service they belong to
const fileMappings = {
  // Blumenkränze
  'kranz_standard.webp': 'services/blumenkraenze/',
  'Kranz Standard .webp': 'services/blumenkraenze/',
  'trauerkranz.webp': 'services/blumenkraenze/',
  'trauerkranz_auf_fell_weiss.webp': 'services/blumenkraenze/',
  
  // Loops
  'loop_standard_rot_gruen.webp': 'services/loops/',
  'Loop Standard .webp': 'services/loops/',
  'loop_gross_arbeitstisch.webp': 'services/loops/',
  
  // Blumensträuße
  'brautsrauss_lila.webp': 'services/blumenstrausse/',
  'strauss_weiss.webp': 'services/blumenstrausse/',
  
  // Adventskränze
  'kranz_hortensie_mit_kerze.webp': 'services/adventskraenze/',
  'kranz_lang_kerzen_weiss.webp': 'services/adventskraenze/',
  
  // Frisuren
  'haarkranz_ganz.webp': 'services/frisuren/',
  
  // Workshops
  'loop_workshop_done_small.webp': 'services/workshops/',
  'loop_workshop_klein.webp': 'services/workshops/',
  'workshop_schere.webp': 'services/workshops/',
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}

async function organizeImages() {
  console.log('Organizing images into correct directories...\n');
  
  for (const [filename, targetDir] of Object.entries(fileMappings)) {
    const sourcePath = path.join(IMAGES_DIR, filename);
    const targetPath = path.join(IMAGES_DIR, targetDir, filename);
    
    if (fs.existsSync(sourcePath)) {
      ensureDir(path.dirname(targetPath));
      fs.renameSync(sourcePath, targetPath);
      console.log(`Moved: ${filename} -> ${targetDir}`);
    } else {
      console.log(`Warning: ${filename} not found in root`);
    }
  }
  
  console.log('\nDone! Images organized.');
}

organizeImages().catch(console.error);