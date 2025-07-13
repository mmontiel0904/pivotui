# PivotUI

A Vue 3 component library implementing Material Design 3 principles optimized for ERP and accounting systems. Built with TypeScript and Tailwind CSS, PivotUI provides enterprise-grade components focused on data density, consistency, and professional workflows.

## Installation

```bash
npm install pivotui
# or
yarn add pivotui
```

## Features

- 🎨 **Material Design 3** components optimized for enterprise applications
- 📊 **ERP-focused** design patterns for data-heavy interfaces  
- 🔧 **TypeScript** first with full type safety
- ⚡ **Performance** optimized for large datasets
- 🎯 **Accessibility** compliant with ARIA standards
- 📱 **Responsive** design for desktop and tablet workflows
- 🎛️ **Density controls** for comfortable and compact layouts

## Usage

```vue
<script setup>
import { Button } from 'pivotui'
import 'pivotui/dist/style.css'
</script>

<template>
  <div>
    <!-- Typography examples -->
    <h1 class="text-display-medium">Financial Dashboard</h1>
    <h2 class="text-headline-small">Quarterly Reports</h2>
    <p class="text-body-large">Account summary and financial metrics</p>
    
    <!-- Data display with monospace -->
    <div class="text-numeric">$1,234,567.89</div>
    
    <!-- Component usage -->
    <Button variant="primary" size="md" class="text-label-large">
      Save Record
    </Button>
  </div>
</template>
```

### Typography System

PivotUI includes a complete Material Design 3 typography system optimized for ERP applications:

#### Font Stack (Self-hosted)
- **Inter**: Primary font for UI elements, forms, and body text
- **Source Serif Pro**: Secondary font for headers and emphasis
- **JetBrains Mono**: Monospace font for data display and numerical values

#### Typography Classes
```css
/* Display text - Page headers */
.text-display-large      /* 57px - Dashboard titles */
.text-display-medium     /* 45px - Major headings */
.text-display-small      /* 36px - Section headers */

/* Headlines - Card and section titles */
.text-headline-large     /* 32px - Primary headings */
.text-headline-medium    /* 28px - Secondary headings */
.text-headline-small     /* 24px - Subsection titles */

/* Titles - Form labels and important text */
.text-title-large        /* 22px - Form section headers */
.text-title-medium       /* 16px - Field labels */
.text-title-small        /* 14px - Minor labels */

/* Body text - Content and descriptions */
.text-body-large         /* 16px - Primary content */
.text-body-medium        /* 14px - Secondary content */
.text-body-small         /* 12px - Supporting text */

/* Labels - Button text and UI elements */
.text-label-large        /* 14px - Button text */
.text-label-medium       /* 12px - Small buttons */
.text-label-small        /* 11px - Tiny UI elements */

/* Data display - Numerical and tabular data */
.text-data              /* Monospace for code/data */
.text-numeric           /* Tabular numbers for financials */
```

### Available Components

- **Button**: Primary, secondary, outline, ghost, and danger variants
- **Data Table**: Coming soon - sortable, filterable tables with pagination
- **Form Controls**: Coming soon - inputs, selects, date pickers
- **Navigation**: Coming soon - rails, tabs, breadcrumbs
- **Status Indicators**: Coming soon - chips, badges, progress indicators

## Development

```bash
# Install dependencies
yarn install

# Start development server (demo site)
yarn dev

# Build library
yarn build:lib

# Build documentation site
yarn build:docs
```

## Project Structure

```
pivotui/
├── lib/                    # Component library source
│   ├── components/         # Vue components
│   ├── composables/        # Vue composables
│   ├── types/             # TypeScript types
│   ├── utils/             # Utility functions
│   └── index.ts           # Main export
├── src/                   # Demo site source
│   ├── components/        # Demo components
│   ├── pages/             # Demo pages
│   ├── App.vue           # Demo app
│   └── main.ts           # Demo entry
├── dist/                 # Built library
└── docs/                 # Built demo site
```

## Design Principles

### Material Design 3 for ERP
PivotUI adapts Material Design 3 specifically for enterprise applications:

- **Data Density**: Compact layouts that maximize information display
- **Professional Aesthetics**: Neutral color palettes suitable for business environments  
- **Consistent Interactions**: Unified patterns across all components
- **Financial Formatting**: Proper alignment and formatting for numerical data
- **Accessibility First**: WCAG compliant with keyboard navigation support

### ERP-Specific Features
- Density mode toggles (comfortable/compact)
- Monospace typography for numbers and currency
- Status color system for financial indicators
- Bulk action patterns for data management
- Real-time data update indicators

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-component`)
3. Follow the Material Design 3 ERP guidelines
4. Add tests for new components
5. Commit your changes (`git commit -m 'feat: add new component'`)
6. Push to the branch (`git push origin feature/new-component`)
7. Create a Pull Request

## License

MIT
