# Implementation Tasks

## 1. Research & Setup
- [x] 1.1 Fetch and analyze iA Writer custom templates guide from https://ia.net/writer/support/preview/custom-templates
- [ ] 1.2 Review iA Writer template examples from https://github.com/iainc/iA-Writer-Templates
- [ ] 1.3 Study iA Writer's content-size class system and accessibility sizing
- [ ] 1.4 Understand iA Writer bundle structure (.iatemplate format)
- [ ] 1.5 Test existing templates in iA Writer to understand rendering

## 2. Template Bundle Structure
- [x] 2.1 Create `apple-hig.iatemplate` directory
- [x] 2.2 Create `Info.plist` with bundle metadata (identifier, version, display name)
- [x] 2.3 Add template icon/preview image if needed
- [x] 2.4 Create README specific to iA Writer template

## 3. HTML Templates
- [x] 3.1 Create `document.html` with proper structure for iA Writer
  - [x] 3.1.1 Add HTML5 doctype and semantic structure
  - [x] 3.1.2 Implement data-document placeholder for markdown content
  - [x] 3.1.3 Add viewport meta tags for responsive behavior
  - [x] 3.1.4 Include proper character encoding
- [x] 3.2 Create `title.html` with data-title attribute
  - [x] 3.2.1 Implement Apple HIG title typography
  - [x] 3.2.2 Add proper semantic heading structure
- [x] 3.3 Create `header.html` with optional metadata display
  - [x] 3.3.1 Add data-author support
  - [x] 3.3.2 Add data-date with Apple date formatting
  - [x] 3.3.3 Style header with Apple HIG spacing
- [x] 3.4 Create `footer.html` with optional content
  - [x] 3.4.1 Add page numbers support if applicable
  - [x] 3.4.2 Style footer consistently with theme

## 4. CSS Conversion
- [x] 4.1 Extract core design tokens from apple-hig.css
  - [x] 4.1.1 Copy font-face declarations for SF Pro Display, SF Pro Text, SF Mono
  - [x] 4.1.2 Copy CSS custom properties (primitives, semantics, components)
  - [x] 4.1.3 Copy color system (light mode and dark mode)
- [x] 4.2 Adapt typography system for iA Writer
  - [x] 4.2.1 Map content-size-xs through content-size-xxxl to Apple HIG scale
  - [x] 4.2.2 Implement accessibility size classes (content-size-accessibility-*)
  - [x] 4.2.3 Ensure proper line-height and letter-spacing for each size
  - [x] 4.2.4 Maintain Apple's optical sizing rules (Display vs Text fonts)
- [x] 4.3 Style markdown elements
  - [x] 4.3.1 Headings (h1-h6) with Apple HIG hierarchy
  - [x] 4.3.2 Paragraphs with proper spacing
  - [x] 4.3.3 Lists (ordered, unordered, task lists)
  - [x] 4.3.4 Blockquotes with Apple HIG styling
  - [x] 4.3.5 Code blocks and inline code with SF Mono
  - [x] 4.3.6 Tables with Apple HIG borders and spacing
  - [x] 4.3.7 Links with Apple blue accent
  - [x] 4.3.8 Images with proper captions
  - [x] 4.3.9 Horizontal rules
- [x] 4.4 Implement responsive behavior
  - [x] 4.4.1 Mobile breakpoint styles (< 768px)
  - [x] 4.4.2 Tablet breakpoint styles (768px - 1024px)
  - [x] 4.4.3 Desktop styles (> 1024px)
  - [x] 4.4.4 Adjust content width for readability
- [x] 4.5 Add print styles
  - [x] 4.5.1 Optimize typography for print
  - [x] 4.5.2 Handle page breaks appropriately
  - [x] 4.5.3 Ensure proper margins

## 5. Font Integration
- [x] 5.1 Copy font files to template bundle
  - [x] 5.1.1 Copy SF Pro Display (woff2, woff)
  - [x] 5.1.2 Copy SF Pro Text (woff2, woff)
  - [x] 5.1.3 Copy SF Mono (woff2, woff)
- [x] 5.2 Update font paths to be relative to template bundle
- [x] 5.3 Add fallback fonts for compatibility
- [ ] 5.4 Test font loading in iA Writer

## 6. Dark Mode Support
- [x] 6.1 Implement @media (prefers-color-scheme: dark)
- [x] 6.2 Adapt all color tokens for dark mode
- [x] 6.3 Ensure proper contrast ratios in dark mode
- [ ] 6.4 Test dark mode rendering in iA Writer

## 7. Accessibility Features
- [x] 7.1 Implement high contrast mode support
- [x] 7.2 Add reduced motion preferences support
- [x] 7.3 Ensure all interactive elements have proper focus states
- [x] 7.4 Verify WCAG 2.1 AA compliance
- [ ] 7.5 Test with accessibility text sizes

## 8. Testing
- [ ] 8.1 Test in iA Writer for macOS
- [ ] 8.2 Test in iA Writer for iOS (if applicable)
- [ ] 8.3 Test all content-size variants
- [ ] 8.4 Test all accessibility size variants
- [ ] 8.5 Test with complex markdown (tables, code blocks, nested lists)
- [ ] 8.6 Test dark mode switching
- [ ] 8.7 Test printing/PDF export
- [ ] 8.8 Test with long documents
- [ ] 8.9 Verify font rendering
- [ ] 8.10 Cross-reference with Typora theme for design consistency

## 9. Documentation
- [x] 9.1 Create iA Writer installation guide
- [x] 9.2 Update main README.md with iA Writer section
- [ ] 9.3 Document differences between Typora and iA Writer versions
- [ ] 9.4 Add screenshots showing iA Writer theme
- [x] 9.5 Document customization options for iA Writer
- [x] 9.6 Create troubleshooting section for iA Writer-specific issues

## 10. Quality Assurance
- [x] 10.1 Validate HTML structure
- [x] 10.2 Validate CSS syntax
- [x] 10.3 Check Info.plist format
- [ ] 10.4 Verify bundle can be installed in iA Writer
- [x] 10.5 Confirm all Apple HIG requirements are met
- [x] 10.6 Run accessibility audit
- [x] 10.7 Create demo document for iA Writer
- [ ] 10.8 Final visual comparison with Typora theme

## 11. Release Preparation
- [ ] 11.1 Create distribution package
- [ ] 11.2 Test installation process
- [ ] 11.3 Update version numbers
- [ ] 11.4 Create release notes
- [ ] 11.5 Prepare announcement materials
