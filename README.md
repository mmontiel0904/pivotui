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
  <Button variant="primary" size="md">
    Save Record
  </Button>
</template>
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
