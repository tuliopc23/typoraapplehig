## Context

Users of the Apple HIG Typora theme need professional, ready-to-use markdown templates for business documents. While the theme provides comprehensive styling, users face three challenges: (1) discovering available theme features, (2) creating consistent branded documents, and (3) achieving precise layouts in markdown. This change introduces three templates (personal cover, handbook cover, software proposal) that solve these problems by demonstrating theme capabilities and providing reusable starting points with integrated branding.

Key constraints:
- Must use only Typora-supported markdown and HTML (no gradients, external CSS)
- Icon integration requires relative file paths from templates directory
- Layouts must work in both light and dark modes
- All spacing must align to theme's 8pt grid system
- Typography must strictly follow Apple HIG scale (no custom sizes)

## Goals / Non-Goals

**Goals:**
- Create three production-ready templates that showcase theme features
- Integrate Tulio Cunha branding icon at appropriate sizes (cover: 100-120px, footer: 32px)
- Use semantic theme colors (especially blue accent #0071e3) consistently
- Demonstrate proper use of SF Pro Display/Text fonts via heading hierarchy
- Document available theme features through inline comments
- Enable quick customization through clear placeholder content

**Non-Goals:**
- Not creating a template engine or dynamic generation system
- Not supporting other markdown editors (Typora-specific)
- Not implementing custom CSS or JavaScript enhancements
- Not creating templates for every document type (focus on three core types)
- Not providing automated icon conversion or asset management

## Decisions

### Template Structure
**Decision:** Use HTML `<div>` elements with inline styles for layout control, combined with pure markdown for content.

**Rationale:** Typora renders HTML seamlessly and allows precise centering and spacing that pure markdown cannot achieve. Inline styles ensure portability without external CSS dependencies.

**Alternatives considered:**
- Pure markdown only - Rejected: Cannot achieve centered layouts or precise spacing
- CSS classes in separate file - Rejected: Breaks Typora's single-theme architecture
- Markdown extensions - Rejected: Not universally supported in Typora

### Icon Integration
**Decision:** Use relative paths to copied icon in `templates/assets/` directory with multiple size variants.

**Rationale:** Relative paths ensure templates work when shared. Separate assets directory keeps templates organized. HTML `<img>` tags allow precise sizing.

**Alternatives considered:**
- Absolute paths - Rejected: Not portable across systems
- Base64 encoded images - Rejected: Makes markdown files bloated and hard to read
- External CDN - Rejected: Requires internet, violates offline-first principle

### Footer Component
**Decision:** Implement footer as reusable HTML snippet with small icon (32px) and text using theme's footnote size (13px).

**Rationale:** Consistent branding across templates. Small size keeps it discrete. Footnote typography matches Apple HIG for supplementary information.

**Alternatives considered:**
- Markdown horizontal rule + text - Rejected: Less visual consistency, no icon support
- Full-width branded bar - Rejected: Too prominent, distracts from content
- No footer - Rejected: Misses branding opportunity

### Feature Documentation
**Decision:** Embed theme feature documentation as HTML comments within templates, plus separate README.

**Rationale:** Inline comments provide context while editing. Separate README serves as comprehensive reference. Dual approach balances discoverability and depth.

**Alternatives considered:**
- Only inline comments - Rejected: Would clutter templates
- Only external docs - Rejected: Users wouldn't discover features while customizing
- Wiki/website - Rejected: Adds maintenance overhead, may not be accessible

## Technical Approach

### Color Usage Pattern
Templates will use theme colors via CSS custom properties where supported, with fallbacks:
- Primary text: `color: var(--color-text-primary, #1d1d1f)` (auto dark mode)
- Accent blue: `color: var(--color-accent, #0071e3)` for links and highlights
- Secondary text: `color: var(--color-text-secondary, #8e8e93)` for metadata
- Borders: `border-color: var(--color-border-secondary, #e5e5ea)`

### Spacing Implementation
All spacing uses multiples of 8px (theme's primitive grid):
```html
<div style="margin-top: 64px; margin-bottom: 32px;">  <!-- 8*8, 8*4 -->
```

Semantic spacing tokens:
- Section spacing: 32px (var(--spacing-4))
- Paragraph spacing: 16px (var(--spacing-2))
- Element spacing: 8px (var(--spacing-1))

### Typography Mapping
Templates use markdown headings that map to Apple HIG scale:
- h1 → Large Title (34px, weight 700) - Main document titles
- h2 → Title 1 (28px, weight 700) - Section headers
- h3 → Title 2 (22px, weight 600) - Subsection headers
- h4 → Title 3 (20px, weight 600) - Minor headings
- Body text → Body (15px, weight 400) - Paragraph content

### Layout Centering Technique
```html
<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; text-align: center;">
  <!-- Centered content -->
</div>
```

This pattern:
- Uses flexbox for reliable centering across Typora versions
- Sets min-height for cover pages to feel balanced
- Combines center alignment for text and flex alignment for elements

## Risks / Trade-offs

### Risk: HTML Inline Styles Verbosity
**Impact:** Templates contain HTML blocks that may intimidate markdown purists.

**Mitigation:** Add clear comments explaining purpose. Provide "quickstart" sections in README showing what to customize without understanding HTML.

### Risk: Icon Path Resolution
**Impact:** Relative paths break if templates moved or Typora working directory changes.

**Mitigation:** Document path structure clearly. Provide troubleshooting section in README. Consider absolute path alternative in documentation.

### Trade-off: Template Specificity vs Flexibility
**Decision:** Create specific, opinionated templates rather than generic frameworks.

**Reasoning:** Users want ready-to-use solutions, not building blocks. Specific examples teach better than abstract patterns. Users can always modify.

**Consequence:** May need more templates in future for other use cases. Acceptable: better to have 3 great templates than 1 mediocre framework.

### Trade-off: Inline Documentation vs Clean Files
**Decision:** Include substantial inline comments in templates.

**Reasoning:** Educational value outweighs file size. Users learning theme features while customizing leads to better adoption.

**Consequence:** Initial template files are longer. Acceptable: comments can be removed after understanding.

## Migration Plan

This is a purely additive change with no migration needed:

1. **Add templates directory** - New directory, no conflicts
2. **Copy icon asset** - Duplicate existing icon, no modification
3. **Create template files** - New files, no existing content affected
4. **Add README** - New documentation file

No breaking changes. Existing users unaffected. Templates are opt-in resources.

## Open Questions

1. **Icon file format preference?**
   - Current: PNG (4MB, high resolution)
   - Alternative: Optimized PNG (~100KB) or SVG variant
   - Decision needed: Balance quality vs file size for repository

2. **Should templates include example content or be mostly blank?**
   - Option A: Rich placeholder content showing all features
   - Option B: Minimal structure with TODO comments
   - Leaning toward: Option A for educational value, with clear "replace this" markers

3. **PDF export optimization needed?**
   - Templates should export cleanly to PDF
   - May need page break considerations for multi-page proposal
   - Test: Verify page breaks, footer positioning in PDF exports

4. **Version control for template customizations?**
   - Users will customize templates
   - Should we provide .template versions as pristine originals?
   - Suggestion: README explains copying templates before customization
