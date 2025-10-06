# iA Writer Templates Specification

## ADDED Requirements

### Requirement: Template Bundle Structure
The system SHALL provide an iA Writer template bundle (.iatemplate) containing all necessary files for rendering Apple HIG-compliant documents in iA Writer.

#### Scenario: Bundle contains required files
- **WHEN** the template bundle is examined
- **THEN** it contains document.html, style.css, title.html, header.html, footer.html, and Info.plist
- **AND** all files are properly formatted for iA Writer compatibility

#### Scenario: Fonts are embedded in bundle
- **WHEN** the template is installed
- **THEN** SF Pro Display, SF Pro Text, and SF Mono fonts are included in a fonts/ directory
- **AND** fonts are accessible via relative paths from style.css
- **AND** font-face declarations use proper fallbacks

#### Scenario: Bundle metadata is valid
- **WHEN** Info.plist is parsed
- **THEN** it contains valid bundle identifier, version, and display name
- **AND** metadata follows macOS/iOS bundle conventions

### Requirement: Content Size Support
The system SHALL support all iA Writer content-size classes while maintaining Apple HIG typography hierarchy.

#### Scenario: Base content sizes work correctly
- **WHEN** user selects content-size-xs through content-size-xxxl
- **THEN** typography scales proportionally from 11px to 22px
- **AND** content-size-l equals Apple HIG body text (15px)
- **AND** visual hierarchy is preserved at all sizes

#### Scenario: Accessibility sizes are supported
- **WHEN** user enables accessibility text sizes (content-size-accessibility-m through content-size-accessibility-xxxl)
- **THEN** text scales appropriately for accessibility needs
- **AND** layout remains readable and usable
- **AND** minimum contrast ratios are maintained

#### Scenario: Heading hierarchy scales correctly
- **WHEN** any content size is applied
- **THEN** h1 remains visually larger than h2, h2 larger than h3, etc.
- **AND** relative proportions match Apple HIG typography scale

### Requirement: HTML Template Structure
The system SHALL provide semantic HTML templates that integrate with iA Writer's data attribute system.

#### Scenario: Document structure is semantic
- **WHEN** document.html is rendered
- **THEN** it uses proper HTML5 semantic elements (article, main, header, footer)
- **AND** includes proper ARIA landmarks for accessibility
- **AND** has valid viewport meta tags

#### Scenario: Data attributes inject content correctly
- **WHEN** iA Writer processes the template
- **THEN** data-document receives markdown-converted content
- **AND** data-title displays the document title
- **AND** data-author and data-date display metadata when available

#### Scenario: Title template is properly structured
- **WHEN** title.html is included
- **THEN** it uses data-title attribute for content
- **AND** applies Apple HIG Large Title typography (34px, 700 weight)
- **AND** has proper spacing and hierarchy

### Requirement: CSS Styling Compliance
The system SHALL apply Apple HIG-compliant styling to all markdown elements using the existing design token system.

#### Scenario: Design tokens are reused
- **WHEN** style.css is examined
- **THEN** it includes all CSS custom properties from Typora theme (--primitive-*, --semantic-*, --component-*)
- **AND** tokens maintain identical values for consistency
- **AND** three-layer token architecture is preserved

#### Scenario: Markdown elements are styled
- **WHEN** markdown content is rendered
- **THEN** headings use SF Pro Display with Apple HIG sizes
- **AND** body text uses SF Pro Text at 15px
- **AND** code uses SF Mono with proper sizing
- **AND** all elements follow 8pt grid spacing
- **AND** colors use Apple system color palette

#### Scenario: Typography uses correct fonts
- **WHEN** text is displayed
- **THEN** headings use SF Pro Display for sizes ≥20px
- **AND** body text uses SF Pro Text for sizes ≤19px
- **AND** code elements use SF Mono
- **AND** fallback fonts maintain similar proportions

### Requirement: Dark Mode Adaptation
The system SHALL automatically adapt to system dark mode preferences while maintaining visual hierarchy and accessibility.

#### Scenario: Dark mode is detected and applied
- **WHEN** system prefers dark color scheme
- **THEN** all colors invert to dark mode equivalents using @media (prefers-color-scheme: dark)
- **AND** background becomes dark, text becomes light
- **AND** accent colors adapt appropriately

#### Scenario: Contrast ratios are maintained in dark mode
- **WHEN** dark mode is active
- **THEN** all text meets WCAG 2.1 AA contrast requirements (4.5:1 for normal, 3:1 for large)
- **AND** semantic color meanings are preserved
- **AND** visual hierarchy remains clear

### Requirement: Responsive Layout
The system SHALL provide responsive layout that adapts to different screen sizes and devices.

#### Scenario: Mobile layout is optimized
- **WHEN** viewport width is less than 768px
- **THEN** content uses mobile-optimized spacing
- **AND** touch targets are appropriately sized
- **AND** line length remains readable

#### Scenario: Desktop layout is optimized
- **WHEN** viewport width is greater than 1024px
- **THEN** content width is constrained for readability (max 800px)
- **AND** content is centered on the page
- **AND** spacing follows Apple HIG guidelines

#### Scenario: Tablet layout is optimized
- **WHEN** viewport width is between 768px and 1024px
- **THEN** layout adapts to intermediate sizing
- **AND** maintains readability and hierarchy

### Requirement: Accessibility Features
The system SHALL meet WCAG 2.1 AA accessibility standards and support Apple accessibility features.

#### Scenario: High contrast mode is supported
- **WHEN** high contrast mode is enabled
- **THEN** colors adapt to higher contrast ratios
- **AND** visual elements remain distinguishable
- **AND** text remains readable

#### Scenario: Reduced motion is supported
- **WHEN** user prefers reduced motion
- **THEN** animations and transitions are minimized or removed
- **AND** functionality is not dependent on motion

#### Scenario: Keyboard navigation works
- **WHEN** user navigates with keyboard
- **THEN** all interactive elements have visible focus states
- **AND** focus order is logical
- **AND** focus indicators meet visibility requirements

#### Scenario: Screen readers can access content
- **WHEN** screen reader is active
- **THEN** all content has proper semantic markup
- **AND** ARIA landmarks are correctly implemented
- **AND** content structure is logical and clear

### Requirement: Export Compatibility
The system SHALL support iA Writer's export features (PDF, HTML, Word) while maintaining styling.

#### Scenario: PDF export preserves styling
- **WHEN** document is exported to PDF
- **THEN** typography and spacing are preserved
- **AND** custom fonts are embedded
- **AND** colors are accurate

#### Scenario: HTML export is valid
- **WHEN** document is exported to HTML
- **THEN** output is valid HTML5
- **AND** styling is inline or embedded
- **AND** content is accessible

#### Scenario: Print styles are optimized
- **WHEN** document is printed
- **THEN** @media print styles are applied
- **AND** page breaks are handled appropriately
- **AND** colors are print-optimized

### Requirement: Installation and Usage
The system SHALL provide clear installation instructions and usage documentation for iA Writer users.

#### Scenario: Template can be installed
- **WHEN** user installs the template bundle
- **THEN** iA Writer recognizes it as a valid template
- **AND** template appears in the template picker
- **AND** template name is "Apple HIG"

#### Scenario: Documentation is comprehensive
- **WHEN** user reads the documentation
- **THEN** installation steps are clear and complete
- **AND** customization options are documented
- **AND** troubleshooting guidance is provided
- **AND** differences from Typora version are explained

#### Scenario: Template updates are manageable
- **WHEN** template needs to be updated
- **THEN** update process is documented
- **AND** existing user customizations are preserved where possible
- **AND** version compatibility is clear

### Requirement: Design Consistency
The system SHALL maintain identical visual appearance between Typora and iA Writer implementations.

#### Scenario: Typography is identical
- **WHEN** same content is viewed in both editors
- **THEN** font sizes match at equivalent settings
- **AND** line heights are identical
- **AND** letter spacing is consistent

#### Scenario: Colors are identical
- **WHEN** same content is viewed in both editors
- **THEN** all colors match exactly (light and dark modes)
- **AND** semantic color usage is consistent
- **AND** accent colors are identical

#### Scenario: Spacing is identical
- **WHEN** same content is viewed in both editors
- **THEN** all spacing matches (margins, paddings, gaps)
- **AND** 8pt grid system is maintained
- **AND** content width is comparable

#### Scenario: Elements are styled identically
- **WHEN** specific markdown elements are compared
- **THEN** headings have identical styling
- **AND** lists have identical styling
- **AND** code blocks have identical styling
- **AND** tables have identical styling
- **AND** blockquotes have identical styling
