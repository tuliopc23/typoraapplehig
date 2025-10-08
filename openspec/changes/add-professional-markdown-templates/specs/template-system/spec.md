## ADDED Requirements

### Requirement: Personal Brand Cover Template
The system SHALL provide a personal brand cover template that displays the user's icon, name as Large Title (h1), and professional subtitle as Title 1 (h2), centered on the page using Typora-compatible HTML and markdown, following Apple HIG typography scale and spacing guidelines.

#### Scenario: Portfolio cover creation
- **WHEN** user opens personal-brand-cover.md template in Typora
- **THEN** template displays icon at 120px centered with 32px spacing below
- **AND** name appears as h1 (34px SF Pro Display, weight 700) centered
- **AND** subtitle "Full Stack Developer" appears as h2 (28px SF Pro Display, weight 700) with 16px spacing
- **AND** content is vertically centered at 60vh minimum height
- **AND** footer displays small icon (32px) with name in footnote size (13px)
- **AND** all spacing aligns to 8pt grid

#### Scenario: Dark mode adaptation
- **WHEN** user switches to dark mode in system preferences
- **THEN** template automatically adapts using theme's dark mode colors
- **AND** text remains readable with proper contrast ratios
- **AND** icon visibility is preserved
- **AND** blue accent color adjusts to dark mode variant

#### Scenario: Customization with inline guidance
- **WHEN** user views template source
- **THEN** HTML comments document available theme features
- **AND** placeholder text clearly indicates what to replace
- **AND** comments explain spacing values and their grid alignment
- **AND** color variable usage is documented with fallback values

### Requirement: Software Handbook Cover Template
The system SHALL provide a software handbook cover template with centered handbook title, icon branding, version metadata section, and consistent footer, using Apple HIG typography and spacing.

#### Scenario: Technical handbook cover creation
- **WHEN** user opens software-handbook-cover.md template
- **THEN** template displays icon at 100px size above title
- **AND** handbook title appears as h1 (34px) centered
- **AND** subtitle/tagline appears as h2 (28px) with 16px spacing
- **AND** metadata section shows version and date in caption style (12px)
- **AND** footer matches personal brand template styling
- **AND** content is vertically centered with balanced spacing

#### Scenario: Version metadata display
- **WHEN** user populates version and date fields
- **THEN** metadata appears in caption1 size (12px, secondary text color)
- **AND** metadata section has 24px top margin from subtitle
- **AND** text uses theme's secondary color (#8e8e93 light, auto-dark)
- **AND** layout remains centered and balanced

### Requirement: Software Proposal Template
The system SHALL provide a complete software proposal template with structured sections for executive summary, objectives, scope, timeline, technical approach, budget, terms, and signature, demonstrating theme's blockquotes, lists, tables, and code blocks.

#### Scenario: Complete proposal creation
- **WHEN** user opens software-proposal.md template
- **THEN** template includes document header with title and client metadata
- **AND** executive summary section uses blockquote with glass background effect
- **AND** objectives section uses unordered list with blue accent bullets (6px)
- **AND** scope section includes task list with iOS-style checkboxes
- **AND** timeline table uses theme's border colors and proper cell padding
- **AND** technical approach includes code block with SF Mono font
- **AND** budget section presents structured pricing table
- **AND** signature block provides date and signature line placeholders
- **AND** branded footer appears at document end

#### Scenario: Theme feature showcase
- **WHEN** user reviews proposal template
- **THEN** template demonstrates blockquote with 4px left border (accent color)
- **AND** template shows unordered list custom bullets (6px radius, accent color)
- **AND** template includes ordered list with accent-colored numbers
- **AND** template demonstrates table with proper borders and cell spacing
- **AND** template shows inline code with background fill color
- **AND** template includes multi-line code block with syntax highlighting support
- **AND** all features use theme's design tokens (colors, spacing, typography)

#### Scenario: PDF export quality
- **WHEN** user exports proposal template to PDF
- **THEN** all formatting is preserved correctly
- **AND** icons render at proper resolution
- **AND** fonts embed correctly (SF Pro Display/Text/Mono)
- **AND** page breaks occur at logical section boundaries
- **AND** footer appears on appropriate pages
- **AND** blue accent colors print correctly

### Requirement: Template Asset Management
The system SHALL provide icon assets in a templates/assets/ directory with appropriate sizing for cover images (100-120px) and footer images (32px), using relative paths that resolve correctly from template files.

#### Scenario: Icon path resolution
- **WHEN** template references icon via relative path
- **THEN** path resolves as `./assets/tulio-icon.png`
- **AND** icon displays correctly in Typora preview and edit modes
- **AND** icon remains visible after template is copied to new location
- **AND** icon exports correctly to PDF and HTML formats

#### Scenario: Icon sizing consistency
- **WHEN** templates use icon images
- **THEN** cover page icons use 100-120px size range
- **AND** footer icons use exactly 32px size
- **AND** HTML img tags specify explicit width attribute
- **AND** aspect ratio is preserved (square format expected)

### Requirement: Template Feature Documentation
The system SHALL provide comprehensive documentation of theme features through inline HTML comments in templates and a separate TEMPLATES-README.md file, covering color system, typography scale, spacing grid, and customization patterns.

#### Scenario: Inline feature discovery
- **WHEN** user views template source in Typora
- **THEN** HTML comments explain each theme feature used
- **AND** color variables are documented with fallback hex values
- **AND** spacing values reference 8pt grid system
- **AND** typography choices reference Apple HIG scale names
- **AND** comments provide customization hints

#### Scenario: Comprehensive documentation access
- **WHEN** user opens TEMPLATES-README.md
- **THEN** README documents all available theme colors and use cases
- **AND** README lists complete typography scale (h1-h6, body, caption)
- **AND** README explains 8pt grid spacing system with examples
- **AND** README describes supported markdown features (lists, tables, blockquotes, code)
- **AND** README provides HTML customization patterns for layouts
- **AND** README includes icon sizing guidelines
- **AND** README explains dark mode automatic adaptation

#### Scenario: Customization guidance
- **WHEN** user wants to customize a template
- **THEN** README provides section on safe customizations
- **AND** README warns about breaking theme consistency (non-grid spacing, wrong colors)
- **AND** README explains how to preserve branding while personalizing content
- **AND** README includes troubleshooting section for common issues

### Requirement: Branded Footer Component
The system SHALL provide a consistent footer component across all templates displaying a small icon (32px) and user name in footnote size (13px), positioned discretely at bottom of document using semantic text colors.

#### Scenario: Footer rendering
- **WHEN** template renders in Typora
- **THEN** footer appears at bottom with proper spacing (64px top margin)
- **AND** footer displays icon at 32px size aligned left or centered
- **AND** footer text uses footnote size (13px) in secondary text color
- **AND** footer maintains discrete, non-intrusive appearance
- **AND** footer adapts to dark mode automatically

#### Scenario: Footer consistency
- **WHEN** user views multiple templates
- **THEN** all footers use identical HTML structure
- **AND** all footers use same icon size and text styling
- **AND** footer spacing is consistent across templates (64px top)
- **AND** footer color and typography match theme conventions

### Requirement: Apple HIG Design Compliance
The system SHALL ensure all templates strictly follow Apple Human Interface Guidelines for typography scale, color semantics, 8pt grid spacing, and accessibility, with no custom sizes or non-standard colors.

#### Scenario: Typography scale compliance
- **WHEN** templates use heading elements
- **THEN** h1 uses exactly 34px (Large Title) SF Pro Display weight 700
- **AND** h2 uses exactly 28px (Title 1) SF Pro Display weight 700
- **AND** h3 uses exactly 22px (Title 2) weight 600
- **AND** h4 uses exactly 20px (Title 3) weight 600
- **AND** body text uses exactly 15px (Body) weight 400
- **AND** caption text uses exactly 12px (Caption 1) weight 400

#### Scenario: Color semantic compliance
- **WHEN** templates apply colors
- **THEN** blue accent uses exactly #0071e3 (light mode) or theme's dark variant
- **AND** primary text uses #1d1d1f (light) or theme's dark variant
- **AND** secondary text uses #8e8e93 (light) or theme's dark variant
- **AND** borders use #e5e5ea (light) or theme's dark variant
- **AND** no gradients or unsupported CSS color features are used

#### Scenario: Spacing grid compliance
- **WHEN** templates define spacing values
- **THEN** all margin and padding values are multiples of 8px
- **AND** common spacing uses: 8px, 16px, 24px, 32px, 48px, 64px
- **AND** no odd or non-grid spacing values appear
- **AND** vertical rhythm follows grid consistently

#### Scenario: Accessibility compliance
- **WHEN** templates render in both light and dark modes
- **THEN** text contrast ratios meet WCAG 2.1 AA standards (4.5:1 normal, 3:1 large)
- **AND** heading hierarchy is semantic and logical (no skipped levels)
- **AND** link colors maintain sufficient contrast in both modes
- **AND** icon alt text is provided for screen readers
- **AND** interactive elements have clear focus states
