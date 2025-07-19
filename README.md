# PivotUI

Enterprise-grade Vue 3 component library implementing Material Design 3 principles, optimized for ERP and accounting systems.

## Quick Start

```bash
npm install pivotui
```

```vue
<script setup>
import { Button, Table } from 'pivotui'
import 'pivotui/dist/style.css'

const columns = [
  { key: 'account', title: 'Account', sortable: true },
  { key: 'balance', title: 'Balance', align: 'right', numeric: true }
]

const data = [
  { account: 'Cash', balance: 25000 },
  { account: 'Accounts Receivable', balance: 125000 }
]
</script>

<template>
  <div>
    <Table :columns="columns" :data="data" density="compact" />
    <Button variant="primary">Save Record</Button>
  </div>
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

### Table
```vue
<script setup>
import { Table } from 'pivotui'

const columns = [
  { key: 'id', title: 'ID', sortable: true, numeric: true },
  { key: 'name', title: 'Customer', sortable: true },
  { key: 'amount', title: 'Amount', align: 'right', numeric: true,
    format: (value) => `$${value.toLocaleString()}` }
]

const data = [
  { id: 1, name: 'Acme Corp', amount: 125000 },
  { id: 2, name: 'Tech Solutions', amount: 87500 }
]
</script>

<template>
  <!-- Density modes for ERP data -->
  <Table 
    :columns="columns" 
    :data="data" 
    density="compact"
    striped 
    hoverable 
    sortable 
  />
</template>
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
🚧 Form Controls • Navigation • Status Indicators • Pagination

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

### Adding New Components

Follow these steps to add components to the library and demo:

**1. Create Component:**
```bash
# Create in library
touch lib/components/NewComponent.vue
# Export in lib/components/index.ts
```

**2. Add to Demo:**
```bash
# Create demo section
touch src/components/sections/NewComponentSection.vue
# Update DemoNavigation.vue with nav item
# Add route in App.vue
```

**3. Follow Design System:**
- Use semantic color tokens (`bg-surface`, `text-on-surface`)
- Apply MD3 typography scale (`text-display-*`, `text-headline-*`)
- Maintain 8px border radius (`rounded-lg`)
- Include interactive examples and code snippets

See CLAUDE.md for detailed implementation guide.

## Development Philosophy

PivotUI was developed using modern development practices including AI-assisted coding with Claude. This approach enabled rapid prototyping, comprehensive documentation, and adherence to industry best practices. The architecture, design decisions, and code quality reflect a collaborative human-AI development process focused on creating enterprise-grade components.

## License

MIT
