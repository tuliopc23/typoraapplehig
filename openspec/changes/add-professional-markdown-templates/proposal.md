# Proposal: Professional Markdown Templates with Apple HIG Branding

## Why

The Typora theme provides comprehensive Apple HIG-compliant styling, but users need ready-to-use professional templates for common business documents (personal branding covers, software proposals, handbooks) that leverage the theme's full feature set. Currently, users must manually craft layouts and discover theme features through trial-and-error. Pre-built templates will accelerate productivity, ensure consistent branding with the custom icon, and showcase the theme's capabilities including SF fonts, color system, spacing tokens, and glass effects.

## What Changes

- Create three professional markdown templates in a new `templates/` directory:
  1. **Personal Brand Cover** - Portfolio/resume cover with centered icon, name (h1), and subtitle (h2) using Apple HIG typography scale
  2. **Software Delivering Handbook Cover** - Professional handbook title page with branding footer
  3. **Software Proposal Template** - Complete proposal structure with sections, tables, and proper spacing
- All templates use pure markdown with HTML for precise layout control (div centering, spacing)
- Integrate Tulio Cunha branding icon (`Tulio Cunha-iOS-Dark-1024x1024@2x.png`) at appropriate sizes
- Apply theme's design tokens: SF Pro Display/Text fonts, blue accent (#0071e3), 8pt grid spacing, semantic colors
- Include discrete branded footer on each template with small icon and text
- Provide comprehensive inline comments documenting available theme features
- Create a `TEMPLATES-README.md` guide explaining customization and theme feature reference

## Impact

- **Affected specs**: `template-system` (new capability)
- **Affected code**:
  - New: `templates/personal-brand-cover.md`
  - New: `templates/software-handbook-cover.md`
  - New: `templates/software-proposal.md`
  - New: `templates/TEMPLATES-README.md`
  - Assets: Use existing `Documents/Templates/Tulio Cunha-iOS-Dark-1024x1024@2x.png`
- **Dependencies**: Requires `apple-hig.css` theme to be active in Typora
- **Compatibility**: Pure markdown + HTML (no gradients, no unsupported CSS), works with Typora's export features
