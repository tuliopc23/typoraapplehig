# Apple HIG Theme for Markdown Editors

100% Apple Human Interface Guidelines compliant themes for **Typora** and **iA Writer**, providing a native macOS experience for markdown editing.

## Features

### 🎨 **Complete Apple Design System**
- **San Francisco Font Family**: Uses SF Pro Display, SF Pro Text, and SF Mono
- **Apple Color System**: Full implementation of system colors with light/dark mode
- **8pt Grid System**: All spacing follows Apple's 8pt grid specification
- **Typography Hierarchy**: Perfect implementation of Apple's typography scale

### ♿ **Accessibility First**
- **WCAG 2.1 AA Compliance**: Meets all accessibility standards
- **High Contrast Support**: Automatic high contrast mode detection
- **Screen Reader Friendly**: Proper semantic markup and ARIA labels
- **Keyboard Navigation**: Full keyboard accessibility support

### 🌙 **Dark Mode**
- **Automatic Detection**: Switches based on system preference
- **Perfect Color Adaptation**: All colors adapt seamlessly
- **Consistent Experience**: Maintains hierarchy in both modes

### 📱 **Responsive Design**
- **Mobile Optimized**: Adapts to different screen sizes
- **Touch Friendly**: Proper touch targets and spacing
- **Readable Line Length**: Optimal reading experience

## Installation

### Typora

1. Download the `apple-hig.css` file
2. Open Typora
3. Go to `Preferences` > `Appearance` > `Open Theme Folder`
4. Copy the CSS file to the theme folder
5. Restart Typora
6. Select "Apple HIG" from the theme menu

### iA Writer

#### macOS
1. Download the `apple-hig.iatemplate` bundle
2. Double-click to install, or manually copy to:
   `~/Library/Mobile Documents/27N4MQEA55~pro~writer/Documents/Templates/`
3. Open iA Writer
4. Go to File → Preview → Select "Apple HIG" template

#### iOS/iPadOS
1. Download `apple-hig.iatemplate` to iCloud Drive
2. Move to: `iCloud Drive/iA Writer/Templates/`
3. Open iA Writer
4. Tap Preview → Select "Apple HIG" template

See `apple-hig.iatemplate/README.md` for detailed iA Writer documentation.

## Customization

The theme uses CSS custom properties for easy customization:

```css
:root {
  /* Change accent color */
  --color-system-accent: #007aff;
  
  /* Adjust font size */
  --font-size-body: 15px;
  
  /* Modify spacing */
  --spacing-1: 8px;
}
```

## Apple HIG Compliance

This theme implements:

- ✅ **Typography**: Complete San Francisco font family with proper weights and sizes
- ✅ **Color System**: All Apple system colors with semantic usage
- ✅ **Spacing**: 8pt grid system throughout
- ✅ **Accessibility**: WCAG 2.1 AA compliance
- ✅ **Dark Mode**: Seamless light/dark mode switching
- ✅ **Interactive States**: Proper hover, focus, and active states
- ✅ **Motion**: Apple's timing curves and transitions
- ✅ **Layout**: Apple's layout principles and patterns

## Typography Scale

| Element | Font Size | Line Height | Weight |
|---------|-----------|-------------|--------|
| Large Title (H1) | 34px | 40px | 700 |
| Title 1 (H2) | 28px | 34px | 700 |
| Title 2 (H3) | 22px | 28px | 600 |
| Title 3 (H4) | 20px | 25px | 600 |
| Headline (H5) | 17px | 22px | 600 |
| Body (H6) | 15px | 20px | 600 |
| Body Text | 15px | 20px | 400 |
| Code | 13px | 18px | 400 |

## Color System

The theme uses Apple's complete color system:

- **System Colors**: Background, foreground, and semantic colors
- **Accent Colors**: Blue, green, orange, red, purple, etc.
- **Adaptive Colors**: Automatically adapt to light/dark mode
- **Accessibility**: Proper contrast ratios for all text

## Browser Support

- ✅ Safari (macOS)
- ✅ Chrome (macOS/Windows/Linux)
- ✅ Firefox (macOS/Windows/Linux)
- ✅ Edge (Windows)

## License

MIT License - Feel free to use and modify as needed.

## Contributing

This theme is designed to maintain 100% Apple HIG compliance. When contributing:

1. Follow Apple's Human Interface Guidelines
2. Maintain accessibility standards
3. Test in both light and dark modes
4. Ensure proper contrast ratios
5. Follow the 8pt grid system

## Resources

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)
- [San Francisco Font](https://developer.apple.com/fonts/)
- [SF Symbols](https://developer.apple.com/sf-symbols/)
- [Accessibility Guidelines](https://developer.apple.com/accessibility/)

---

*This theme is not affiliated with Apple Inc. but follows their design guidelines for the best possible user experience.*