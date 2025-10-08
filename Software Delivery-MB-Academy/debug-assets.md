# Asset Debugging Test

## Image Asset Test

### Standard Markdown Image
![Test Image](Icon1.png)

### HTML Image with Picture Element
<picture>
  <source srcset="Icon1.svg" type="image/svg+xml">
  <img src="Icon1.png" alt="Test Image" width="100" height="100">
</picture>

### Simple HTML Image
<img src="Icon1.png" alt="Test Image" width="100" height="100">

### SVG Direct Reference
![SVG Image](Icon1.svg)

## HTML Rendering Test

### Basic HTML Elements
<div style="background: #f0f0f0; padding: 10px; border-radius: 5px;">
  <p>This is a test div with styling</p>
</div>

### CSS Custom Properties Test
<div style="background: var(--color-background-secondary); padding: 10px; border-radius: var(--radius-lg);">
  <p>This div uses CSS custom properties</p>
</div>

### Grid Layout Test
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
  <div style="background: #e0e0e0; padding: 10px;">Column 1</div>
  <div style="background: #e0e0e0; padding: 10px;">Column 2</div>
</div>

## Asset Path Test

### Relative Path
![Relative Path](./assets/Icon1.png)

### Absolute Path (won't work in Typora)
![Absolute Path](/Users/tuliopinheirocunha/typoraapplehig/Software Delivery-MB-Academy/assets/Icon1.png)

### Assets Folder Path
![Assets Folder](assets/Icon1.png)