## ADDED Requirements

### Requirement: Apple HIG Typography Compliance
The theme SHALL implement complete typography compliance with Apple's Human Interface Guidelines using San Francisco font family.

#### Scenario: San Francisco font implementation
- **WHEN** the theme is loaded
- **THEN** all text uses San Francisco font family with proper fallbacks (SF Pro Display, SF Pro Text, SF Mono)

#### Scenario: Typography hierarchy
- **WHEN** different heading levels are rendered
- **THEN** H1 uses 34pt/40pt line height, H2 uses 28pt/34pt, H3 uses 22pt/28pt, H4 uses 20pt/25pt, H5 uses 17pt/22pt, H6 uses 15pt/20pt

#### Scenario: Body text formatting
- **WHEN** paragraph text is displayed
- **THEN** text uses 15pt/20pt line height with proper letter spacing (-0.24pt)

#### Scenario: Code typography
- **WHEN** code blocks or inline code are displayed
- **THEN** text uses SF Mono font with 13pt/18pt line height

### Requirement: Apple Color System Implementation
The theme SHALL implement Apple's complete color system with proper semantic usage and accessibility compliance.

#### Scenario: System colors
- **WHEN** in light mode
- **THEN** background uses system background color, text uses label color, secondary text uses secondary label color

#### Scenario: Dark mode colors
- **WHEN** in dark mode
- **THEN** colors automatically adapt using system dark mode variants with proper contrast ratios

#### Scenario: Accent color usage
- **WHEN** interactive elements are displayed
- **THEN** accent color is used for links, buttons, and focus states following Apple's accent color guidelines

#### Scenario: Semantic color usage
- **WHEN** different content types are displayed
- **THEN** system colors are used semantically (destructive for deletions, warning for cautions, etc.)

### Requirement: 8pt Grid System Compliance
The theme SHALL implement Apple's 8pt grid system for all spacing and layout measurements.

#### Scenario: Consistent spacing
- **WHEN** any spacing is applied
- **THEN** all measurements are multiples of 8pt (8pt, 16pt, 24pt, 32pt, etc.)

#### Scenario: Component spacing
- **WHEN** UI components are laid out
- **THEN** margins and padding follow the 8pt grid system

#### Scenario: Content spacing
- **WHEN** text content is formatted
- **THEN** line heights and paragraph spacing follow the grid system

### Requirement: SF Symbols Integration
The theme SHALL integrate SF Symbols for UI elements where appropriate.

#### Scenario: Symbol usage
- **WHEN** UI elements require icons
- **THEN** SF Symbols are used with proper sizing and alignment

#### Scenario: Symbol states
- **WHEN** interactive elements change state
- **THEN** symbols adapt with proper color variants and sizing

### Requirement: Accessibility Compliance
The theme SHALL meet WCAG 2.1 AA accessibility standards.

#### Scenario: Color contrast
- **WHEN** text is displayed on backgrounds
- **THEN** contrast ratios meet or exceed 4.5:1 for normal text and 3:1 for large text

#### Scenario: Focus states
- **WHEN** keyboard navigation is used
- **THEN** clear focus indicators are visible with proper contrast

#### Scenario: Screen reader support
- **WHEN** content is accessed via screen reader
- **THEN** proper semantic markup and ARIA labels are provided

### Requirement: Dark Mode Support
The theme SHALL provide seamless dark mode support following Apple's guidelines.

#### Scenario: Automatic adaptation
- **WHEN** system dark mode is enabled
- **THEN** theme automatically switches to dark mode variants

#### Scenario: Dark mode colors
- **WHEN** in dark mode
- **THEN** all colors use appropriate dark mode variants with proper contrast

#### Scenario: Dark mode consistency
- **WHEN** switching between light and dark modes
- **THEN** all UI elements maintain proper hierarchy and readability

### Requirement: Markdown Element Styling
The theme SHALL style all markdown elements following Apple's design patterns.

#### Scenario: Heading styling
- **WHEN** markdown headings are rendered
- **THEN** they follow Apple's typography hierarchy with proper spacing

#### Scenario: List styling
- **WHEN** ordered or unordered lists are rendered
- **THEN** they use proper indentation and bullet styles following Apple patterns

#### Scenario: Code block styling
- **WHEN** code blocks are rendered
- **THEN** they use proper background colors, borders, and typography

#### Scenario: Table styling
- **WHEN** tables are rendered
- **THEN** they use proper borders, spacing, and typography following Apple's table design

#### Scenario: Link styling
- **WHEN** links are rendered
- **THEN** they use accent color with proper hover states and underline behavior

### Requirement: Interactive States
The theme SHALL provide proper interactive states following Apple's interaction patterns.

#### Scenario: Hover states
- **WHEN** interactive elements are hovered
- **THEN** they provide subtle visual feedback following Apple's hover patterns

#### Scenario: Active states
- **WHEN** elements are activated
- **THEN** they provide clear visual feedback for the active state

#### Scenario: Selection states
- **WHEN** text is selected
- **THEN** selection uses system selection color with proper contrast

### Requirement: Performance and Smoothness
The theme SHALL provide smooth animations and transitions following Apple's motion guidelines.

#### Scenario: Smooth transitions
- **WHEN** UI states change
- **THEN** transitions are smooth and follow Apple's timing curves

#### Scenario: Responsive interactions
- **WHEN** user interacts with elements
- **THEN** responses are immediate and feel native to macOS