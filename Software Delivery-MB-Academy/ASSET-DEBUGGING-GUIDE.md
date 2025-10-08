# Asset Debugging Guide for Typora

## Issues Identified

### 1. HTML Rendering Issues
- **Problem**: Complex HTML with CSS custom properties not rendering
- **Cause**: Typora has limited HTML support and may not process CSS custom properties in HTML context
- **Solution**: Use inline styles with hardcoded values instead of CSS variables

### 2. Asset Path Issues
- **Problem**: Images not loading from relative paths
- **Cause**: Typora may have specific requirements for asset paths
- **Solution**: Use relative paths from the document location

### 3. SVG Support
- **Problem**: SVG images may not render properly
- **Cause**: Typora's SVG support may be limited
- **Solution**: Provide PNG fallbacks and test SVG support

## Solutions Implemented

### 1. Fixed HTML Rendering
- Replaced CSS custom properties with hardcoded values
- Simplified HTML structure for better Typora compatibility
- Used inline styles instead of external CSS classes

### 2. Fixed Asset Paths
- Changed from `Icon1.png` to `assets/Icon1.png`
- Ensured assets are in the correct relative location
- Added proper alt text for accessibility

### 3. Added Fallbacks
- PNG fallback for SVG images
- Simplified CSS for better compatibility
- Removed complex CSS features that might not work

## Testing Steps

1. **Open the fixed document**: `MB-Academy-Consolidado-Fixed.pt-BR.md`
2. **Check image loading**: Verify that images appear correctly
3. **Test HTML rendering**: Ensure the cover layouts display properly
4. **Verify styling**: Check that the Apple HIG styling is applied

## File Structure

```
Software Delivery-MB-Academy/
├── apple-hig.css                    # Theme file
├── assets/
│   ├── Icon1.png                   # PNG version of icon
│   └── Icon1.svg                   # SVG version of icon
├── MB-Academy-Consolidado.pt-BR.md # Original document
├── MB-Academy-Consolidado-Fixed.pt-BR.md # Fixed document
├── debug-assets.md                 # Asset testing document
├── fixed-cover.html                # HTML test version
└── ASSET-DEBUGGING-GUIDE.md       # This guide
```

## Common Issues and Solutions

### Images Not Loading
- **Check path**: Ensure path is relative to the markdown file
- **Check file exists**: Verify the asset file is in the correct location
- **Check permissions**: Ensure file is readable

### HTML Not Rendering
- **Simplify HTML**: Use basic HTML elements
- **Use inline styles**: Avoid external CSS classes
- **Test in browser**: Use the HTML test file to verify

### Styling Issues
- **Use hardcoded values**: Replace CSS custom properties
- **Test incrementally**: Add styles one at a time
- **Check Typora compatibility**: Some CSS features may not work

## Browser Test

To test the styling in a browser:
1. Open `fixed-cover.html` in your browser
2. Verify that the Apple HIG theme loads
3. Check that images display correctly
4. Verify that the layout matches expectations

## Next Steps

1. Test the fixed document in Typora
2. Verify all assets load correctly
3. Check that the styling matches the Apple HIG design
4. Make any necessary adjustments based on testing results