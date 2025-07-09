# PivotUI Beginner's Guide

## Understanding This Project

This is a **Design System** - a collection of reusable components that you can use across multiple projects. Think of it like a toolkit of building blocks (buttons, forms, tables, etc.) that you can install and use in any web project.

## What Makes This Different from Regular Projects

Unlike typical web applications that you build and deploy, this project:

1. **Creates a Library** - You're building components that other projects will use
2. **Gets Published** - Other projects install it with `npm install pivotui`
3. **Web Components** - Uses native browser standards (works with any framework)
4. **Design System** - Follows Material Design 3 principles for consistency

## Project Structure Explained

```
pivotui/
├── src/                    # Source code
│   ├── components/         # Your reusable components
│   │   ├── forms/         # Form components (buttons, inputs)
│   │   ├── data/          # Data components (tables, charts)
│   │   ├── navigation/    # Navigation components
│   │   ├── layout/        # Layout components
│   │   └── feedback/      # Alerts, notifications
│   ├── tokens/            # Design tokens (colors, fonts, spacing)
│   ├── styles/            # Global styles
│   └── utils/             # Helper functions
├── assets/fonts/          # Self-hosted fonts
├── docs/                  # Documentation
├── examples/              # How to use components
├── dist/                  # Built files (what gets published)
└── package.json          # Project configuration
```

## Development Workflow Step-by-Step

### 1. Initial Setup (One Time)

```bash
# Install dependencies
yarn install

# Download fonts manually (see assets/fonts/README.md)
# - Download Inter from https://rsms.me/inter/
# - Download JetBrains Mono from GitHub
# - Place .woff2 files in assets/fonts/
```

### 2. Creating a New Component

Let's create a simple button component:

```bash
# Create component directory
mkdir -p src/components/forms/pivot-button

# Create component files
cd src/components/forms/pivot-button
touch index.ts pivot-button.ts pivot-button.css README.md
```

### 3. Writing the Component

**pivot-button.ts** (The main component):
```typescript
import { materialColors } from '@/tokens/material-design';

export class PivotButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'disabled'];
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    const variant = this.getAttribute('variant') || 'filled';
    const disabled = this.hasAttribute('disabled');
    
    this.innerHTML = `
      <button class="pivot-button pivot-button--${variant}" ${disabled ? 'disabled' : ''}>
        <slot></slot>
      </button>
    `;
  }

  attachEventListeners() {
    const button = this.querySelector('button');
    button?.addEventListener('click', (e) => {
      if (this.hasAttribute('disabled')) {
        e.preventDefault();
        return;
      }
      // Forward the click event
      this.dispatchEvent(new CustomEvent('click', { bubbles: true }));
    });
  }
}

customElements.define('pivot-button', PivotButton);
```

**pivot-button.css** (Component styles):
```css
.pivot-button {
  /* Material Design 3 button styles */
  font-family: var(--font-family-ui);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 0.1px;
  
  padding: 10px 24px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pivot-button--filled {
  background-color: var(--md-sys-color-primary-60);
  color: var(--md-sys-color-on-primary);
}

.pivot-button--filled:hover {
  background-color: var(--md-sys-color-primary-50);
}

.pivot-button--outlined {
  background-color: transparent;
  color: var(--md-sys-color-primary-60);
  border: 1px solid var(--md-sys-color-outline);
}

.pivot-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**index.ts** (Export the component):
```typescript
export { PivotButton } from './pivot-button';
```

### 4. Testing Your Component

Create a simple HTML file to test:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="src/styles/main.css">
</head>
<body>
  <pivot-button variant="filled">Click me</pivot-button>
  <pivot-button variant="outlined">Outlined</pivot-button>
  <pivot-button disabled>Disabled</pivot-button>
  
  <script type="module" src="src/components/forms/pivot-button/index.ts"></script>
</body>
</html>
```

### 5. Development Commands

```bash
# Start development server (for testing)
yarn dev

# Build for production (creates dist/ folder)
yarn build

# Type checking
yarn typecheck

# Clean build files
yarn clean
```

## Material Design 3 Integration

This project uses Material Design 3 principles:

### Color System
- **Primary**: Main brand color (green-teal)
- **Secondary**: Supporting colors
- **Error**: For validation and alerts
- **Surface**: Background colors
- **On-Surface**: Text colors

### Typography Scale
- **Display**: Large headings (displayLarge, displayMedium, displaySmall)
- **Headline**: Section headings (headlineLarge, headlineMedium, headlineSmall)
- **Title**: Component titles (titleLarge, titleMedium, titleSmall)
- **Body**: Body text (bodyLarge, bodyMedium, bodySmall)
- **Label**: Labels and captions (labelLarge, labelMedium, labelSmall)

### Component States
- **Enabled**: Default state
- **Disabled**: Non-interactive state
- **Hover**: Mouse over state
- **Focus**: Keyboard focus state
- **Pressed**: Active/pressed state

## How This Works as a Library

### 1. Building the Library
```bash
yarn build
```
This creates a `dist/` folder with:
- Compiled JavaScript files
- CSS files
- TypeScript definition files

### 2. Publishing to npm
```bash
npm publish
```
This uploads your library to npm registry.

### 3. Using in Other Projects
```bash
# In another project
npm install pivotui

# In your HTML
<script type="module" src="node_modules/pivotui/dist/index.js"></script>
<pivot-button variant="filled">My Button</pivot-button>
```

## Common Patterns

### 1. Creating Form Components
- Input fields, selects, checkboxes
- Form validation
- Accessibility features

### 2. Creating Data Components
- Tables with sorting/filtering
- Charts and graphs
- Data cards

### 3. Creating Layout Components
- Grid systems
- Containers
- Responsive layouts

## Key Concepts

### 1. Web Components
- Custom HTML elements (`<pivot-button>`)
- Encapsulated functionality
- Works with any framework

### 2. Design Tokens
- Centralized values (colors, fonts, spacing)
- Consistent across all components
- Easy to update globally

### 3. TypeScript
- Type safety
- Better developer experience
- Auto-completion in IDEs

### 4. Build Process
- Compiles TypeScript to JavaScript
- Bundles CSS
- Creates distribution files

## Next Steps

1. **Start Small**: Create a simple button component
2. **Test Thoroughly**: Make sure it works in different scenarios
3. **Document**: Write clear documentation
4. **Iterate**: Improve based on usage
5. **Expand**: Add more components gradually

## Getting Help

- Check `CLAUDE.md` for AI context
- Review `DEVELOPMENT.md` for technical details
- Look at `examples/` for usage patterns
- Refer to Material Design 3 documentation for design principles

Remember: You're building a foundation that other projects will depend on, so focus on quality, consistency, and good documentation!