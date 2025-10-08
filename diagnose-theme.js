// Apple HIG Theme Diagnostic Script
// Run this in browser console to check theme loading

console.log("🔍 Apple HIG Theme Diagnostic Starting...");

// Check if CSS is loaded
const stylesheets = Array.from(document.styleSheets);
const appleHigTheme = stylesheets.find(sheet => {
    try {
        return sheet.href && sheet.href.includes('apple-hig.css');
    } catch (e) {
        return false;
    }
});

if (appleHigTheme) {
    console.log("✅ Apple HIG CSS file loaded successfully");
} else {
    console.log("❌ Apple HIG CSS file not found");
}

// Check font loading
const checkFont = (fontFamily) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Test with fallback font
    ctx.font = '16px monospace';
    const fallbackWidth = ctx.measureText('Test').width;
    
    // Test with target font
    ctx.font = `16px "${fontFamily}", monospace`;
    const targetWidth = ctx.measureText('Test').width;
    
    return targetWidth !== fallbackWidth;
};

console.log("🔤 Font Loading Check:");
console.log(`SF Pro Display: ${checkFont('SF Pro Display') ? '✅' : '❌'}`);
console.log(`SF Pro Text: ${checkFont('SF Pro Text') ? '✅' : '❌'}`);
console.log(`SF Mono: ${checkFont('SF Mono') ? '✅' : '❌'}`);

// Check CSS custom properties
const rootStyles = getComputedStyle(document.documentElement);
const checkCustomProperty = (prop) => {
    const value = rootStyles.getPropertyValue(prop);
    return value && value !== '';
};

console.log("🎨 CSS Custom Properties Check:");
console.log(`--color-text-primary: ${checkCustomProperty('--color-text-primary') ? '✅' : '❌'}`);
console.log(`--color-accent: ${checkCustomProperty('--color-accent') ? '✅' : '❌'}`);
console.log(`--font-family-primary: ${checkCustomProperty('--font-family-primary') ? '✅' : '❌'}`);

// Check Typora-specific elements
const writeElement = document.getElementById('write');
if (writeElement) {
    console.log("✅ #write element found (Typora structure)");
    
    // Check if styles are applied
    const computedStyle = getComputedStyle(writeElement);
    const fontFamily = computedStyle.fontFamily;
    console.log(`Font family applied: ${fontFamily}`);
    
    const maxWidth = computedStyle.maxWidth;
    console.log(`Max width applied: ${maxWidth}`);
} else {
    console.log("❌ #write element not found (not in Typora)");
}

// Check for glass effects
const glassElements = document.querySelectorAll('.glass, .md-fences, .md-alert');
console.log(`🔮 Glass elements found: ${glassElements.length}`);

// Check backdrop-filter support
const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(10px)');
console.log(`Backdrop-filter support: ${supportsBackdropFilter ? '✅' : '❌'}`);

console.log("🏁 Diagnostic complete!");