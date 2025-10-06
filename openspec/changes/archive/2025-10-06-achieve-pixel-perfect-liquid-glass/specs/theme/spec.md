# Theme Capability Specification - Pixel-Perfect Liquid Glass

## MODIFIED Requirements

### Requirement: Visual Design Compliance
The theme SHALL achieve 100% pixel-perfect compliance with Apple's post-WWDC 2025 design language, including Liquid Glass materials, macOS Tahoe color system, and iOS 26 interaction patterns.

#### Scenario: Visual comparison with native macOS apps
- **GIVEN** the theme is applied to a Typora document
- **AND** a native macOS app (e.g., Notes, Pages) is open side-by-side
- **WHEN** comparing typography, colors, spacing, and materials
- **THEN** visual differences SHALL be imperceptible (<5% deviation)
- **AND** blur effects SHALL match Photos.app inspector panel
- **AND** rounded corners SHALL match Safari tab design
- **AND** shadows SHALL match System Settings.app panels

#### Scenario: Liquid Glass material rendering
- **GIVEN** a content card or code block element
- **WHEN** rendered with glass material
- **THEN** backdrop SHALL be blurred at 20px
- **AND** background SHALL have 72% opacity (light mode) or 70% opacity (dark mode)
- **AND** content SHALL maintain readability with vibrancy effects
- **AND** glass texture overlay SHALL be visible but subtle
- **AND** performance SHALL maintain 60fps scrolling

---

### Requirement: Complete Light Mode Implementation
The theme SHALL provide a fully-featured light mode color system matching macOS Tahoe specifications, with accurate semantic color usage and proper contrast ratios.

#### Scenario: Light mode activation
- **GIVEN** system appearance is set to light mode
- **WHEN** Typora loads the theme
- **THEN** background SHALL be `#ffffff` (pure white)
- **AND** secondary background SHALL be `#f5f5f7` (light gray)
- **AND** primary text SHALL be `#1d1d1f` (near black)
- **AND** secondary text SHALL be `#86868b` (medium gray)
- **AND** accent color SHALL be `#0071e3` (Apple blue)
- **AND** all elements SHALL have WCAG 2.1 AA compliant contrast (minimum 4.5:1)

#### Scenario: Light mode glass materials
- **GIVEN** light mode is active
- **WHEN** glass materials are rendered
- **THEN** glass background SHALL be `rgba(255, 255, 255, 0.72)`
- **AND** backdrop-filter SHALL use `saturate(180%) blur(20px)`
- **AND** shadows SHALL be lighter with `rgba(0, 0, 0, 0.08)` base color
- **AND** readability SHALL be maintained with vibrancy text rendering

#### Scenario: Automatic theme switching
- **GIVEN** the document is open in Typora
- **WHEN** system appearance changes from dark to light (or vice versa)
- **THEN** theme SHALL transition smoothly within 300ms
- **AND** all colors SHALL update to appropriate mode
- **AND** no visual glitches or flash of unstyled content SHALL occur

---

### Requirement: Rounded Corner System
The theme SHALL implement Apple's continuous corner radius system (squircle approximation) with proper hierarchy and consistency across all UI elements.

#### Scenario: Corner radius hierarchy
- **GIVEN** various UI elements (buttons, cards, code blocks, images)
- **WHEN** rendered in the theme
- **THEN** small elements SHALL use 10px radius (buttons, tags)
- **AND** medium elements SHALL use 16px radius (cards, alerts)
- **AND** large elements SHALL use 20px radius (code blocks, images)
- **AND** extra-large elements SHALL use 28px radius (hero sections)

#### Scenario: Squircle approximation accuracy
- **GIVEN** a card component with continuous corners
- **WHEN** compared to native macOS UI elements
- **THEN** corner curve SHALL visually match Apple's squircle (95% accuracy)
- **AND** corners SHALL appear smooth without sharp transitions
- **AND** mathematical approximation SHALL use optimized border-radius values

---

## ADDED Requirements

### Requirement: Liquid Glass Material System
The theme SHALL implement a multi-layer glass material system using CSS backdrop-filter, providing authentic translucent depth matching Apple's Liquid Glass design language.

#### Scenario: Glass material layers
- **GIVEN** a glass material element (card, panel, modal)
- **WHEN** rendered in the viewport
- **THEN** element SHALL have three visual layers:
  - Background layer with blur effect
  - Texture overlay at 3% opacity
  - Content layer with proper vibrancy
- **AND** backdrop-filter SHALL blur background content at 20px
- **AND** saturation SHALL be increased to 180%
- **AND** element SHALL have subtle noise texture overlay

#### Scenario: Glass material performance
- **GIVEN** a document with multiple glass elements
- **WHEN** scrolling through content
- **THEN** frame rate SHALL maintain 60fps
- **AND** CSS containment SHALL be applied to reduce repaint areas
- **AND** GPU acceleration SHALL be enabled for blur effects
- **AND** mobile devices SHALL use reduced blur (10px) for performance

#### Scenario: Glass material fallback
- **GIVEN** a browser without backdrop-filter support
- **WHEN** loading the theme
- **THEN** glass elements SHALL gracefully degrade to solid backgrounds
- **AND** color SHALL use `--color-background-secondary`
- **AND** visual hierarchy SHALL be maintained with borders and shadows
- **AND** @supports feature detection SHALL handle fallback

---

### Requirement: Enhanced Color Palette (2025)
The theme SHALL implement the complete macOS Tahoe and iOS 26 color system with semantic tokens, accent variations, and adaptive colors.

#### Scenario: System color completeness
- **GIVEN** the theme is loaded
- **WHEN** inspecting CSS custom properties
- **THEN** theme SHALL define 60+ color tokens including:
  - 12 background colors (6 light, 6 dark)
  - 8 text colors (4 light, 4 dark)
  - 10 accent colors (blue, green, orange, red, purple, yellow, pink, teal, indigo, brown)
  - 6 semantic colors (success, warning, error, info, neutral)
  - 8 UI element colors (borders, dividers, fills)

#### Scenario: Semantic color usage
- **GIVEN** different content types (success message, warning, error, info)
- **WHEN** styled in the theme
- **THEN** success SHALL use green (`#34c759` light, `#32d74b` dark)
- **AND** warning SHALL use orange (`#ff9500` light, `#ff9f0a` dark)
- **AND** error SHALL use red (`#ff3b30` light, `#ff453a` dark)
- **AND** info SHALL use blue (`#0071e3` light, `#0a84ff` dark)

#### Scenario: Adaptive accent colors
- **GIVEN** interactive elements (links, buttons, highlights)
- **WHEN** user hovers or focuses
- **THEN** accent color SHALL adapt brightness appropriately
- **AND** light mode SHALL use darker hover state
- **AND** dark mode SHALL use lighter hover state
- **AND** contrast SHALL remain WCAG AA compliant in all states

---

### Requirement: Comprehensive Typora Feature Support
The theme SHALL style all Typora-specific markdown features including alerts, diagrams, math expressions, task lists, footnotes, and embedded content.

#### Scenario: GitHub Alerts styling
- **GIVEN** a markdown document with GitHub-style alerts
- **WHEN** rendering [!NOTE], [!TIP], [!WARNING], [!CAUTION], [!IMPORTANT]
- **THEN** each alert type SHALL have:
  - Appropriate semantic color (blue, green, yellow, orange, red)
  - Glass material background
  - Icon indicator (emoji or symbol)
  - 16px border-radius
  - Proper padding (16px vertical, 20px horizontal)

#### Scenario: Mermaid diagram theming
- **GIVEN** a Mermaid diagram in markdown
- **WHEN** rendered by Typora
- **THEN** diagram SHALL use 2025 Apple color palette
- **AND** background SHALL be transparent or subtle glass
- **AND** shapes SHALL have rounded corners (12px)
- **AND** text SHALL use SF Pro font
- **AND** colors SHALL adapt to light/dark mode

#### Scenario: LaTeX math expressions
- **GIVEN** inline or block math using LaTeX
- **WHEN** rendered by Typora
- **THEN** inline math SHALL use accent color (`--color-accent`)
- **AND** block math SHALL have glass card background
- **AND** math font SHALL render with proper spacing
- **AND** equations SHALL be centered in block mode

#### Scenario: Task list checkboxes
- **GIVEN** a task list with checked and unchecked items
- **WHEN** rendered in the theme
- **THEN** checkboxes SHALL match iOS design (rounded square, 20px)
- **AND** checked state SHALL show filled blue circle with white checkmark
- **AND** unchecked state SHALL show border-only square
- **AND** checkbox SHALL have smooth animation (200ms) on toggle
- **AND** completed tasks SHALL have strike-through text

#### Scenario: Code block enhancements
- **GIVEN** a fenced code block with language specification
- **WHEN** rendered by Typora
- **THEN** code block SHALL have:
  - Glass material background
  - Language badge in top-right corner
  - macOS window controls (red/yellow/green dots)
  - Line numbers with proper monospace alignment
  - Copy button on hover (styled as glass button)
  - 20px border-radius
  - Syntax highlighting with 2025 color palette

#### Scenario: Table enhancements
- **GIVEN** a markdown table
- **WHEN** rendered by Typora
- **THEN** table SHALL have:
  - Glass material background for header row
  - Rounded corners on table container (12px)
  - Row hover effect with subtle background change
  - Proper cell padding (12px vertical, 16px horizontal)
  - Responsive horizontal scroll on mobile
  - Alternating row colors (optional striping)

---

### Requirement: Animation and Micro-Interaction System
The theme SHALL implement Apple's motion design language with spring-based animations, proper timing curves, and haptic feedback simulation through visual effects.

#### Scenario: Button interaction animation
- **GIVEN** a button element
- **WHEN** user clicks or taps
- **THEN** button SHALL scale to 96% within 200ms
- **AND** animation SHALL use spring easing `cubic-bezier(0.5, 1.5, 0.5, 1)`
- **AND** background SHALL transition color over 300ms
- **AND** release SHALL bounce back to 100% scale
- **AND** visual feedback SHALL simulate tactile interaction

#### Scenario: Card hover animation
- **GIVEN** a glass card component
- **WHEN** user hovers with mouse
- **THEN** card SHALL lift with increased shadow (0px → 8px) over 300ms
- **AND** glass blur SHALL intensify slightly (20px → 24px)
- **AND** cursor SHALL change to pointer if interactive
- **AND** transition SHALL use ease-out timing

#### Scenario: Scroll animations
- **GIVEN** long-form content being scrolled
- **WHEN** new content enters viewport
- **THEN** elements SHALL fade in with opacity 0 → 1 over 400ms
- **AND** optional parallax effect SHALL apply to hero images
- **AND** animations SHALL respect prefers-reduced-motion
- **AND** performance SHALL maintain 60fps

#### Scenario: Loading state animations
- **GIVEN** content being loaded (images, embeds)
- **WHEN** awaiting response
- **THEN** skeleton screen SHALL display with shimmer effect
- **AND** shimmer SHALL move left-to-right over 1500ms, repeating
- **AND** background SHALL pulse subtly
- **AND** transition to loaded content SHALL be smooth (fade-in 300ms)

---

### Requirement: Advanced Accessibility Features
The theme SHALL exceed WCAG 2.1 AA standards and support Apple's accessibility features including high contrast mode, reduced transparency, and enhanced keyboard navigation.

#### Scenario: WCAG 2.1 AAA text contrast
- **GIVEN** all text elements in the theme
- **WHEN** measured against their backgrounds
- **THEN** body text (15px) SHALL have minimum 7:1 contrast ratio (AAA)
- **AND** large text (20px+) SHALL have minimum 4.5:1 contrast ratio
- **AND** interactive elements SHALL maintain contrast in all states
- **AND** no color SHALL be the sole indicator of information

#### Scenario: High contrast mode support
- **GIVEN** system high contrast mode is enabled
- **WHEN** theme is loaded
- **THEN** colors SHALL switch to high contrast palette
- **AND** text SHALL be pure black (#000000) on pure white (#ffffff) in light mode
- **AND** text SHALL be pure white (#ffffff) on pure black (#000000) in dark mode
- **AND** glass effects SHALL be disabled
- **AND** borders SHALL be increased to 2px for clarity

#### Scenario: Reduced transparency mode
- **GIVEN** system reduced transparency preference is enabled
- **WHEN** theme is loaded
- **THEN** all glass materials SHALL use solid backgrounds
- **AND** backdrop-filter SHALL be disabled
- **AND** opacity values SHALL be set to 1.0
- **AND** visual hierarchy SHALL be maintained with borders and shadows

#### Scenario: Keyboard navigation focus indicators
- **GIVEN** user navigating with keyboard (Tab key)
- **WHEN** focusing on interactive elements
- **THEN** focus ring SHALL be 3px solid accent color
- **AND** focus ring SHALL have 2px offset from element
- **AND** focus ring SHALL have 6px border-radius
- **AND** focus SHALL be clearly visible in both light and dark modes
- **AND** tab order SHALL follow logical reading order

#### Scenario: Screen reader optimization
- **GIVEN** user navigating with VoiceOver or NVDA
- **WHEN** reading document content
- **THEN** heading hierarchy SHALL be properly announced (H1-H6)
- **AND** ARIA labels SHALL be present on interactive elements
- **AND** skip links SHALL allow bypassing navigation
- **AND** image alt text SHALL be properly announced
- **AND** table structure SHALL be semantically correct

---

### Requirement: Responsive Design System
The theme SHALL adapt gracefully across all device sizes from mobile (320px) to ultra-wide displays (3840px+) with appropriate layout, typography, and material adjustments.

#### Scenario: Mobile optimization (320px - 767px)
- **GIVEN** viewport width is mobile size
- **WHEN** rendering content
- **THEN** typography SHALL scale down appropriately (14px base)
- **AND** touch targets SHALL be minimum 44px × 44px
- **AND** glass blur SHALL be reduced to 10px for performance
- **AND** horizontal padding SHALL be 16px
- **AND** tables SHALL scroll horizontally
- **AND** code blocks SHALL have horizontal scroll

#### Scenario: Tablet optimization (768px - 1023px)
- **GIVEN** viewport width is tablet size (iPad)
- **WHEN** rendering content
- **THEN** content width SHALL be 90% with max 720px
- **AND** typography SHALL use full scale (15px base)
- **AND** sidebar SHALL appear on landscape orientation
- **AND** glass effects SHALL use full 20px blur

#### Scenario: Desktop standard (1024px - 1919px)
- **GIVEN** viewport width is standard desktop
- **WHEN** rendering content
- **THEN** content width SHALL be 800px centered
- **AND** full glass effects SHALL be enabled
- **AND** multi-column layouts SHALL be available
- **AND** sidebar navigation SHALL be persistent

#### Scenario: Ultra-wide displays (1920px+)
- **GIVEN** viewport width exceeds 1920px
- **WHEN** rendering content
- **THEN** content width SHALL max at 1200px
- **AND** optional sidebar panels SHALL appear
- **AND** extra space SHALL be used for margins, not content stretch
- **AND** visual hierarchy SHALL remain clear

#### Scenario: Print stylesheet
- **GIVEN** user initiates print or PDF export
- **WHEN** rendering for print
- **THEN** glass backgrounds SHALL be removed
- **AND** shadows SHALL be removed
- **AND** colors SHALL be print-optimized (black text on white)
- **AND** page breaks SHALL be controlled to avoid orphans
- **AND** links SHALL show URLs in parentheses

---

### Requirement: Performance Optimization
The theme SHALL maintain excellent performance metrics including <100ms initial render, 60fps animations, and minimal memory footprint even with large documents.

#### Scenario: Initial render performance
- **GIVEN** a typical markdown document (1000 lines)
- **WHEN** theme first loads
- **THEN** first contentful paint SHALL occur within 100ms
- **AND** largest contentful paint SHALL occur within 200ms
- **AND** cumulative layout shift SHALL be 0 (no layout jumps)
- **AND** time to interactive SHALL be within 300ms

#### Scenario: Animation frame rate
- **GIVEN** multiple simultaneous animations (hover, scroll, transitions)
- **WHEN** user interacts with content
- **THEN** frame rate SHALL maintain 60fps (16.67ms per frame)
- **AND** no animation frames SHALL be dropped
- **AND** GPU acceleration SHALL be enabled for transforms
- **AND** repaints SHALL be minimized with CSS containment

#### Scenario: Large document handling
- **GIVEN** a very large document (10,000+ lines)
- **WHEN** scrolling through content
- **THEN** scroll performance SHALL remain smooth (60fps)
- **AND** memory usage SHALL stay under 100MB
- **AND** CSS containment SHALL prevent excessive reflows
- **AND** lazy loading hints SHALL be applied

#### Scenario: Glass effect performance
- **GIVEN** multiple glass material elements on screen
- **WHEN** scrolling or resizing
- **THEN** backdrop-filter SHALL use GPU acceleration
- **AND** blur calculations SHALL be optimized
- **AND** performance SHALL degrade gracefully on low-end devices
- **AND** mobile SHALL use reduced blur (10px vs 20px)

---

### Requirement: Design Token System
The theme SHALL expose a comprehensive design token system with 100+ CSS custom properties organized in a hierarchical structure (primitive → semantic → component).

#### Scenario: Token hierarchy layers
- **GIVEN** the theme's CSS custom properties
- **WHEN** examining token structure
- **THEN** primitive tokens SHALL define raw values (colors, sizes)
- **AND** semantic tokens SHALL reference primitive tokens with meaning
- **AND** component tokens SHALL reference semantic tokens
- **AND** token naming SHALL follow consistent convention (--{layer}-{category}-{property}-{variant})

#### Scenario: Token customization
- **GIVEN** a user wanting to customize the theme
- **WHEN** overriding CSS custom properties
- **THEN** changing primitive tokens SHALL cascade to all dependent tokens
- **AND** theme SHALL provide preset configurations (minimal, standard, vibrant)
- **AND** documentation SHALL list all customizable tokens
- **AND** examples SHALL demonstrate common customizations

#### Scenario: Token documentation
- **GIVEN** the theme repository
- **WHEN** accessing documentation
- **THEN** all 100+ tokens SHALL be documented with:
  - Token name and default value
  - Purpose and usage context
  - Dependencies on other tokens
  - Example customization
  - Visual preview

---

### Requirement: Browser Compatibility and Fallbacks
The theme SHALL work across modern browsers (Safari 17+, Chrome 120+, Firefox 120+, Edge 120+) with graceful degradation for unsupported features.

#### Scenario: Backdrop-filter support detection
- **GIVEN** a browser without backdrop-filter support
- **WHEN** loading the theme
- **THEN** @supports rule SHALL detect lack of support
- **AND** glass materials SHALL fallback to solid backgrounds
- **AND** fallback background SHALL use `--color-background-secondary`
- **AND** visual hierarchy SHALL be preserved with borders

#### Scenario: CSS Grid fallback
- **GIVEN** a browser with limited CSS Grid support
- **WHEN** rendering grid layouts
- **THEN** theme SHALL fallback to flexbox layout
- **AND** content order SHALL remain logical
- **AND** responsive breakpoints SHALL still function

#### Scenario: Custom property fallback
- **GIVEN** a browser without full CSS custom property support
- **WHEN** loading the theme
- **THEN** fallback values SHALL be provided inline
- **AND** theme SHALL remain functional without tokens
- **AND** visual quality SHALL degrade gracefully

#### Scenario: Progressive enhancement
- **GIVEN** varying browser capabilities
- **WHEN** loading the theme
- **THEN** core content SHALL be readable in all browsers
- **AND** enhancements SHALL layer on top for capable browsers
- **AND** no JavaScript SHALL be required for basic functionality
- **AND** feature detection SHALL use CSS-only methods

---

## REMOVED Requirements

### Requirement: iOS 7 Flat Design Aesthetic
**Reason**: Replaced by Liquid Glass material design from WWDC 2025  
**Migration**: Update to new glass material system with depth and translucency

---

### Requirement: Simple Opacity-Based Backgrounds
**Reason**: Insufficient for authentic glass effect, lacks blur and vibrancy  
**Migration**: Upgrade to backdrop-filter based glass materials

---

## RENAMED Requirements

**FROM**: `### Requirement: Dark Mode Support`  
**TO**: `### Requirement: Adaptive Theme System (Light/Dark Mode)`

Rationale: Expanded scope to include full light mode implementation, not just dark mode as an add-on
