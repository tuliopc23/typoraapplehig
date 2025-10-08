# Apple HIG Theme Debug Test Document

This document contains comprehensive test content to debug all aspects of the Apple HIG theme rendering in Typora.

## Typography Testing

### Headings Hierarchy
# Large Title (H1) - Should use SF Pro Display, 34px, Bold
## Title 1 (H2) - Should use SF Pro Display, 28px, Bold  
### Title 2 (H3) - Should use SF Pro Display, 22px, Semibold
#### Title 3 (H4) - Should use SF Pro Display, 20px, Semibold
##### Headline (H5) - Should use SF Pro Text, 17px, Semibold
###### Body (H6) - Should use SF Pro Text, 17px, Semibold

### Text Styles
This is **bold text** using strong tags.

This is *italic text* using emphasis tags.

This is `inline code` with proper SF Mono font.

This is ==highlighted text== using mark tags.

This is ~~strikethrough text~~ using del tags.

This is <u>underlined text</u> using u tags.

## Lists Testing

### Unordered Lists
- First item with custom bullet styling
- Second item with proper spacing
- Third item with SF Pro Text font
  - Nested item with proper indentation
  - Another nested item
- Fourth item back to main level

### Ordered Lists
1. First numbered item
2. Second numbered item with proper counter
3. Third numbered item
   1. Nested numbered item
   2. Another nested numbered item
4. Fourth item back to main level

### Task Lists
- [ ] Unchecked task item
- [x] Checked task item with strikethrough
- [ ] Another unchecked task
- [x] Another checked task

## Code Blocks Testing

### Inline Code
Here's some `inline code` that should use SF Mono font.

### Code Fences
```javascript
// JavaScript code block
function helloWorld() {
    console.log("Hello, World!");
    return "Success";
}

const result = helloWorld();
```

```python
# Python code block
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

```css
/* CSS code block */
.apple-hig-theme {
    font-family: "SF Pro Text", -apple-system, sans-serif;
    color: var(--color-text-primary);
    background: var(--color-background-primary);
}
```

## Tables Testing

| Column 1 | Column 2 | Column 3 | Column 4 |
|----------|----------|----------|----------|
| Row 1, Cell 1 | Row 1, Cell 2 | Row 1, Cell 3 | Row 1, Cell 4 |
| Row 2, Cell 1 | Row 2, Cell 2 | Row 2, Cell 3 | Row 2, Cell 4 |
| Row 3, Cell 1 | Row 3, Cell 2 | Row 3, Cell 3 | Row 3, Cell 4 |

## Blockquotes Testing

> This is a blockquote with proper Apple HIG styling.
> It should have a left border in the accent color.
> 
> Multiple paragraphs in blockquote should work correctly.
> 
> **Bold text** and *italic text* should work in blockquotes too.

## Links Testing

- [External Link](https://developer.apple.com/design/human-interface-guidelines/)
- [Internal Link](#typography-testing)
- [Email Link](mailto:test@example.com)
- [Phone Link](tel:+1234567890)

## Images Testing

![Sample Image](https://via.placeholder.com/400x200/007AFF/FFFFFF?text=Apple+HIG+Theme+Test)

## Math Testing

### Inline Math
Here's some inline math: $E = mc^2$ and $\sum_{i=1}^{n} x_i$

### Math Blocks
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\begin{align}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &= \frac{4\pi}{c}\vec{\mathbf{j}} \\
\nabla \cdot \vec{\mathbf{E}} &= 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} &= \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} &= 0
\end{align}
$$

## Alerts/Admonitions Testing

> [!NOTE]
> This is a note alert with proper Apple HIG styling.

> [!TIP]
> This is a tip alert with success color styling.

> [!WARNING]
> This is a warning alert with warning color styling.

> [!CAUTION]
> This is a caution alert with caution color styling.

> [!IMPORTANT]
> This is an important alert with error color styling.

## Horizontal Rules Testing

---

## Footnotes Testing

Here's a sentence with a footnote[^1] and another footnote[^2].

[^1]: This is the first footnote with proper styling.
[^2]: This is the second footnote with proper styling and formatting.

## YAML Front Matter Testing

```yaml
---
title: "Apple HIG Theme Debug Test"
author: "Theme Developer"
date: "2025-01-08"
tags: ["debug", "theme", "apple-hig", "typora"]
---
```

## Keyboard Shortcuts Testing

Press `Cmd+Shift+P` to open command palette.

Use `Cmd+B` for bold, `Cmd+I` for italic.

## Color Testing

### Text Colors
- Primary text color (should be system label color)
- Secondary text color (should be secondary label color)  
- Tertiary text color (should be tertiary label color)
- Quaternary text color (should be quaternary label color)

### Accent Colors
- System Blue: #007AFF (light) / #0A84FF (dark)
- System Green: #34C759 (light) / #32D74B (dark)
- System Orange: #FF9500 (light) / #FF9F0A (dark)
- System Red: #FF3B30 (light) / #FF453A (dark)

## Glass Material Testing

The following elements should have glass material effects:
- Code blocks
- Tables
- Blockquotes
- Alerts
- Math blocks
- YAML front matter

## Responsive Design Testing

This content should adapt properly to different screen sizes and maintain readability on mobile devices.

## Accessibility Testing

All text should meet WCAG 2.1 AA contrast requirements and be readable with accessibility features enabled.

---

*This test document should be used to verify that all Apple HIG theme elements render correctly in Typora.*