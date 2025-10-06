# Add iA Writer Template Support

## Why
The current Apple HIG theme only supports Typora, limiting its reach to a single markdown editor. iA Writer is another popular markdown editor with strong macOS/iOS presence and a different user base. By creating an iA Writer version of the theme, we can provide the same Apple HIG-compliant writing experience to iA Writer users. The iA Writer template system uses a different architecture (bundle format with HTML templates) than Typora's single-CSS approach, requiring a proper conversion that maintains design fidelity while adapting to iA Writer's template structure and content sizing system.

## What Changes
- Create `.iatemplate` bundle structure for iA Writer compatibility
- Convert Typora CSS to iA Writer template with document.html, style.css, header.html, footer.html, and title.html
- Adapt design tokens to work with iA Writer's content-size classes (xs, s, m, l, xl, xxl, xxxl, accessibility variants)
- Implement iA Writer-specific HTML structure with proper semantic elements
- Add support for iA Writer's data attributes (data-document, data-title, data-author, data-date)
- Maintain 100% Apple HIG compliance across both platforms
- Preserve all typography scales, color systems, and accessibility features
- Support iA Writer's font size preferences and accessibility text sizing
- Create template metadata and Info.plist for bundle identification
- Document installation and usage for iA Writer users

## Impact
- Affected specs: New capability `iawriter-templates` will be created
- Affected code: 
  - New directory: `apple-hig.iatemplate/` bundle with multiple files
  - New files: `document.html`, `style.css`, `header.html`, `footer.html`, `title.html`, `Info.plist`
  - Reference: `README.md` will need iA Writer installation instructions
  - Reference: `theme-info.json` may need extension for multi-platform support
- No breaking changes to existing Typora theme
- Parallel implementation (both themes coexist)
- Documentation updates required for dual-platform support
