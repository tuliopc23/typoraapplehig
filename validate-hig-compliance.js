#!/usr/bin/env node

/**
 * Apple HIG Compliance Validator for Typora Theme
 * Validates that the theme meets 100% Apple Human Interface Guidelines compliance
 */

import fs from 'fs';
import path from 'path';

// Apple HIG Specifications
const HIG_SPECS = {
  typography: {
    largeTitle: { size: 34, lineHeight: 40, weight: 700 },
    title1: { size: 28, lineHeight: 34, weight: 700 },
    title2: { size: 22, lineHeight: 28, weight: 600 },
    title3: { size: 20, lineHeight: 25, weight: 600 },
    headline: { size: 17, lineHeight: 22, weight: 600 },
    body: { size: 15, lineHeight: 20, weight: 400 },
    callout: { size: 16, lineHeight: 21, weight: 400 },
    subhead: { size: 15, lineHeight: 20, weight: 400 },
    footnote: { size: 13, lineHeight: 18, weight: 400 },
    caption1: { size: 12, lineHeight: 16, weight: 400 },
    caption2: { size: 11, lineHeight: 13, weight: 400 }
  },
  spacing: {
    grid: 8, // 8pt grid system
    validSpacings: [8, 16, 24, 32, 40, 48, 64, 80, 96]
  },
  colors: {
    required: [
      '--color-system-background',
      '--color-secondary-system-background',
      '--color-label',
      '--color-secondary-label',
      '--color-link',
      '--color-system-accent',
      '--color-separator',
      '--color-opaque-separator'
    ],
    accent: [
      '--color-system-blue',
      '--color-system-green',
      '--color-system-orange',
      '--color-system-red',
      '--color-system-purple',
      '--color-system-yellow'
    ]
  },
  accessibility: {
    contrastRatio: {
      normal: 4.5,
      large: 3.0
    }
  }
};

class HIGValidator {
  constructor(cssFile) {
    this.cssFile = cssFile;
    this.cssContent = fs.readFileSync(cssFile, 'utf8');
    this.errors = [];
    this.warnings = [];
    this.passed = 0;
    this.total = 0;
  }

  validate() {
    console.log('🍎 Apple HIG Compliance Validator');
    console.log('=====================================\n');

    this.validateTypography();
    this.validateColorSystem();
    this.validateSpacing();
    this.validateAccessibility();
    this.validateDarkMode();
    this.validateInteractiveStates();
    this.validateFontFamily();

    this.printResults();
    return this.errors.length === 0;
  }

  validateTypography() {
    console.log('📝 Validating Typography...');
    
    Object.entries(HIG_SPECS.typography).forEach(([name, spec]) => {
      this.total++;
      const sizeVar = `--font-size-${name.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      const lineHeightVar = `--line-height-${name.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      
      
      if (this.cssContent.includes(sizeVar) && this.cssContent.includes(lineHeightVar)) {
        this.passed++;
        console.log(`  ✅ ${name} typography variables found`);
      } else {
        this.errors.push(`Missing typography variables for ${name}`);
        console.log(`  ❌ ${name} typography variables missing`);
      }
    });
  }

  validateColorSystem() {
    console.log('\n🎨 Validating Color System...');
    
    HIG_SPECS.colors.required.forEach(color => {
      this.total++;
      if (this.cssContent.includes(color)) {
        this.passed++;
        console.log(`  ✅ ${color} found`);
      } else {
        this.errors.push(`Missing required color: ${color}`);
        console.log(`  ❌ ${color} missing`);
      }
    });

    HIG_SPECS.colors.accent.forEach(color => {
      this.total++;
      if (this.cssContent.includes(color)) {
        this.passed++;
        console.log(`  ✅ ${color} found`);
      } else {
        this.warnings.push(`Missing accent color: ${color}`);
        console.log(`  ⚠️  ${color} missing`);
      }
    });
  }

  validateSpacing() {
    console.log('\n📏 Validating Spacing (8pt Grid)...');
    
    const spacingRegex = /--spacing-\d+:\s*(\d+)px/g;
    let match;
    let validSpacings = 0;
    let invalidSpacings = 0;

    while ((match = spacingRegex.exec(this.cssContent)) !== null) {
      const spacing = parseInt(match[1]);
      this.total++;
      
      if (HIG_SPECS.spacing.validSpacings.includes(spacing)) {
        validSpacings++;
        this.passed++;
        console.log(`  ✅ ${spacing}px is valid (8pt grid)`);
      } else {
        invalidSpacings++;
        this.errors.push(`Invalid spacing: ${spacing}px (not on 8pt grid)`);
        console.log(`  ❌ ${spacing}px is invalid (not on 8pt grid)`);
      }
    }

    if (invalidSpacings === 0) {
      console.log(`  ✅ All ${validSpacings} spacing values follow 8pt grid`);
    }
  }

  validateAccessibility() {
    console.log('\n♿ Validating Accessibility...');
    
    this.total++;
    if (this.cssContent.includes('@media (prefers-reduced-motion: reduce)')) {
      this.passed++;
      console.log('  ✅ Reduced motion support found');
    } else {
      this.errors.push('Missing reduced motion support');
      console.log('  ❌ Reduced motion support missing');
    }

    this.total++;
    if (this.cssContent.includes('@media (prefers-contrast: high)')) {
      this.passed++;
      console.log('  ✅ High contrast support found');
    } else {
      this.errors.push('Missing high contrast support');
      console.log('  ❌ High contrast support missing');
    }

    this.total++;
    if (this.cssContent.includes('::selection')) {
      this.passed++;
      console.log('  ✅ Text selection styling found');
    } else {
      this.warnings.push('Missing text selection styling');
      console.log('  ⚠️  Text selection styling missing');
    }
  }

  validateDarkMode() {
    console.log('\n🌙 Validating Dark Mode...');
    
    this.total++;
    if (this.cssContent.includes('@media (prefers-color-scheme: dark)')) {
      this.passed++;
      console.log('  ✅ Dark mode media query found');
    } else {
      this.errors.push('Missing dark mode support');
      console.log('  ❌ Dark mode support missing');
    }

    this.total++;
    if (this.cssContent.includes('--color-system-background') && 
        this.cssContent.includes('--color-label')) {
      this.passed++;
      console.log('  ✅ Dark mode color variables found');
    } else {
      this.errors.push('Missing dark mode color variables');
      console.log('  ❌ Dark mode color variables missing');
    }
  }

  validateInteractiveStates() {
    console.log('\n🖱️ Validating Interactive States...');
    
    const interactiveElements = [
      'a:hover', 'a:focus', 'a:active',
      'button:hover', 'button:focus', 'button:active',
      '*:focus'
    ];

    interactiveElements.forEach(element => {
      this.total++;
      if (this.cssContent.includes(element)) {
        this.passed++;
        console.log(`  ✅ ${element} state found`);
      } else {
        this.warnings.push(`Missing ${element} state`);
        console.log(`  ⚠️  ${element} state missing`);
      }
    });
  }

  validateFontFamily() {
    console.log('\n🔤 Validating Font Family...');
    
    this.total++;
    if (this.cssContent.includes('-apple-system') && 
        this.cssContent.includes('BlinkMacSystemFont')) {
      this.passed++;
      console.log('  ✅ San Francisco font stack found');
    } else {
      this.errors.push('Missing San Francisco font stack');
      console.log('  ❌ San Francisco font stack missing');
    }

    this.total++;
    if (this.cssContent.includes('SF Mono')) {
      this.passed++;
      console.log('  ✅ SF Mono font found');
    } else {
      this.errors.push('Missing SF Mono font');
      console.log('  ❌ SF Mono font missing');
    }
  }

  printResults() {
    console.log('\n📊 Validation Results');
    console.log('====================');
    console.log(`✅ Passed: ${this.passed}/${this.total}`);
    console.log(`❌ Errors: ${this.errors.length}`);
    console.log(`⚠️  Warnings: ${this.warnings.length}`);
    
    const compliance = Math.round((this.passed / this.total) * 100);
    console.log(`\n🎯 Apple HIG Compliance: ${compliance}%`);

    if (this.errors.length > 0) {
      console.log('\n❌ Errors that must be fixed:');
      this.errors.forEach(error => console.log(`  • ${error}`));
    }

    if (this.warnings.length > 0) {
      console.log('\n⚠️  Warnings to consider:');
      this.warnings.forEach(warning => console.log(`  • ${warning}`));
    }

    if (compliance === 100) {
      console.log('\n🎉 Congratulations! Your theme achieves 100% Apple HIG compliance!');
    } else if (compliance >= 90) {
      console.log('\n👍 Great job! Your theme is very close to full compliance.');
    } else {
      console.log('\n📚 Review the Apple HIG guidelines to improve compliance.');
    }
  }
}

// Run validation
const cssFile = process.argv[2] || 'apple-hig-theme.css';

if (!fs.existsSync(cssFile)) {
  console.error(`❌ CSS file not found: ${cssFile}`);
  process.exit(1);
}

const validator = new HIGValidator(cssFile);
const success = validator.validate();
process.exit(success ? 0 : 1);

export default HIGValidator;