# Typora Theme Specification

## MODIFIED Requirements

### Requirement: Typography System Compliance
The Typora theme SHALL implement exact Apple Human Interface Guidelines typography specifications for macOS to achieve 100% compliance with Apple's design standards.

#### Scenario: Font Size Precision
- **WHEN** displaying text content in Typora
- **THEN** font sizes SHALL match exact Apple HIG specifications:
  - Large Title: 34pt (was 34px)
  - Title 1: 28pt (was 28px) 
  - Title 2: 22pt (was 22px)
  - Title 3: 20pt (was 20px)
  - Headline: 17pt (was 17px)
  - Body: 15pt (was 15px)
  - Callout: 16pt (was 16px)
  - Subhead: 15pt (was 15px)
  - Footnote: 13pt (was 13px)
  - Caption 1: 12pt (was 12px)
  - Caption 2: 11pt (was 11px)

#### Scenario: Letter Spacing Precision
- **WHEN** rendering text at different sizes
- **THEN** letter spacing SHALL use exact Apple tracking values from HIG specifications
- **AND** tracking SHALL be calculated as specified in Apple's tracking tables
- **AND** negative tracking SHALL be applied to larger text sizes for optimal readability

#### Scenario: Font Weight Mapping
- **WHEN** applying font weights to text elements
- **THEN** weights SHALL map to Apple's semantic weight system:
  - Regular: 400 (for body text and default content)
  - Medium: 500 (for emphasized content)
  - Semibold: 600 (for headings and important text)
  - Bold: 700 (for strong emphasis and large titles)

### Requirement: Color System Precision
The theme SHALL implement exact Apple system colors with proper semantic usage and accessibility compliance.

#### Scenario: System Color Implementation
- **WHEN** applying colors to interface elements
- **THEN** colors SHALL use exact Apple system color values:
  - Label (primary text): #1d1d1f (light), #f5f5f7 (dark)
  - Secondary Label: #8e8e93 (light), #98989d (dark)
  - Tertiary Label: #aeaeb2 (light), #7c7c80 (dark)
  - Quaternary Label: #c7c7cc (light), #636366 (dark)
  - System Blue: #0071e3 (light), #0a84ff (dark)
  - System Green: #34c759 (light), #32d74b (dark)

#### Scenario: Semantic Color Usage
- **WHEN** displaying different types of content
- **THEN** colors SHALL be used semantically according to Apple guidelines:
  - Primary text uses label color
  - Secondary information uses secondary label color
  - Disabled or placeholder text uses tertiary/quaternary label colors
  - Interactive elements use system blue as accent color
  - Success states use system green
  - Warning states use system orange
  - Error states use system red

#### Scenario: Dark Mode Color Adaptation
- **WHEN** system is in dark mode
- **THEN** all colors SHALL automatically adapt to Apple's dark mode specifications
- **AND** contrast ratios SHALL maintain WCAG 2.1 AA compliance
- **AND** color relationships SHALL remain consistent across light and dark modes

### Requirement: Component Apple Design Compliance
All Markdown components SHALL follow Apple's Human Interface Guidelines component design patterns.

#### Scenario: List Component Styling
- **WHEN** rendering unordered lists
- **THEN** bullets SHALL use 6px circular indicators with accent color
- **AND** bullet positioning SHALL align with Apple's list design specifications
- **AND** list item spacing SHALL follow 8pt grid system

#### Scenario: Table Component Design
- **WHEN** displaying tables
- **THEN** headers SHALL use semibold weight with proper Apple typography
- **AND** row hover states SHALL use Apple's fill color specifications
- **AND** table borders SHALL use Apple's separator color system
- **AND** alternating row colors SHALL be available for better readability

#### Scenario: Interactive Element States
- **WHEN** user interacts with clickable elements
- **THEN** hover states SHALL use Apple's interaction color specifications
- **AND** focus states SHALL display 3px accent color outline with 2px offset
- **AND** active states SHALL provide appropriate visual feedback
- **AND** transitions SHALL use Apple's timing curves and durations

### Requirement: Layout and Spacing Precision
All layout and spacing SHALL strictly follow Apple's 8pt grid system and layout principles.

#### Scenario: 8pt Grid Compliance
- **WHEN** applying spacing to any element
- **THEN** all margins and padding SHALL use multiples of 8pt (8px, 16px, 24px, 32px, etc.)
- **AND** component spacing SHALL create clear visual hierarchy
- **AND** vertical rhythm SHALL be consistent across all text elements

#### Scenario: Content Width and Responsive Behavior
- **WHEN** displaying content at different screen sizes
- **THEN** content width SHALL follow Apple's recommended reading widths
- **AND** responsive breakpoints SHALL align with Apple's adaptive design principles
- **AND** typography SHALL scale appropriately for different screen sizes

#### Scenario: Visual Hierarchy Implementation
- **WHEN** displaying mixed content types
- **THEN** spacing SHALL create clear visual separation between different content types
- **AND** related content SHALL be grouped with consistent spacing
- **AND** hierarchy SHALL be immediately apparent through spacing and typography

## ADDED Requirements

### Requirement: Accessibility Enhancement
The theme SHALL provide enhanced accessibility features that exceed basic compliance requirements.

#### Scenario: High Contrast Mode Support
- **WHEN** user enables high contrast mode
- **THEN** all text SHALL use maximum contrast colors (black on white, white on black)
- **AND** interactive elements SHALL have clearly visible borders
- **AND** glass effects SHALL be disabled for better clarity

#### Scenario: Reduced Motion Support
- **WHEN** user prefers reduced motion
- **THEN** all animations and transitions SHALL be minimized or disabled
- **AND** hover effects SHALL still provide visual feedback without motion
- **AND** glass blur effects SHALL remain static

#### Scenario: Keyboard Navigation Enhancement
- **WHEN** user navigates using keyboard
- **THEN** all interactive elements SHALL have visible focus indicators
- **AND** focus order SHALL be logical and predictable
- **AND** focus indicators SHALL meet Apple's accessibility standards

### Requirement: Glass Material System Refinement
The liquid glass aesthetic SHALL be refined to better complement Apple's design language while maintaining visual appeal.

#### Scenario: Glass Effect Authenticity
- **WHEN** displaying glass materials
- **THEN** opacity, blur, and saturation values SHALL create authentic glass appearance
- **AND** glass effects SHALL not interfere with text readability
- **AND** fallback styles SHALL provide equivalent visual hierarchy for unsupported browsers

#### Scenario: Performance Optimization
- **WHEN** rendering on mobile devices or lower-powered systems
- **THEN** glass effects SHALL be optimized for performance
- **AND** reduced blur values SHALL be used on mobile devices
- **AND** visual quality SHALL remain high while maintaining smooth performance

### Requirement: Print Style Optimization
The theme SHALL provide optimized print styles that maintain document structure and readability.

#### Scenario: Print Layout Optimization
- **WHEN** user prints or exports to PDF
- **THEN** all glass effects SHALL be removed for better print quality
- **AND** colors SHALL be optimized for black and white printing
- **AND** typography SHALL remain readable at print sizes
- **AND** page breaks SHALL be handled appropriately for long documents
