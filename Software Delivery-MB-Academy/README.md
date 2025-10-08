# MB Academy - Software Delivery Documents

This folder contains the consolidated MB Academy documents with Apple HIG theme support.

## Files

- `MB-Academy-Consolidado.pt-BR.md` - Original document with complex HTML
- `MB-Academy-Consolidado-Fixed.pt-BR.md` - **Fixed document for Typora** ⭐
- `apple-hig.css` - Apple HIG theme file
- `assets/` - Contains Icon1.png and Icon1.svg
- `debug-assets.md` - Asset testing document
- `fixed-cover.html` - Browser test version
- `ASSET-DEBUGGING-GUIDE.md` - Detailed debugging guide

## Quick Start

1. **Open in Typora**: Use `MB-Academy-Consolidado-Fixed.pt-BR.md`
2. **Apply theme**: Select "Apple Hig" theme in Typora
3. **Verify assets**: Check that images load correctly

## Issues Fixed

### ✅ HTML Rendering
- Replaced CSS custom properties with hardcoded values
- Simplified HTML structure for Typora compatibility
- Used inline styles instead of external CSS

### ✅ Asset Loading
- Fixed image paths to use `assets/` folder
- Added proper fallbacks for SVG/PNG
- Ensured relative path compatibility

### ✅ Theme Integration
- Updated theme CSS for better asset handling
- Added specific styling for cover images
- Improved SVG and PNG support

## Testing

1. **Asset Test**: Open `debug-assets.md` to test image loading
2. **Browser Test**: Open `fixed-cover.html` to test styling
3. **Full Document**: Use the fixed markdown file in Typora

## Troubleshooting

If images don't load:
1. Check that `assets/` folder is in the same directory as the markdown file
2. Verify file names match exactly (case-sensitive)
3. Try the debug document to test different path formats

If HTML doesn't render:
1. Use the fixed version with inline styles
2. Check Typora's HTML support settings
3. Test in browser first using the HTML file