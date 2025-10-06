# Testing Checklist for Apple HIG iA Writer Template

## Pre-Testing Setup

- [ ] Ensure iA Writer is installed (version 5.0 or later)
- [ ] Have the demo document ready: `iawriter-demo.md`
- [ ] Know template install location: `~/Library/Mobile Documents/27N4MQEA55~pro~writer/Documents/Templates/`

## Installation Testing

### macOS Installation
- [ ] Double-click `apple-hig.iatemplate` - should install automatically
- [ ] Verify template appears in iA Writer: File → Preview → "Apple HIG"
- [ ] Alternative: Manual copy to Templates folder works
- [ ] Template loads without errors

### iOS/iPadOS Installation (if applicable)
- [ ] Copy to iCloud Drive/iA Writer/Templates/
- [ ] Template appears in iA Writer on iOS
- [ ] Template loads on iPad/iPhone

## Font Testing

- [ ] SF Pro Display loads for headings
- [ ] SF Pro Text loads for body text
- [ ] SF Mono loads for code
- [ ] Fonts render correctly at all sizes
- [ ] Fallback fonts work if custom fonts fail

## Content Size Testing

### Standard Sizes
Test View → Content Size for each:
- [ ] xs (11px) - Extra small, compact
- [ ] s (13px) - Small, readable
- [ ] m (14px) - Medium, comfortable
- [ ] l (15px) - Large (default), Apple HIG standard ⭐
- [ ] xl (17px) - Extra large
- [ ] xxl (20px) - Very large
- [ ] xxxl (22px) - Largest standard

Verify for each size:
- [ ] Visual hierarchy maintained (h1 > h2 > h3, etc.)
- [ ] Text remains readable
- [ ] Spacing scales appropriately
- [ ] Layout doesn't break

### Accessibility Sizes
Enable: System Preferences → Accessibility → Display → Larger Text
- [ ] accessibility-m (23px)
- [ ] accessibility-l (28px)
- [ ] accessibility-xl (33px)
- [ ] accessibility-xxl (40px)
- [ ] accessibility-xxxl (48px)

Verify:
- [ ] Text scales appropriately
- [ ] Layout remains usable
- [ ] No text overflow
- [ ] Hierarchy preserved

## Typography Testing

Open `iawriter-demo.md` and verify:

### Headings
- [ ] H1 (Large Title) - 34px, bold, SF Pro Display
- [ ] H2 (Title 1) - 28px, bold, SF Pro Display
- [ ] H3 (Title 2) - 22px, semibold, SF Pro Display
- [ ] H4 (Title 3) - 20px, semibold, SF Pro Display
- [ ] H5 (Headline) - 17px, semibold, SF Pro Display
- [ ] H6 (Subheadline) - 15px, semibold, SF Pro Text
- [ ] Proper spacing between headings
- [ ] First heading has no top margin

### Body Text
- [ ] Paragraphs use SF Pro Text
- [ ] Line height is comfortable (1.47)
- [ ] Spacing between paragraphs (16px)
- [ ] **Bold text** is semibold 600
- [ ] *Italic text* renders correctly
- [ ] ~~Strikethrough~~ works
- [ ] Combined formatting works

## Markdown Elements

### Lists
- [ ] Unordered lists render with bullets
- [ ] Ordered lists render with numbers
- [ ] Task lists render with checkboxes
- [ ] Nested lists work correctly
- [ ] List spacing is appropriate
- [ ] List items have proper line height

### Code
- [ ] Inline `code` uses SF Mono
- [ ] Code has background color
- [ ] Code blocks are properly formatted
- [ ] Syntax highlighting works (if supported)
- [ ] Code font size is 13px (0.867em)
- [ ] Code has proper padding

### Blockquotes
- [ ] Quotes have left border (accent color)
- [ ] Quote text is secondary color
- [ ] Quotes are italic
- [ ] Nested quotes work
- [ ] Quote spacing is correct

### Links
- [ ] Links are accent color (blue)
- [ ] Hover state works (underline appears)
- [ ] Active state works (opacity reduces)
- [ ] Visited links maintain color
- [ ] Links are keyboard accessible

### Tables
- [ ] Table borders render correctly
- [ ] Header row has proper styling
- [ ] Cell padding is appropriate (8px 16px)
- [ ] Text alignment works (left/center/right)
- [ ] Tables are readable at all sizes
- [ ] Long content wraps properly
- [ ] Table captions render correctly

### Images
- [ ] Images scale to max-width 100%
- [ ] Images have rounded corners (6px)
- [ ] Image captions render correctly
- [ ] Caption text is secondary color
- [ ] Figures have proper spacing

### Horizontal Rules
- [ ] HR renders as thin line
- [ ] HR color matches borders
- [ ] HR has proper spacing (32px top/bottom)

### Footnotes
- [ ] Footnotes section appears at bottom
- [ ] Footnote numbers are superscript
- [ ] Footnote links work (click to jump)
- [ ] Return links work (back to reference)
- [ ] Footnote styling is correct

## Color Testing

### Light Mode
- [ ] Background is white (#ffffff)
- [ ] Text is near-black (#1d1d1f)
- [ ] Secondary text is gray (#8e8e93)
- [ ] Accent is Apple blue (#0071e3)
- [ ] Code background is light gray (#f5f5f7)
- [ ] Borders are light gray (#d1d1d6)
- [ ] All colors have proper contrast (WCAG 2.1 AA)

### Dark Mode
Switch to dark mode: System Preferences → Appearance → Dark
- [ ] Background is black (#000000)
- [ ] Text is off-white (#f5f5f7)
- [ ] Secondary text is gray (#98989d)
- [ ] Accent is dark mode blue (#0a84ff)
- [ ] Code background is dark gray (#1c1c1e)
- [ ] Borders are dark gray (#38383a)
- [ ] All colors have proper contrast
- [ ] Transition is smooth
- [ ] Visual hierarchy maintained

### High Contrast Mode
Enable: System Preferences → Accessibility → Display → Increase Contrast
- [ ] Light mode: Text becomes pure black
- [ ] Dark mode: Text becomes pure white
- [ ] Borders become more defined
- [ ] Content remains readable

## Responsive Design

### Desktop (full width)
- [ ] Content max-width is 800px
- [ ] Content is centered
- [ ] Padding is appropriate (32px)
- [ ] Layout is comfortable

### Tablet (resize window to ~900px)
- [ ] Content adapts to width
- [ ] Padding adjusts (24px)
- [ ] Tables remain readable

### Mobile (resize window to ~600px)
- [ ] Font size increases slightly
- [ ] Padding reduces (16px)
- [ ] Headings scale down appropriately
- [ ] Tables become scrollable or adapt
- [ ] Touch targets are adequate

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab key moves between links
- [ ] Focus indicators are visible
- [ ] Focus indicators have proper color/contrast
- [ ] Focus order is logical
- [ ] No keyboard traps

### Screen Reader (if available)
- [ ] Content structure is logical
- [ ] Headings are properly announced
- [ ] Lists are properly announced
- [ ] Links are descriptive
- [ ] Images have alt text context

### Reduced Motion
Enable: System Preferences → Accessibility → Display → Reduce Motion
- [ ] Animations are minimized
- [ ] Transitions are instant or very short
- [ ] Functionality still works

## Export Testing

### PDF Export
File → Export → PDF
- [ ] Fonts are embedded
- [ ] Colors are accurate
- [ ] Layout is preserved
- [ ] Images render correctly
- [ ] Page breaks are appropriate
- [ ] Typography is optimized for print
- [ ] Headers/footers appear correctly

### HTML Export
File → Export → HTML
- [ ] HTML is valid HTML5
- [ ] Styles are embedded or linked
- [ ] Content renders in browser
- [ ] Fonts load correctly
- [ ] Dark mode works in browser
- [ ] Responsive design works

### Word Export
File → Export → Word
- [ ] Formatting is preserved reasonably
- [ ] Fonts fallback gracefully
- [ ] Content is editable in Word

### Print
File → Print
- [ ] Print preview looks good
- [ ] Typography is optimized
- [ ] Page breaks are handled
- [ ] Margins are appropriate
- [ ] Colors are print-friendly

## Title/Header/Footer Testing

### Title Page (title.html)
- [ ] Title displays correctly
- [ ] Title uses large display font (3em)
- [ ] Author displays as subtitle
- [ ] Layout is centered
- [ ] Spacing is appropriate

### Header (header.html)
- [ ] Header appears on pages
- [ ] Title displays in header
- [ ] Header has bottom border
- [ ] Header text is small and secondary

### Footer (footer.html)
- [ ] Footer appears on pages
- [ ] Date displays correctly
- [ ] Date format is correct (MMMM d, yyyy)
- [ ] Footer has top border
- [ ] Footer is right-aligned

## Performance Testing

- [ ] Template loads quickly
- [ ] No lag when scrolling
- [ ] Content-size changes are instant
- [ ] Dark mode switch is smooth
- [ ] Large documents perform well
- [ ] No memory issues

## Comparison with Typora Theme

Open same document in both:
- [ ] Typography looks identical
- [ ] Spacing matches
- [ ] Colors match (light mode)
- [ ] Colors match (dark mode)
- [ ] Overall feel is consistent
- [ ] Both maintain Apple HIG standards

## Edge Cases

- [ ] Very long document (100+ pages)
- [ ] Document with many images
- [ ] Document with complex tables
- [ ] Document with nested lists (5+ levels)
- [ ] Document with code blocks (multiple languages)
- [ ] Empty document
- [ ] Document with only headings
- [ ] Document with special characters
- [ ] Document with emoji 😀
- [ ] Document with Unicode characters

## Bug Check

Look for:
- [ ] No CSS errors in console
- [ ] No layout breaks
- [ ] No overlapping text
- [ ] No missing fonts
- [ ] No color errors
- [ ] No spacing inconsistencies
- [ ] No broken links
- [ ] No malformed HTML

## Final Verification

- [ ] All 31 spec scenarios work correctly
- [ ] Template feels "Apple native"
- [ ] No visual glitches
- [ ] Professional appearance
- [ ] Meets accessibility standards
- [ ] Performs well
- [ ] Ready for release

## Issues Found

Document any issues discovered:

1. _______________________________________________________
2. _______________________________________________________
3. _______________________________________________________

## Notes

Additional observations or comments:

___________________________________________________________
___________________________________________________________
___________________________________________________________

---

**Testing Date**: _______________  
**Tester**: _______________  
**iA Writer Version**: _______________  
**macOS Version**: _______________  
**Overall Result**: [ ] Pass  [ ] Pass with Issues  [ ] Fail
