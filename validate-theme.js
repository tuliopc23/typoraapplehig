#!/usr/bin/env node

// Apple HIG Theme Validation Script
import fs from 'fs';
import path from 'path';

console.log('🔍 Apple HIG Theme Validation Starting...\n');

const themePath = 'apple-hig-theme/apple-hig.css';
const fontDir = 'apple-hig-theme/apple-hig';

// Check if theme file exists
if (!fs.existsSync(themePath)) {
    console.error('❌ Theme CSS file not found:', themePath);
    process.exit(1);
}
console.log('✅ Theme CSS file found');

// Check if font directory exists
if (!fs.existsSync(fontDir)) {
    console.error('❌ Font directory not found:', fontDir);
    process.exit(1);
}
console.log('✅ Font directory found');

// Check font files
const fontFiles = [
    'SF Pro/SF Pro.woff2',
    'SF Pro/SF Pro.woff',
    'SF Pro Text/SF Pro Text.woff2',
    'SF Pro Text/SF Pro Text.woff',
    'SF Mono Medium/SF Mono Medium.woff2',
    'SF Mono Medium/SF Mono Medium.woff'
];

console.log('\n🔤 Font Files Check:');
fontFiles.forEach(fontFile => {
    const fullPath = path.join(fontDir, fontFile);
    if (fs.existsSync(fullPath)) {
        console.log(`✅ ${fontFile}`);
    } else {
        console.log(`❌ ${fontFile} - MISSING`);
    }
});

// Read and validate CSS
const cssContent = fs.readFileSync(themePath, 'utf8');

// Check for font path issues
console.log('\n🔗 Font Path Validation:');
const fontPathRegex = /url\("\.\/apple-hig\/([^"]+)"\)/g;
let match;
let fontPaths = [];
while ((match = fontPathRegex.exec(cssContent)) !== null) {
    fontPaths.push(match[1]);
}

fontPaths.forEach(fontPath => {
    const fullPath = path.join(fontDir, fontPath);
    if (fs.existsSync(fullPath)) {
        console.log(`✅ ${fontPath}`);
    } else {
        console.log(`❌ ${fontPath} - FILE NOT FOUND`);
    }
});

// Check for CSS syntax issues
console.log('\n📝 CSS Syntax Check:');
const cssIssues = [];

// Check for unclosed brackets
const openBrackets = (cssContent.match(/\{/g) || []).length;
const closeBrackets = (cssContent.match(/\}/g) || []).length;
if (openBrackets !== closeBrackets) {
    cssIssues.push(`Mismatched brackets: ${openBrackets} open, ${closeBrackets} close`);
}

// Check for missing semicolons in key places (but ignore closing braces and valid CSS)
const missingSemicolons = cssContent.match(/[^;{}]\s*}/g);
if (missingSemicolons && missingSemicolons.length > 0) {
    // Filter out valid cases like media query endings
    const realIssues = missingSemicolons.filter(match => {
        const beforeBrace = match.slice(0, -1).trim();
        return !beforeBrace.match(/^(and|or|not|only|screen|print|all)$/) && 
               !beforeBrace.match(/^\d+px$/) &&
               !beforeBrace.match(/^[a-zA-Z-]+$/) &&
               beforeBrace.length > 0;
    });
    if (realIssues.length > 0) {
        cssIssues.push(`Potential missing semicolons: ${realIssues.length} found`);
    }
}

// Check for @font-face declarations
const fontFaceCount = (cssContent.match(/@font-face/g) || []).length;
console.log(`✅ @font-face declarations: ${fontFaceCount}`);

if (cssIssues.length === 0) {
    console.log('✅ CSS syntax appears valid');
} else {
    console.log('❌ CSS syntax issues found:');
    cssIssues.forEach(issue => console.log(`  - ${issue}`));
}

// Check for Typora-specific selectors
console.log('\n🎯 Typora Selectors Check:');
const typoraSelectors = [
    '#write',
    '.md-fences',
    '.md-task-list-item',
    '.md-alert',
    '.CodeMirror'
];

typoraSelectors.forEach(selector => {
    if (cssContent.includes(selector)) {
        console.log(`✅ ${selector}`);
    } else {
        console.log(`❌ ${selector} - MISSING`);
    }
});

// Check for CSS custom properties
console.log('\n🎨 CSS Custom Properties Check:');
const customProps = (cssContent.match(/--[a-zA-Z-]+/g) || []).length;
console.log(`✅ Custom properties found: ${customProps}`);

// Check for fallbacks
console.log('\n🛡️ Fallback Support Check:');
const hasFontFallbacks = cssContent.includes('-apple-system, BlinkMacSystemFont');
const hasBackdropFilterFallback = cssContent.includes('@supports not (backdrop-filter');
const hasReducedMotionSupport = cssContent.includes('prefers-reduced-motion');

console.log(`Font fallbacks: ${hasFontFallbacks ? '✅' : '❌'}`);
console.log(`Backdrop-filter fallback: ${hasBackdropFilterFallback ? '✅' : '❌'}`);
console.log(`Reduced motion support: ${hasReducedMotionSupport ? '✅' : '❌'}`);

console.log('\n🏁 Validation complete!');

if (cssIssues.length === 0) {
    console.log('🎉 Theme appears to be ready for installation!');
} else {
    console.log('⚠️  Please fix the issues above before installing.');
}