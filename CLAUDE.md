# PivotUI - Design System Context

## Project Overview
PivotUI is a comprehensive Web Components library designed as a personal design system for ERP and business applications. It serves as a reusable component library that can be installed as a dependency in personal projects.

## Core Philosophy
- **ERP-Focused**: Components designed specifically for business logic and enterprise applications
- **Material Design 3**: Based on Material Design 3 principles, adapted for business use cases
- **Web Components**: Framework-agnostic using native Web Components standards
- **Design System**: Consistent visual language and component patterns

## Typography System
- **UI Font**: Inter (self-hosted) - Clean, readable interface font
- **Code/Data Font**: JetBrains Mono (self-hosted) - Monospace font for code blocks and data displays

## Styling Architecture
- **Framework**: Tailwind CSS 4.1 (latest version)
- **Color Theme**: Green-teal palette optimized for business applications
- **Design Tokens**: Consistent spacing, colors, and typography scales

## Licensing
- **Personal Use**: Free and open for personal projects
- **Commercial Use**: Separate commercial license required

## Repository Structure
```
pivotui/
├── src/
│   ├── components/          # Web Components
│   │   ├── forms/          # Form components (inputs, selects, etc.)
│   │   ├── data/           # Data display (tables, grids, charts)
│   │   ├── navigation/     # Navigation components
│   │   ├── layout/         # Layout components
│   │   └── feedback/       # Alerts, notifications, loaders
│   ├── tokens/             # Design tokens
│   ├── styles/             # Global styles and themes
│   └── utils/              # Utility functions
├── assets/
│   └── fonts/              # Self-hosted fonts
├── docs/                   # Documentation
├── examples/               # Usage examples
├── tools/                  # Build and development tools
└── dist/                   # Built library
```

## Development Workflow
1. **Component Development**: Create components in `src/components/`
2. **Documentation**: Document components in `docs/`
3. **Testing**: Write tests for each component
4. **Build**: Generate distributable package
5. **Publish**: Release to npm registry

## Installation & Usage
```bash
npm install pivotui
```

```javascript
import 'pivotui/dist/pivotui.js';
// Use components in HTML
<pivot-button variant="primary">Click me</pivot-button>
```

## Target Use Cases
- ERP systems
- Business dashboards
- Admin panels
- Data management interfaces
- Financial applications
- Inventory management
- CRM systems

## Technical Stack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1
- **Build**: Vite
- **Testing**: [To be determined]
- **Documentation**: [To be determined]

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run docs` - Generate documentation

## Contributing
This is a personal design system. External contributions are not currently accepted.