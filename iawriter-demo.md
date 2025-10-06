# Apple HIG Theme Demo

This document demonstrates the Apple HIG theme for iA Writer with all markdown features.

## Typography Hierarchy

This theme uses Apple's official typography scale with the San Francisco font family.

### Level 3 Heading (Title 2)
All headings use SF Pro Display with proper weights and sizes.

#### Level 4 Heading (Title 3)
The spacing follows Apple's 8pt grid system.

##### Level 5 Heading (Headline)
Visual hierarchy is maintained at all content sizes.

###### Level 6 Heading (Subheadline)
From extra small to accessibility sizes.

## Text Formatting

Body text uses **SF Pro Text** at 15px, which is Apple's standard body text size. This paragraph demonstrates various text formatting options available in markdown.

Here's **bold text** (semibold 600), *italic text*, ~~strikethrough text~~, and `inline code` using SF Mono.

You can combine formatting like ***bold and italic*** or **_bold with italic_**.

## Links

[Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) provides comprehensive design guidance.

Visit [iA Writer](https://ia.net/writer) for more information about templates.

## Lists

### Unordered Lists

- First level item with SF Pro Text
- Another item at the same level
  - Nested item with proper indentation
  - Another nested item
    - Third level nesting
    - Maintains 8pt grid spacing
- Back to first level

### Ordered Lists

1. First numbered item
2. Second numbered item
   1. Nested numbered item
   2. Another nested item
3. Third numbered item
4. Lists maintain proper line height

### Task Lists

- [ ] Unchecked task item
- [x] Completed task item
- [ ] Another task to complete
  - [x] Nested completed task
  - [ ] Nested incomplete task

## Code

### Inline Code

Use `let result = calculate(value)` for inline code snippets with SF Mono.

### Code Blocks

```swift
// Swift code example
struct ContentView: View {
    var body: some View {
        Text("Hello, Apple HIG!")
            .font(.largeTitle)
            .foregroundColor(.accentColor)
    }
}
```

```javascript
// JavaScript example
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("iA Writer"));
```

```css
/* CSS example with design tokens */
:root {
  --color-accent: #0071e3;
  --spacing-base: 8px;
}
```

## Blockquotes

> This is a blockquote demonstrating Apple's design philosophy.
> 
> "Design is not just what it looks like and feels like. Design is how it works."
> — Steve Jobs

Nested quotes:

> First level quote
> > Second level quote
> > > Third level quote

## Horizontal Rules

Use horizontal rules to separate sections:

---

Content above the line.

---

Content below the line.

## Tables

Simple table with alignment:

| Feature | Typora | iA Writer |
|---------|:------:|----------:|
| Content Sizing | Fixed | Variable |
| Export Formats | Limited | Extensive |
| Template System | CSS | Bundle |
| Platform | Desktop | All |

Complex table with formatting:

| Element | Font Size | Line Height | Weight |
|---------|-----------|-------------|--------|
| **Large Title** | 34px | 40px | Bold 700 |
| **Title 1** | 28px | 34px | Bold 700 |
| **Title 2** | 22px | 28px | Semibold 600 |
| *Body Text* | 15px | 22px | Regular 400 |
| `Code` | 13px | 19.5px | Regular 400 |

Table with long content:

| Description | Implementation Details |
|-------------|------------------------|
| Typography | Uses San Francisco font family with optical sizing. SF Pro Display for headings ≥20px, SF Pro Text for body ≤19px. |
| Color System | Implements Apple's complete semantic color system with automatic dark mode adaptation using `prefers-color-scheme` media query. |
| Spacing | All spacing values follow the 8pt grid system: 8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px. |

## Images

![Apple HIG Logo](https://via.placeholder.com/800x400/0071e3/ffffff?text=Apple+HIG+Theme)

*Caption: This theme follows Apple's Human Interface Guidelines*

## Footnotes

This theme supports footnotes[^1] for citations and references[^2].

[^1]: Footnotes appear at the bottom of the document with proper styling.
[^2]: They use SF Pro Text at a smaller size (13px) with secondary text color.

## Content Size Testing

Try changing the content size in iA Writer (View → Content Size) to see how the theme adapts:

- **Extra Small (xs)**: 11px base - Compact reading
- **Small (s)**: 13px base - Comfortable small
- **Medium (m)**: 14px base - Just below standard
- **Large (l)**: 15px base - **Apple HIG standard**
- **Extra Large (xl)**: 17px base - Comfortable large
- **Extra Extra Large (xxl)**: 20px base - Very large
- **Extra Extra Extra Large (xxxl)**: 22px base - Maximum standard size

### Accessibility Sizes

For users with accessibility needs:

- **Accessibility M**: 23px base
- **Accessibility L**: 28px base
- **Accessibility XL**: 33px base
- **Accessibility XXL**: 40px base
- **Accessibility XXXL**: 48px base

## Dark Mode

This theme automatically adapts to your system's dark mode preference. Try switching between light and dark mode in macOS System Preferences to see the adaptation.

### Light Mode
- Clean white background (#ffffff)
- Dark text for optimal readability (#1d1d1f)
- Apple blue accent (#0071e3)

### Dark Mode
- True black background (#000000)
- Light text (#f5f5f7)
- Adapted blue accent (#0a84ff)

## Accessibility Features

✅ **WCAG 2.1 AA Compliant**
- Minimum contrast ratio 4.5:1 for normal text
- Minimum contrast ratio 3:1 for large text
- All interactive elements have visible focus states

✅ **High Contrast Support**
- Automatically adapts when high contrast mode is enabled
- Maintains readability in all contrast settings

✅ **Reduced Motion Support**
- Respects `prefers-reduced-motion` preference
- Minimizes animations for users sensitive to motion

✅ **Keyboard Navigation**
- All interactive elements are keyboard accessible
- Visible focus indicators on all focusable elements
- Logical tab order throughout

✅ **Screen Reader Support**
- Semantic HTML structure
- Proper heading hierarchy
- ARIA landmarks where needed

## Export Testing

This template is optimized for all iA Writer export formats:

### PDF Export
- Fonts are embedded
- Colors are preserved
- Layout is optimized for print

### HTML Export
- Valid HTML5
- Embedded or linked styles
- Works in all modern browsers

### Word Export
- Compatible with Microsoft Word
- Formatting is preserved
- Fonts fallback gracefully

## Responsive Design

The template adapts to different screen sizes:

**Mobile (< 768px)**
- Reduced padding for smaller screens
- Slightly larger base font size
- Optimized touch targets

**Tablet (768px - 1023px)**
- Balanced spacing
- Optimal reading width
- Comfortable line length

**Desktop (≥ 1024px)**
- Maximum content width: 800px
- Centered layout
- Generous whitespace

## Markdown Features

### Definition Lists

Term
: Definition of the term with proper styling

Another Term
: Another definition with semantic markup

### Abbreviations

The HTML specification is maintained by W3C.

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium

### Special Characters

Typography improvements:

- Em dash: — (Option + Shift + -)
- En dash: – (Option + -)
- Ellipsis: …
- Smart quotes: "Hello" and 'World'
- Copyright: ©
- Trademark: ™
- Registered: ®

## Color System Reference

This theme uses Apple's semantic color system:

### System Colors
- Blue: #0071e3 (light) / #0a84ff (dark)
- Green: #34c759
- Orange: #ff9500
- Red: #ff3b30
- Purple: #af52de
- Yellow: #ffcc00
- Pink: #ff2d55

### Usage
- Primary text: High contrast, always readable
- Secondary text: Metadata, captions, less important
- Tertiary text: Disabled states, placeholders
- Accent: Links, buttons, interactive elements

## Performance

This template is optimized for performance:

- Font files use WOFF2 with WOFF fallback
- CSS uses custom properties for consistency
- Minimal specificity for fast rendering
- No JavaScript required
- Small bundle size

## Conclusion

This Apple HIG theme for iA Writer provides a complete, compliant implementation of Apple's design system. It maintains visual consistency with the Typora version while adapting to iA Writer's unique template architecture and content sizing system.

Try all the features:
1. Change content sizes (View → Content Size)
2. Switch dark mode (System Preferences)
3. Export to different formats (File → Export)
4. Test accessibility features (keyboard navigation, screen readers)

---

**Apple HIG Theme v2.0.0** | MIT License | Not affiliated with Apple Inc.
