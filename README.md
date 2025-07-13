# PivotUI

Enterprise-grade Vue 3 component library implementing Material Design 3 principles, optimized for ERP and accounting systems.

## Quick Start

```bash
npm install pivotui
```

```vue
<script setup>
import { Button } from 'pivotui'
import 'pivotui/dist/style.css'
</script>

<template>
  <Button variant="primary">Save Record</Button>
</template>
```

## Why PivotUI?

✅ **Enterprise-Ready**: Material Design 3 adapted for business applications  
✅ **TypeScript First**: Full type safety and IntelliSense support  
✅ **Professional Colors**: OKLCH color space with elegant dark teal palette  
✅ **ERP-Optimized**: Data density, financial formatting, and accessibility  
✅ **Self-Hosted Fonts**: No external dependencies, offline-ready

## Components

### Button
```vue
<!-- Variants -->
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

<!-- Sizes -->
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<!-- States -->
<Button :loading="true">Loading</Button>
<Button :disabled="true">Disabled</Button>
```

### Typography System
Built-in Material Design 3 typography with self-hosted fonts:

```vue
<template>
  <!-- Professional typography -->
  <h1 class="text-display-medium">Financial Dashboard</h1>
  <h2 class="text-headline-small">Quarterly Reports</h2>
  <p class="text-body-large">Account summary</p>
  
  <!-- Financial data -->
  <div class="text-numeric">$1,234,567.89</div>
</template>
```

**Font Stack:**
- **Inter** - UI elements and body text
- **Source Serif Pro** - Headers and emphasis  
- **JetBrains Mono** - Data and numbers

### Coming Soon
🚧 Data Tables • Form Controls • Navigation • Status Indicators

## Design System

**Color Palette**: Professional dark teal and blue-gray in OKLCH color space  
**Typography**: Material Design 3 scale with Inter, Source Serif Pro, and JetBrains Mono  
**Borders**: 8px radius for optimal click rates and professional aesthetics  
**Accessibility**: WCAG 2.1 AA compliant with proper contrast ratios

## Development

```bash
yarn install          # Install dependencies
yarn dev              # Start demo site
yarn build:lib        # Build library for NPM
yarn build:docs       # Build demo site
```

## License

MIT
