# Web Fonts Setup Guide

## Required Web Font Files

Place these **3 WOFF2 font files** in the `fonts/` directory:

```
apple-hig-theme/
├── apple-hig-typora.css
└── fonts/
    ├── SF Pro/
    │   └── SF Pro.woff2
    ├── SF Pro Text/
    │   └── SF Pro Text.woff2
    └── SF Mono Medium/
        └── SF Mono Medium.woff2
```

## Font Sources

### Option 1: Apple Developer (Recommended)
- **URL**: https://developer.apple.com/fonts/
- **Look for**: "SF Pro Display", "SF Pro Text", "SF Mono"
- **Format**: Download WOFF2 versions

### Option 2: Convert from OTF
If you have OTF fonts, convert them to WOFF2:
```bash
# Using fonttools
pyftsubset SF-Pro-Display-Regular.otf --output-file=SF-Pro-Display-Regular.woff2 --flavor=woff2
pyftsubset SF-Pro-Text-Regular.otf --output-file=SF-Pro-Text-Regular.woff2 --flavor=woff2
pyftsubset SF-Mono-Regular.otf --output-file=SF-Mono-Regular.woff2 --flavor=woff2
```

## Installation

1. **Download** the 3 WOFF2 font files
2. **Place** them in the `fonts/` directory
3. **Copy** the entire `apple-hig-theme/` folder to your Typora themes directory
4. **Restart** Typora
5. **Select** "Apple HIG" from the themes menu

## Font Fallbacks

The theme includes comprehensive fallbacks:
- **System fonts**: `-apple-system`, `BlinkMacSystemFont` (macOS)
- **Web fonts**: `"SF Pro Display"`, `"SF Pro Text"`, `"SF Mono"`
- **Web safe fonts**: `Helvetica Neue`, `Helvetica`, `Arial`
- **Generic fallbacks**: `sans-serif`, `monospace`

## Benefits of Web Fonts

- ✅ **Cross-platform compatibility**
- ✅ **Smaller file sizes** (50-70% smaller than OTF)
- ✅ **Faster loading** times
- ✅ **Better performance** in Typora
- ✅ **Graceful fallbacks** if fonts fail to load

## Troubleshooting

### Fonts Not Loading
1. Check file names match exactly
2. Verify files are in the `fonts/` directory
3. Check file permissions
4. Test in browser developer tools

### Fallback Fonts Being Used
1. Check browser console for errors
2. Verify font files are not corrupted
3. Test font loading in browser

---

**Note**: The theme is optimized for WOFF2 fonts and will provide the best experience with web fonts.