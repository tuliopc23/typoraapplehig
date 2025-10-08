## ADDED Requirements

### Requirement: Theme Rendering Debugging
The theme SHALL render correctly in Typora without visual artifacts or missing elements.

#### Scenario: Theme loads successfully
- **WHEN** user installs the Apple HIG theme in Typora
- **THEN** the theme loads without errors and displays all visual elements correctly

#### Scenario: Fonts load properly
- **WHEN** the theme is activated in Typora
- **THEN** all San Francisco fonts load correctly and display as intended

#### Scenario: CSS selectors target correct elements
- **WHEN** the theme is applied to markdown content
- **THEN** all CSS selectors properly target Typora's DOM elements

### Requirement: Cross-Platform Compatibility
The theme SHALL work consistently across all supported platforms.

#### Scenario: macOS compatibility
- **WHEN** theme is used on macOS
- **THEN** all visual elements render correctly with native Apple appearance

#### Scenario: Windows compatibility
- **WHEN** theme is used on Windows
- **THEN** theme renders correctly with proper font fallbacks

#### Scenario: Linux compatibility
- **WHEN** theme is used on Linux
- **THEN** theme renders correctly with appropriate font substitutions

### Requirement: Typora Integration
The theme SHALL integrate properly with Typora's markdown rendering system.

#### Scenario: Markdown elements styled correctly
- **WHEN** user types various markdown elements (headings, lists, code blocks, etc.)
- **THEN** all elements are styled according to Apple HIG specifications

#### Scenario: Theme switching works
- **WHEN** user switches between themes
- **THEN** the Apple HIG theme activates and deactivates properly

#### Scenario: Theme persists across sessions
- **WHEN** user closes and reopens Typora
- **THEN** the Apple HIG theme remains active and functional

## MODIFIED Requirements

### Requirement: Font Loading System
The font loading system SHALL be robust and provide proper fallbacks for all platforms.

#### Scenario: Primary fonts load successfully
- **WHEN** San Francisco fonts are available on the system
- **THEN** they are used for all text elements

#### Scenario: Fallback fonts work correctly
- **WHEN** San Francisco fonts are not available
- **THEN** appropriate fallback fonts are used without visual degradation

#### Scenario: Font loading errors are handled gracefully
- **WHEN** font files fail to load
- **THEN** the theme continues to function with system fonts

### Requirement: CSS Compatibility
The CSS SHALL be compatible with Typora's rendering engine and supported CSS features.

#### Scenario: CSS custom properties work
- **WHEN** the theme uses CSS custom properties
- **THEN** they are supported and render correctly in Typora

#### Scenario: Modern CSS features have fallbacks
- **WHEN** the theme uses modern CSS features like backdrop-filter
- **THEN** appropriate fallbacks are provided for unsupported versions

#### Scenario: CSS syntax is valid
- **WHEN** the theme CSS is parsed by Typora
- **THEN** no syntax errors prevent theme loading

## REMOVED Requirements

### Requirement: Legacy Browser Support
**Reason**: Typora uses modern rendering engines that support current CSS standards
**Migration**: Focus on Typora-specific compatibility rather than legacy browser support