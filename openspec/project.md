# Project Context

## Purpose
A Typora theme that achieves 100% compliance with Apple's Human Interface Guidelines, providing a native macOS experience for markdown editing. This project delivers a professional, accessible, and visually consistent theme following Apple's design system.

## Tech Stack
- **Primary Language**: CSS3 (theme styling)
- **Utilities**: JavaScript/Node.js (font setup and validation scripts)
- **Development**: OpenSpec for specification-driven development
- **Version Control**: Git
- **Platform**: macOS primary, cross-platform compatible (Windows/Linux)
- **Target Application**: Typora (markdown editor)

## Project Conventions

### Code Style
- **CSS**: 2-space indentation, kebab-case for custom properties
- **JavaScript**: 2-space indentation, camelCase for variables and functions
- **Comments**: Document complex calculations and Apple HIG compliance decisions
- **Organization**: Logical grouping (typography, colors, spacing, components)
- **Custom Properties**: Use CSS variables for all design tokens

### Architecture Patterns
- **Design System First**: All styles derive from Apple HIG specifications
- **Atomic Design**: Build from tokens → elements → components
- **CSS Custom Properties**: Centralized design tokens for customization
- **Progressive Enhancement**: Core functionality works everywhere, enhancements for capable browsers
- **Separation of Concerns**: 
  - `apple-hig-theme.css`: Main theme file
  - Font utilities: Separate JS scripts for font management
  - Validation: Standalone compliance checking

### Testing Strategy
- **Visual Testing**: Compare against Apple's official design system
- **Accessibility Testing**: WCAG 2.1 AA compliance validation
- **Cross-platform Testing**: Verify on macOS, Windows, and Linux
- **Dark Mode Testing**: Ensure proper adaptation in both modes
- **Contrast Testing**: Validate all text meets minimum contrast ratios
- **Validation Scripts**: Automated compliance checking with `validate-hig-compliance.js`

### Git Workflow
- **Main branch**: `main` (protected)
- **Feature branches**: `add-feature-name` or `fix-issue-name`
- **Commit format**: Descriptive commits (e.g., "Add SF Pro font integration", "Fix dark mode contrast ratios")
- **Pull requests**: Required for significant changes
- **Review process**: Visual review for design changes, code review for scripts

## Domain Context
- **Primary Domain**: Typora theme development following Apple Human Interface Guidelines
- **Target Users**: 
  - Mac users who want a native macOS experience in Typora
  - Developers and writers who prioritize design quality
  - Users requiring accessibility compliance
- **Key Features**:
  - San Francisco font family (SF Pro Display, SF Pro Text, SF Mono)
  - Complete Apple color system with light/dark mode
  - 8pt grid spacing system
  - WCAG 2.1 AA accessibility compliance
  - Responsive design for all screen sizes
- **Integration Points**: 
  - Typora's CSS theme system
  - macOS system preferences (dark mode, high contrast)
  - SF Symbols (future consideration)

## Important Constraints
- **100% Apple HIG Compliance**: All design decisions must follow Apple's guidelines
- **Accessibility**: WCAG 2.1 AA minimum, proper contrast ratios mandatory
- **Cross-platform**: Must work on macOS, Windows, and Linux (with fallback fonts)
- **Typography**: San Francisco fonts preferred, system fonts as fallbacks
- **8pt Grid**: All spacing must follow Apple's 8pt grid system
- **Dark Mode**: Seamless automatic switching based on system preference
- **No Breaking Changes**: Maintain backward compatibility with Typora versions ≥0.9.0
- **Performance**: CSS only, no JavaScript in theme (utilities are optional)

## External Dependencies
- **San Francisco Fonts**: SF Pro Display, SF Pro Text, SF Mono (user must install separately)
- **Typora**: Version 0.9.0 or higher
- **System Fonts**: Fallbacks for when SF fonts unavailable
- **Node.js**: Required only for development utilities (font setup, validation)
- **No Runtime Dependencies**: Theme is pure CSS with no external resources

## File Structure
- **Theme Files**:
  - `apple-hig-theme.css` - Main theme implementation
  - `apple-hig-typora.css` - Typora-specific adaptations
- **Utilities**:
  - `setup-fonts.js` - Font installation helper
  - `convert-fonts.js` - Font format conversion
  - `validate-hig-compliance.js` - Automated compliance checking
- **Documentation**:
  - `README.md` - User-facing documentation
  - `INSTALLATION.md` - Installation instructions
  - `FONT-SETUP.md` - Font setup guide
  - `TYPORA-INSTALLATION.md` - Typora-specific installation
- **Assets**:
  - `fonts/` - Font files
  - `apple-hig-theme/` - Theme resources
  - `demo.md`, `typora-demo.md` - Theme preview files

## Design Tokens
All design decisions reference Apple's official specifications:
- Typography scale: 13px, 15px, 17px, 20px, 22px, 28px, 34px
- Line heights: Calculated for optimal readability
- Font weights: 400 (Regular), 600 (Semibold), 700 (Bold)
- Spacing: 8pt base unit (8px, 16px, 24px, 32px, etc.)
- Colors: Apple system colors (see Apple HIG documentation)
- Border radius: 4px (small), 8px (medium), 12px (large)
