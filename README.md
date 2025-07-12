# PivotUI

A Vue 3 component library with Tailwind CSS.

## Installation

```bash
npm install pivotui
# or
yarn add pivotui
```

## Usage

```vue
<script setup>
import { Button } from 'pivotui'
import 'pivotui/dist/style.css'
</script>

<template>
  <Button>Click me!</Button>
</template>
```

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

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT
