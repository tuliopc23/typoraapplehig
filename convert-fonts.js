#!/usr/bin/env node

/**
 * Font Conversion Script
 * Converts OTF fonts to WOFF2 for better web performance
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const FONTS_DIR = './apple-hig-theme/fonts';
const FONTS = [
  { name: 'SF-Pro-Display-Regular', weights: [400, 500, 600, 700] },
  { name: 'SF-Pro-Text-Regular', weights: [400, 500, 600, 700] },
  { name: 'SF-Mono-Regular', weights: [400, 500, 600, 700] }
];

class FontConverter {
  constructor() {
    this.checkDependencies();
  }

  checkDependencies() {
    console.log('🔍 Checking dependencies...');
    
    try {
      execSync('which pyftsubset', { stdio: 'ignore' });
      console.log('✅ fonttools found');
    } catch (error) {
      console.log('❌ fonttools not found');
      console.log('📦 Install with: pip install fonttools[woff]');
      process.exit(1);
    }
  }

  convertFont(fontName, weight) {
    const inputFile = path.join(FONTS_DIR, `${fontName}.otf`);
    const outputFile = path.join(FONTS_DIR, `${fontName}-${weight}.woff2`);
    
    if (!fs.existsSync(inputFile)) {
      console.log(`⚠️  Input file not found: ${inputFile}`);
      return false;
    }

    if (fs.existsSync(outputFile)) {
      console.log(`⏭️  Output file already exists: ${outputFile}`);
      return true;
    }

    try {
      console.log(`🔄 Converting ${fontName} (weight: ${weight})...`);
      
      const command = `pyftsubset "${inputFile}" --output-file="${outputFile}" --flavor=woff2 --weights=${weight} --layout-features='*' --glyph-names --symbol-cmap --legacy-cmap --notdef-glyph --notdef-outline --recommended-glyphs`;
      
      execSync(command, { stdio: 'pipe' });
      console.log(`✅ Converted: ${outputFile}`);
      return true;
    } catch (error) {
      console.log(`❌ Failed to convert ${fontName}: ${error.message}`);
      return false;
    }
  }

  convertAllFonts() {
    console.log('🚀 Starting font conversion...\n');
    
    let successCount = 0;
    let totalCount = 0;

    FONTS.forEach(font => {
      font.weights.forEach(weight => {
        totalCount++;
        if (this.convertFont(font.name, weight)) {
          successCount++;
        }
      });
    });

    console.log(`\n📊 Conversion Results:`);
    console.log(`✅ Successful: ${successCount}/${totalCount}`);
    console.log(`❌ Failed: ${totalCount - successCount}/${totalCount}`);

    if (successCount === totalCount) {
      console.log('\n🎉 All fonts converted successfully!');
      this.updateCSS();
    } else {
      console.log('\n⚠️  Some fonts failed to convert. Check the errors above.');
    }
  }

  updateCSS() {
    console.log('\n🔄 Updating CSS with converted fonts...');
    
    const cssFile = path.join('./apple-hig-theme', 'apple-hig-typora.css');
    
    if (!fs.existsSync(cssFile)) {
      console.log('❌ CSS file not found');
      return;
    }

    let css = fs.readFileSync(cssFile, 'utf8');
    
    // Update font-face declarations to use WOFF2 first
    css = css.replace(
      /src: url\("\.\/fonts\/([^"]+)\.woff2"\) format\("woff2"\),\s*url\("\.\/fonts\/([^"]+)\.otf"\) format\("opentype"\);/g,
      'src: url("./fonts/$1.woff2") format("woff2"), url("./fonts/$2.otf") format("opentype");'
    );

    fs.writeFileSync(cssFile, css);
    console.log('✅ CSS updated successfully!');
  }

  createFontManifest() {
    console.log('\n📝 Creating font manifest...');
    
    const manifest = {
      fonts: FONTS.map(font => ({
        name: font.name,
        weights: font.weights,
        formats: ['woff2', 'otf'],
        status: 'converted'
      })),
      lastUpdated: new Date().toISOString(),
      version: '1.0.0'
    };

    fs.writeFileSync(
      path.join(FONTS_DIR, 'font-manifest.json'),
      JSON.stringify(manifest, null, 2)
    );
    
    console.log('✅ Font manifest created!');
  }
}

// Main execution
console.log('🍎 Apple HIG Font Converter');
console.log('============================\n');

const converter = new FontConverter();
converter.convertAllFonts();
converter.createFontManifest();

console.log('\n📋 Next Steps:');
console.log('1. Test the theme in Typora');
console.log('2. Verify fonts are loading correctly');
console.log('3. Check performance improvements');
console.log('4. Test on different platforms if needed');

console.log('\n🎯 Font files are now optimized for web use!');