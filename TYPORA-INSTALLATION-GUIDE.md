# Apple HIG Theme - Typora Installation Guide

## 🚀 Quick Installation

### Step 1: Locate Typora Themes Directory

**macOS:**
```bash
~/Library/Application Support/typora/themes/
```

**Windows:**
```bash
%APPDATA%\Typora\themes\
```

**Linux:**
```bash
~/.config/Typora/themes/
```

### Step 2: Install Theme

1. Copy the entire `apple-hig-theme` folder to your Typora themes directory
2. Rename the folder to `apple-hig` (remove the `-theme` suffix)
3. The final structure should be:
   ```
   themes/
   └── apple-hig/
       ├── apple-hig.css
       └── apple-hig/
           ├── SF Pro/
           ├── SF Pro Text/
           └── SF Mono Medium/
   ```

### Step 3: Activate Theme

1. Open Typora
2. Go to `Themes` menu
3. Select `Apple Hig` (should appear in the list)
4. The theme should activate immediately

## 🔧 Troubleshooting

### Theme Not Appearing in Menu

**Check file structure:**
- Ensure `apple-hig.css` is directly in the `apple-hig` folder
- Verify folder name is exactly `apple-hig` (no spaces, no capitals)
- Check file permissions

**Restart Typora:**
- Close Typora completely
- Reopen Typora
- Check Themes menu again

### Fonts Not Loading

**Check font paths:**
- Open `apple-hig.css` in a text editor
- Verify font paths point to correct locations:
  ```css
  url("./apple-hig/SF Pro/SF Pro.woff2")
  url("./apple-hig/SF Pro Text/SF Pro Text.woff2")
  url("./apple-hig/SF Mono Medium/SF Mono Medium.woff2")
  ```

**Test font loading:**
1. Open browser DevTools (F12)
2. Go to Network tab
3. Reload Typora
4. Look for 404 errors on font files

### Visual Issues

**Enable Typora DevTools:**
1. Go to `Help` → `Enable Debug Mode` (macOS)
2. Or `View` → `Toggle DevTools` (Windows/Linux)
3. Right-click on content → `Inspect Element`
4. Check for CSS errors in Console tab

**Check CSS loading:**
1. In DevTools, go to Sources tab
2. Look for `apple-hig.css` in the list
3. Verify it's loading without errors

### Performance Issues

**Disable glass effects:**
- The theme includes fallbacks for systems that don't support backdrop-filter
- If performance is poor, the theme will automatically use solid backgrounds

**Font loading optimization:**
- The theme uses `font-display: swap` for better loading performance
- Fonts will load progressively

## 🧪 Testing the Theme

### Use the Test Document

1. Open `debug-test-content.md` in Typora
2. Verify all elements render correctly:
   - Headings use SF Pro Display
   - Body text uses SF Pro Text
   - Code uses SF Mono
   - Glass effects work on code blocks, tables, etc.

### Browser Test

1. Open `theme-test.html` in your browser
2. Run the diagnostic script:
   ```javascript
   // Copy and paste the contents of diagnose-theme.js into browser console
   ```

## 📋 System Requirements

### Typora Version
- **Minimum:** Typora 1.8+
- **Recommended:** Latest version

### Operating System
- **macOS:** 10.14+ (for best font support)
- **Windows:** 10+ (with font fallbacks)
- **Linux:** Any modern distribution (with font fallbacks)

### Browser Engine
- **WebKit:** Safari 14+ (for full glass effects)
- **Chromium:** Chrome 88+ (for backdrop-filter support)

## 🎨 Theme Features

### Typography
- **SF Pro Display:** Headings (H1-H4)
- **SF Pro Text:** Body text and UI elements
- **SF Mono:** Code blocks and inline code

### Color System
- **Light Mode:** Apple system colors
- **Dark Mode:** Automatic switching
- **High Contrast:** Accessibility support

### Glass Effects
- **Code Blocks:** macOS-style window with traffic lights
- **Tables:** Glass material backgrounds
- **Alerts:** Translucent containers
- **Fallbacks:** Solid backgrounds for unsupported systems

## 🆘 Getting Help

### Common Issues

1. **Theme not loading:** Check file structure and permissions
2. **Fonts not working:** Verify font file paths
3. **Visual glitches:** Enable DevTools and check for errors
4. **Performance issues:** Check system requirements

### Debug Information

When reporting issues, include:
- Operating system and version
- Typora version
- Screenshots of the problem
- Console errors from DevTools
- File structure verification

### Support

- Check the troubleshooting section above
- Verify installation steps
- Test with the provided test files
- Use browser diagnostic script for technical issues