# Design Document: iA Writer Template Architecture

## Context
The existing Apple HIG theme for Typora uses a single CSS file that directly styles Typora-specific class names. iA Writer uses a different architecture: template bundles (.iatemplate) containing multiple HTML files and a style.css file. The template system uses data attributes for content injection and provides built-in content-size classes for user-controlled font sizing. This design document outlines how to adapt the Apple HIG design system to iA Writer's architecture while maintaining 100% HIG compliance.

## Goals / Non-Goals

### Goals
- Maintain identical visual appearance between Typora and iA Writer versions
- Support all iA Writer content-size variants (xs through xxxl, plus accessibility sizes)
- Preserve all Apple HIG compliance (typography, colors, spacing, accessibility)
- Create reusable design token layer that can be shared between implementations
- Support iA Writer's export features (HTML, PDF, Word)
- Enable easy maintenance and updates across both platforms

### Non-Goals
- Not creating interactive features (iA Writer templates are static HTML/CSS)
- Not modifying the Typora theme (parallel implementation)
- Not supporting non-Apple design patterns
- Not creating custom iA Writer features beyond standard template capabilities
- Not supporting legacy iA Writer versions (target current stable version)

## Decisions

### Decision 1: Bundle Structure
**Choice**: Use standard iA Writer bundle format with all required files.

**Structure**:
```
apple-hig.iatemplate/
├── Info.plist              # Bundle metadata
├── document.html           # Main template structure
├── title.html             # Document title template
├── header.html            # Optional page header
├── footer.html            # Optional page footer
├── style.css              # All styling
├── fonts/                 # Embedded font files
│   ├── SF Pro/
│   ├── SF Pro Text/
│   └── SF Mono Medium/
└── README.md              # Template documentation
```

**Rationale**: This structure follows iA Writer's documented template format and keeps fonts embedded for offline use, matching the Typora implementation pattern.

**Alternatives Considered**:
- External CSS file: Rejected because iA Writer expects styles within the bundle
- Separate font files: Rejected to ensure consistent rendering and offline functionality
- Multiple CSS files: Rejected because iA Writer prefers single style.css

### Decision 2: Content Sizing Strategy
**Choice**: Map iA Writer's content-size classes to Apple HIG typography scale proportionally.

**Mapping**:
```css
/* Base size (content-size-l) = Apple HIG body text (15px) */
.content-size-xs { font-size: 11px; }  /* 73% of base */
.content-size-s { font-size: 13px; }   /* 87% of base */
.content-size-m { font-size: 14px; }   /* 93% of base */
.content-size-l { font-size: 15px; }   /* 100% - Apple HIG base */
.content-size-xl { font-size: 17px; }  /* 113% of base */
.content-size-xxl { font-size: 20px; } /* 133% of base */
.content-size-xxxl { font-size: 22px; }/* 147% of base */
```

**Rationale**: Apple HIG defines 15px as the standard body text size. By making content-size-l equal to 15px, we maintain HIG compliance while respecting user preferences. The proportional scaling preserves the visual hierarchy at all sizes.

**Alternatives Considered**:
- Fixed sizes ignoring user preference: Rejected for poor UX
- Linear scaling: Rejected because smaller increments work better for readability
- Using Apple's complete type scale: Rejected because it doesn't match iA Writer's 7-size system

### Decision 3: Design Token Organization
**Choice**: Keep the three-layer token system (primitive → semantic → component) from Typora theme.

**Rationale**: This system is proven, maintainable, and can be shared between implementations. The token layer is platform-agnostic, only the application differs.

**Implementation**: Copy all CSS custom properties from apple-hig.css, then add iA Writer-specific applications of those tokens for content-size variants.

### Decision 4: HTML Template Structure
**Choice**: Use minimal semantic HTML5 structure with proper ARIA landmarks.

**document.html structure**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title data-title></title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <article class="document">
    <header class="document-header" data-header></header>
    <main data-document></main>
    <footer class="document-footer" data-footer></footer>
  </article>
</body>
</html>
```

**Rationale**: This structure provides semantic HTML for accessibility, clear content areas for styling, and proper integration points for iA Writer's data attributes.

**Alternatives Considered**:
- Div-based structure: Rejected for poor accessibility
- Complex grid layout: Rejected for simplicity and compatibility
- Multiple nested containers: Rejected to minimize DOM depth

### Decision 5: Font Loading Strategy
**Choice**: Embed fonts in bundle with @font-face, same as Typora implementation.

**Rationale**: Ensures consistent rendering across systems, works offline, and matches licensing requirements for San Francisco fonts.

**Font Paths**: Use relative paths from style.css to fonts directory: `url('fonts/SF Pro/SF Pro.woff2')`

### Decision 6: Responsive Behavior
**Choice**: Implement responsive typography and spacing with max-width constraints.

**Breakpoints**:
- Mobile: < 768px (single column, larger touch targets)
- Tablet: 768px - 1024px (optimized reading width)
- Desktop: > 1024px (max content width 800px for readability)

**Rationale**: Matches Apple HIG responsive guidelines and ensures optimal reading experience across devices. iA Writer is available on iOS, so mobile support is important.

### Decision 7: Dark Mode Implementation
**Choice**: Use `@media (prefers-color-scheme: dark)` same as Typora theme.

**Rationale**: Automatic system preference detection is Apple's standard pattern. iA Writer respects system preferences, so this approach works seamlessly.

**Implementation**: Duplicate all color token assignments within dark mode media query with inverted semantic meanings.

## Risks / Trade-offs

### Risk 1: Content-size variations may break visual hierarchy
**Mitigation**: Test extensively at all size variants. Ensure relative sizing is preserved (h1 always larger than h2, etc.) using em-based scaling for headings.

### Risk 2: iA Writer may render fonts differently than Typora
**Mitigation**: Both use web rendering engines. Font fallbacks and proper @font-face declarations should ensure consistency. Test on actual devices.

### Risk 3: Template bundle size with embedded fonts
**Trade-off**: Bundle will be larger (~2-3MB) but guarantees consistency. This is acceptable as it's a one-time download.

### Risk 4: iA Writer updates may change template system
**Mitigation**: Follow documented template API only. Monitor iA Writer release notes. Keep template system simple to minimize breaking change surface area.

### Risk 5: Print/PDF export may not respect custom fonts
**Mitigation**: Test export functionality thoroughly. Provide fallback fonts that maintain similar proportions if custom fonts fail.

## Migration Plan
Not applicable - this is a new capability, not replacing existing functionality. Both Typora and iA Writer themes will coexist.

## Open Questions
1. Does iA Writer support CSS custom properties in templates? (Need to test, may need to use computed values)
2. Should we provide multiple template variants (with/without header, different color schemes)? (Defer to v2)
3. What's the optimal content max-width for readability? (Test with real documents, start with 800px)
4. Should accessibility size classes scale differently? (Follow Apple's accessibility guidelines, may need larger increments)
5. Does iA Writer honor print styles (@media print)? (Test and document)
