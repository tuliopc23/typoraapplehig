# Refactor Typora Theme for 100% Apple HIG Compliance

## Why

The current Apple HIG Typora theme has a solid foundation but lacks precise compliance with Apple's Human Interface Guidelines specifications. After comprehensive analysis of the official Apple HIG documentation and the current theme implementation, several critical gaps have been identified that prevent true 100% compliance.

The theme currently implements approximately 75-80% compliance but misses key precision requirements in typography scales, color semantics, component styling, and interaction patterns that are essential for authentic Apple design language.

## What Changes

### Typography System Refinement
- **BREAKING**: Update font sizes to match exact Apple HIG specifications (macOS text styles)
- **BREAKING**: Implement precise letter spacing (tracking) values from Apple's specifications
- Refine font weight mappings to match Apple's semantic weight system
- Add missing typography styles (Extra Large Title 1/2 for editorial layouts)
- Improve Dynamic Type simulation for better accessibility

### Color System Precision
- **BREAKING**: Replace current color tokens with exact Apple system colors
- Implement proper label color hierarchy (primary, secondary, tertiary, quaternary)
- Refine fill colors and separator colors to match Apple specifications
- Improve semantic color usage across components
- Enhance high contrast mode support

### Component Apple-fication
- Refactor lists to match Apple's list design patterns from HIG
- Update tables to follow Apple's table component specifications
- Implement proper Apple-style boxes/containers for content grouping
- Enhance image view presentation with Apple-compliant styling
- Improve text view formatting and interaction states

### Layout and Spacing Precision
- Audit and refine 8pt grid implementation for stricter compliance
- Update component spacing to match Apple's layout specifications
- Improve visual hierarchy definition across all elements
- Enhance responsive behavior to match Apple's adaptive design principles

### Interactive Element Enhancement
- Refine link hover states to match Apple's interaction patterns
- Improve focus states for better accessibility compliance
- Update selection states across all interactive elements
- Enhance keyboard navigation support

## Impact

### Affected Specs
- `typora-theme` - Complete refactoring of typography, colors, components, and layout systems

### Affected Code
- `apple-hig.css` - Major refactoring of design tokens, component styles, and interaction patterns
- Font loading and fallback systems
- Glass material system refinements
- Responsive design improvements

### Benefits
- Achieves true 100% Apple HIG compliance
- Improves accessibility and usability
- Provides more authentic Apple design experience
- Better consistency with macOS native applications
- Enhanced readability and visual hierarchy

### Risks
- **BREAKING CHANGES**: Some visual elements will change appearance
- Users may need to adjust to refined typography and spacing
- Potential compatibility considerations with different Typora versions

### Migration
- Changes are primarily visual refinements
- No breaking changes to Markdown functionality
- Theme file can be updated in-place
- Users should backup current theme before updating
