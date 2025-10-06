# Font Setup Guide for Apple HIG Typora Theme

## Font Format Options

### Option 1: Web Fonts (Recommended)
- ✅ **Best compatibility** across all platforms
- ✅ **Smaller file sizes** (better performance)
- ✅ **Faster loading** times
- ✅ **Better fallbacks** if fonts fail to load

### Option 2: OTF Fonts (Your Current Setup)
- ✅ **Will work** on macOS (San Francisco is system font)
- ⚠️ **May not work** on Windows/Linux
- ❌ **Larger file sizes**
- ❌ **Slower loading** times

## Current Font Setup

The theme is configured to use both web fonts and OTF fonts as fallbacks:

```css
@font-face {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url("./fonts/SF-Pro-Display-Regular.woff2") format("woff2"),
       url("./fonts/SF-Pro-Display-Regular.otf") format("opentype");
}
```

## Required Font Files

### For Web Fonts (Recommended)
Place these files in the `fonts/` folder:

```
apple-hig-theme/
├── apple-hig-typora.css
└── fonts/
    ├── SF-Pro-Display-Regular.woff2
    ├── SF-Pro-Text-Regular.woff2
    └── SF-Mono-Regular.woff2
```

### For OTF Fonts (Your Current Setup)
Place these files in the `fonts/` folder:

```
apple-hig-theme/
├── apple-hig-typora.css
└── fonts/
    ├── SF-Pro-Display-Regular.otf
    ├── SF-Pro-Text-Regular.otf
    └── SF-Mono-Regular.otf
```

## Font Conversion (OTF to WOFF2)

If you want to convert your OTF fonts to WOFF2 for better performance:

### Method 1: Using FontTools (Python)
```bash
# Install fonttools
pip install fonttools[woff]

# Convert fonts
pyftsubset SF-Pro-Display-Regular.otf --output-file=SF-Pro-Display-Regular.woff2 --flavor=woff2
pyftsubset SF-Pro-Text-Regular.otf --output-file=SF-Pro-Text-Regular.woff2 --flavor=woff2
pyftsubset SF-Mono-Regular.otf --output-file=SF-Mono-Regular.woff2 --flavor=woff2
```

### Method 2: Using Online Converters
1. Go to [CloudConvert](https://cloudconvert.com/otf-to-woff2)
2. Upload your OTF files
3. Convert to WOFF2 format
4. Download the converted files

### Method 3: Using Node.js
```bash
# Install ttf2woff2
npm install -g ttf2woff2

# Convert fonts (you may need to rename .otf to .ttf first)
ttf2woff2 SF-Pro-Display-Regular.ttf SF-Pro-Display-Regular.woff2
ttf2woff2 SF-Pro-Text-Regular.ttf SF-Pro-Text-Regular.woff2
ttf2woff2 SF-Mono-Regular.ttf SF-Mono-Regular.woff2
```

## Font Fallback Strategy

The theme uses a comprehensive fallback strategy:

```css
--font-family-sf: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-family-sf-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
```

### Fallback Order:
1. **System Fonts**: `-apple-system`, `BlinkMacSystemFont` (macOS)
2. **Custom Fonts**: `"SF Pro Display"`, `"SF Pro Text"`, `"SF Mono"`
3. **Web Safe Fonts**: `Helvetica Neue`, `Helvetica`, `Arial`
4. **Generic**: `sans-serif`, `monospace`

## Installation Instructions

### Step 1: Prepare Font Files
1. **If using OTF fonts**: Copy your OTF files to the `fonts/` folder
2. **If using WOFF2 fonts**: Convert your OTF files to WOFF2 and place them in the `fonts/` folder

### Step 2: Install Theme
1. Copy the entire `apple-hig-theme/` folder to your Typora themes directory
2. Restart Typora
3. Select "Apple HIG" from the themes menu

### Step 3: Verify Installation
1. Check that fonts are loading correctly
2. Test both light and dark modes
3. Verify typography hierarchy

## Troubleshooting

### Fonts Not Loading
1. **Check file paths**: Ensure fonts are in the correct `fonts/` folder
2. **Check file names**: Ensure font file names match the CSS exactly
3. **Check file format**: Ensure fonts are in the correct format (WOFF2 or OTF)
4. **Check permissions**: Ensure Typora can read the font files

### Fallback Fonts Being Used
1. **Check browser console**: Look for font loading errors
2. **Check network tab**: Verify font files are being loaded
3. **Check file integrity**: Ensure font files are not corrupted

### Performance Issues
1. **Use WOFF2 fonts**: Better compression and faster loading
2. **Optimize font files**: Remove unused glyphs and weights
3. **Use font-display: swap**: Prevents invisible text during font load

## Font Optimization

### Subsetting Fonts
To reduce file sizes, you can subset fonts to include only the characters you need:

```bash
# Using pyftsubset
pyftsubset SF-Pro-Display-Regular.otf \
  --output-file=SF-Pro-Display-Regular.woff2 \
  --flavor=woff2 \
  --text-file=characters.txt \
  --layout-features='*' \
  --glyph-names \
  --symbol-cmap \
  --legacy-cmap \
  --notdef-glyph \
  --notdef-outline \
  --recommended-glyphs
```

### Character Set
For a typical markdown editor, you'll need:
- **Latin characters**: A-Z, a-z, 0-9
- **Punctuation**: Common punctuation marks
- **Symbols**: Mathematical and special symbols
- **Unicode ranges**: Basic Latin, Latin-1 Supplement

## Testing

### Cross-Platform Testing
1. **macOS**: Test with system fonts and custom fonts
2. **Windows**: Test with fallback fonts
3. **Linux**: Test with fallback fonts

### Browser Testing
1. **Safari**: Native Apple experience
2. **Chrome**: Full web font support
3. **Firefox**: Full web font support
4. **Edge**: Full web font support

## Performance Considerations

### File Sizes
- **WOFF2**: ~50-70% smaller than OTF
- **Subset fonts**: ~80-90% smaller than full fonts
- **Multiple weights**: Each weight adds to file size

### Loading Strategy
- **font-display: swap**: Shows fallback text immediately
- **Preload fonts**: Load critical fonts early
- **Lazy load**: Load non-critical fonts later

## Recommendations

### For Best Experience
1. **Use WOFF2 fonts**: Better performance and compatibility
2. **Subset fonts**: Reduce file sizes
3. **Test thoroughly**: Verify across platforms
4. **Monitor performance**: Check loading times

### For Development
1. **Start with OTF**: Easier to work with initially
2. **Convert to WOFF2**: For production use
3. **Test fallbacks**: Ensure graceful degradation
4. **Optimize gradually**: Improve performance over time

---

**Note**: The theme will work with OTF fonts, but WOFF2 fonts provide the best experience across all platforms.