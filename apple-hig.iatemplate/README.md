# Apple HIG Theme for iA Writer

100% Apple Human Interface Guidelines compliant template for iA Writer.

## Features

✨ **Complete Apple Design System**
- San Francisco font family (SF Pro Display, SF Pro Text, SF Mono)
- Apple color system with automatic dark mode
- 8pt grid spacing system
- Typography hierarchy matching Apple's standards

♿ **Accessibility First**
- WCAG 2.1 AA compliant
- High contrast mode support
- Reduced motion support
- Full keyboard navigation
- Screen reader friendly

🎨 **Content Size Support**
- All iA Writer content sizes (xs through xxxl)
- Accessibility text sizes
- Maintains visual hierarchy at all sizes
- Responsive layout for all devices

🌙 **Dark Mode**
- Automatic system preference detection
- Perfect color adaptation
- Proper contrast ratios maintained

## Installation

### macOS

1. Download `apple-hig.iatemplate`
2. Double-click the file to install, or:
3. Manually copy to: `~/Library/Mobile Documents/27N4MQEA55~pro~writer/Documents/Templates/`
4. Open iA Writer
5. Go to File → Preview → Select "Apple HIG" template

### iOS/iPadOS

1. Download `apple-hig.iatemplate` to iCloud Drive
2. Move to: `iCloud Drive/iA Writer/Templates/`
3. Open iA Writer
4. Tap Preview → Select "Apple HIG" template

## Content Sizes

This template supports all iA Writer content size preferences:

| Size | Description | Base Font Size |
|------|-------------|----------------|
| Extra Small (xs) | Smallest readable size | 11px |
| Small (s) | Compact reading | 13px |
| Medium (m) | Comfortable compact | 14px |
| **Large (l)** | **Default - Apple HIG standard** | **15px** |
| Extra Large (xl) | Comfortable large | 17px |
| Extra Extra Large (xxl) | Very large | 20px |
| Extra Extra Extra Large (xxxl) | Largest | 22px |

### Accessibility Sizes

For users who enable larger accessibility text:
- Accessibility M: 23px
- Accessibility L: 28px
- Accessibility XL: 33px
- Accessibility XXL: 40px
- Accessibility XXXL: 48px

## Typography Scale

The template uses Apple's official typography hierarchy:

| Element | Font Size | Line Height | Weight | Font Family |
|---------|-----------|-------------|--------|-------------|
| H1 (Large Title) | 34px | 40px | Bold 700 | SF Pro Display |
| H2 (Title 1) | 28px | 34px | Bold 700 | SF Pro Display |
| H3 (Title 2) | 22px | 28px | Semibold 600 | SF Pro Display |
| H4 (Title 3) | 20px | 25px | Semibold 600 | SF Pro Display |
| H5 (Headline) | 17px | 22px | Semibold 600 | SF Pro Display |
| H6 (Subheadline) | 15px | 20px | Semibold 600 | SF Pro Text |
| Body Text | 15px | 22px | Regular 400 | SF Pro Text |
| Code | 13px | 19.5px | Regular 400 | SF Mono |

## Color System

The template uses Apple's semantic color system that automatically adapts to light and dark modes:

### Light Mode
- Background: #ffffff
- Text: #1d1d1f
- Secondary Text: #8e8e93
- Accent: #0071e3 (Apple Blue)
- Code Background: #f5f5f7
- Borders: #d1d1d6

### Dark Mode
- Background: #000000
- Text: #f5f5f7
- Secondary Text: #98989d
- Accent: #0a84ff (Dark Mode Blue)
- Code Background: #1c1c1e
- Borders: #38383a

## Customization

The template uses CSS custom properties for easy customization. You can modify these in `style.css`:

```css
:root {
  --color-accent: #0071e3;      /* Change accent color */
  --base-font-size: 15px;       /* Adjust base size */
  --space-m: 16px;              /* Modify spacing */
}
```

## Export

The template is optimized for all iA Writer export formats:
- ✅ PDF - Fonts embedded, formatting preserved
- ✅ HTML - Valid HTML5 with embedded styles
- ✅ Word - Compatible with Microsoft Word
- ✅ Print - Print-optimized styles

## Apple HIG Compliance

This template implements 100% of Apple's Human Interface Guidelines:

- ✅ Typography: Complete San Francisco font family
- ✅ Color System: All semantic colors with proper usage
- ✅ Spacing: 8pt grid system throughout
- ✅ Accessibility: WCAG 2.1 AA compliance
- ✅ Dark Mode: Seamless automatic switching
- ✅ Interactive States: Proper focus and hover states
- ✅ Motion: Apple's timing curves (reduced motion supported)
- ✅ Layout: Apple's layout principles

## Browser Support

- ✅ Safari (macOS, iOS, iPadOS)
- ✅ Chrome (macOS, Windows, Linux)
- ✅ Firefox (macOS, Windows, Linux)
- ✅ Edge (Windows)

## Differences from Typora Version

The iA Writer version maintains identical visual appearance but adapts to iA Writer's architecture:

- **Content Sizing**: iA Writer provides 7 size options + 5 accessibility sizes
- **Template Structure**: Uses .iatemplate bundle format with separate HTML files
- **Export**: Optimized for iA Writer's export features
- **Title Pages**: Dedicated title.html for cover pages
- **Headers/Footers**: Separate templates for headers and footers

## Troubleshooting

### Fonts not loading
- Ensure the fonts directory is intact within the template bundle
- Check that font files are present: SF Pro, SF Pro Text, SF Mono
- Reinstall the template if fonts are missing

### Template not appearing in iA Writer
- Verify installation location (see Installation section)
- Check that the bundle has .iatemplate extension
- Restart iA Writer
- Ensure Info.plist is valid

### Colors look wrong
- Check system dark mode setting (template follows system preference)
- Verify high contrast mode is not interfering
- Try reloading the template

### Content size not changing
- Content size is controlled by iA Writer preferences
- Go to View → Content Size to adjust
- Template will automatically adapt

## Resources

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)
- [San Francisco Font](https://developer.apple.com/fonts/)
- [iA Writer Templates Guide](https://ia.net/writer/support/preview/custom-templates)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Version

- Version: 2.0.0
- Last Updated: 2025-01-06
- Compatibility: iA Writer 5.0+

## License

MIT License - Free to use and modify.

## Credits

This theme follows Apple's Human Interface Guidelines but is not affiliated with Apple Inc.

---

*For the Typora version of this theme, see the main project README.*
