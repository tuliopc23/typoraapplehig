# Project Context

## Purpose
This project provides 100% Apple Human Interface Guidelines (HIG) compliant themes for markdown editors. The primary theme is for Typora, implementing Apple's complete design system including the San Francisco font family, Apple color system, 8pt grid spacing, and full accessibility support. The goal is to deliver a native macOS writing experience that meets WCAG 2.1 AA accessibility standards.

## Tech Stack
- **CSS3**: Custom properties (CSS variables) for design tokens and theming
- **San Francisco Fonts**: SF Pro Display, SF Pro Text, SF Mono (variable fonts)
- **Font Formats**: WOFF2 and WOFF for cross-platform compatibility
- **Design System**: Apple's 8pt grid system and typography scale
- **Accessibility**: WCAG 2.1 AA compliance with high contrast and reduced motion support
- **Target Platforms**: macOS, Windows, Linux (via Typora and iA Writer)

## Project Conventions

### Code Style
- Use CSS custom properties (--primitive-*, --semantic-*, --component-*) for all design tokens
- Follow three-layer design token architecture: primitive → semantic → component
- Organize CSS by system (typography, color, spacing, layout)
- Use BEM-like naming for component-specific classes when needed
- Prefix all custom properties with descriptive namespaces
- Maintain alphabetical ordering within property groups
- Comment major sections with header blocks

### Architecture Patterns
- **Design Token Layers**:
  - Primitive: Raw values (--primitive-text-15, --primitive-color-blue)
  - Semantic: Usage-based mappings (--color-text-primary, --spacing-content)
  - Component: Component-specific tokens (rarely used, prefer semantic)
- **Single File Architecture**: All styles in one CSS file for Typora compatibility
- **Feature Detection**: Use @media queries for dark mode, high contrast, reduced motion
- **Progressive Enhancement**: Fallback to system fonts if custom fonts fail to load
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px

### Testing Strategy
- Visual testing in Typora with demo markdown files (demo.md, typora-demo.md)
- Cross-platform testing: macOS, Windows, Linux
- Mode testing: Light mode, dark mode, high contrast mode
- Accessibility testing: Screen readers, keyboard navigation, contrast ratios
- Font rendering validation across different operating systems
- Real-world document testing with complex markdown features

### Git Workflow
- Main branch contains stable, production-ready themes
- Feature branches for new capabilities or significant changes
- Commit messages should reference OpenSpec change proposals when applicable
- Keep implementation commits separate from spec/documentation commits
- Archive completed changes to openspec/changes/archive/ after deployment

## Domain Context

### Apple Human Interface Guidelines
The theme must maintain 100% compliance with Apple's HIG, which defines:
- Typography scale (Large Title: 34px, Title 1: 28px, Title 2: 22px, etc.)
- Color semantics (system background, label, secondary label, etc.)
- Spacing system (8pt grid: 8px, 16px, 24px, 32px, etc.)
- Accessibility requirements (minimum contrast 4.5:1 for normal text, 3:1 for large text)
- Dark mode color adaptation (automatic inversion with preserved hierarchy)
- Interactive states (default, hover, active, disabled)
- Motion timing (easeInOut, spring animations)

### Markdown Editor Theming
- **Typora**: Uses CSS files in theme folder, targets specific Typora class names
- **iA Writer**: Uses template bundles (.iatemplate) with document.html, style.css, and metadata
- Both editors support dark mode via system preferences
- Custom fonts must be embedded and properly declared with @font-face

### Typography Specifics
- San Francisco is Apple's system font with optical sizing
- SF Pro Display: For headings and large text (>20pt)
- SF Pro Text: For body text and UI (≤19pt)
- SF Mono: For code blocks and inline code
- Variable fonts provide weight range 100-900
- Letter spacing and line height vary by size (tracking tables)

## Important Constraints

### Technical Constraints
- Typora requires single CSS file (no imports or separate files)
- Font files must be in relative paths from CSS file
- Custom properties not supported in older Typora versions (fallbacks required)
- iA Writer templates must be .iatemplate bundles with specific structure
- No JavaScript allowed in either editor (pure CSS/HTML only)
- Must work offline (no CDN dependencies)

### Design Constraints
- Must match Apple HIG exactly (no creative interpretation)
- All spacing must align to 8pt grid
- Typography scale is fixed (cannot deviate from Apple's sizes)
- Colors must use Apple's semantic color system
- Accessibility is non-negotiable (WCAG 2.1 AA minimum)
- Dark mode must be automatic (no manual toggle)

### Business Constraints
- MIT License (open source)
- No affiliation with Apple (disclaimer required)
- Cannot use Apple trademarks inappropriately
- Must respect Apple's font licensing (San Francisco is free for use)

## External Dependencies

### Fonts (Embedded)
- **SF Pro Display**: ./fonts/SF Pro/SF Pro.woff2, .woff
- **SF Pro Text**: ./fonts/SF Pro Text/SF Pro Text.woff2, .woff
- **SF Mono**: ./fonts/SF Mono Medium/SF Mono Medium.woff2, .woff
- Source: Apple Developer Portal (free license for app/web development)

### Reference Documentation
- **Apple HIG**: https://developer.apple.com/design/human-interface-guidelines
- **Apple Fonts**: https://developer.apple.com/fonts/
- **SF Symbols**: https://developer.apple.com/sf-symbols/
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Typora Theme Documentation**: https://theme.typora.io/
- **iA Writer Templates**: https://ia.net/writer/support/preview/custom-templates

### Tools
- **Typora**: Markdown editor (target platform)
- **iA Writer**: Markdown editor (new target platform)
- **OpenSpec CLI**: Spec-driven development tooling
