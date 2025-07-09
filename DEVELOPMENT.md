# Development Workflow

## Prerequisites

- Node.js 18.0.0 or higher
- Yarn package manager
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/marcosmontiel/pivotui.git
   cd pivotui
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Download fonts**
   - Download Inter font from https://rsms.me/inter/
   - Download JetBrains Mono from https://github.com/JetBrains/JetBrainsMono
   - Place woff2 files in `assets/fonts/` following the naming convention in `assets/fonts/README.md`

4. **Start development server**
   ```bash
   yarn dev
   ```

## Development Process

### 1. Component Development

```bash
# Create new component
mkdir src/components/[category]/[component-name]
cd src/components/[category]/[component-name]

# Create component files
touch index.ts
touch [component-name].ts
touch [component-name].css
touch [component-name].test.ts
touch README.md
```

### 2. Component Structure

```
src/components/forms/pivot-button/
├── index.ts              # Export component
├── pivot-button.ts       # Main component implementation
├── pivot-button.css      # Component styles
├── pivot-button.test.ts  # Unit tests
└── README.md            # Component documentation
```

### 3. Development Commands

```bash
# Development
yarn dev              # Start development server
yarn build            # Build for production
yarn preview          # Preview production build

# Quality Assurance
yarn typecheck        # Type checking
yarn lint             # Linting (to be configured)
yarn test             # Unit tests (to be configured)
yarn test:visual      # Visual regression tests (to be configured)

# Documentation
yarn docs:build       # Build documentation (to be configured)
yarn docs:serve       # Serve documentation (to be configured)

# Maintenance
yarn clean            # Clean build artifacts
```

### 4. Git Workflow

```bash
# Feature development
git checkout -b feature/component-name
git add .
git commit -m "feat: add [component-name] component"
git push origin feature/component-name

# Create pull request
# After review and merge
git checkout main
git pull origin main
```

### 5. Component Guidelines

- **Web Components Standard**: Use native Web Components API
- **TypeScript**: All components must be written in TypeScript
- **Naming Convention**: `pivot-component-name` (kebab-case)
- **Material Design 3**: Follow MD3 principles adapted for business use
- **Accessibility**: WCAG 2.1 AA compliance
- **Testing**: Unit tests and visual regression tests
- **Documentation**: Comprehensive README with examples

### 6. Code Standards

- **ESLint**: Code linting (to be configured)
- **Prettier**: Code formatting (to be configured)
- **TypeScript**: Strict mode enabled
- **Commit Convention**: Conventional commits

### 7. Release Process

```bash
# Version bump
npm version [patch|minor|major]

# Build and test
yarn build
yarn test

# Publish (manual for now)
npm publish

# Tag and push
git push origin main --tags
```

## Project Structure

```
pivotui/
├── src/
│   ├── components/          # Web Components by category
│   │   ├── forms/          # Form components
│   │   ├── data/           # Data display components
│   │   ├── navigation/     # Navigation components
│   │   ├── layout/         # Layout components
│   │   └── feedback/       # Feedback components
│   ├── tokens/             # Design tokens
│   ├── styles/             # Global styles
│   └── utils/              # Utility functions
├── assets/
│   └── fonts/              # Self-hosted fonts
├── docs/                   # Documentation
├── examples/               # Usage examples
├── tools/                  # Build and development tools
├── .vscode/               # VSCode configuration
├── dist/                  # Built library (generated)
├── CLAUDE.md              # AI context file
├── DEVELOPMENT.md         # This file
├── LICENSE-PERSONAL       # Personal use license
├── LICENSE-COMMERCIAL     # Commercial license
├── package.json           # Package configuration
└── README.md             # Project overview
```

## Testing Strategy

1. **Unit Tests**: Test individual component functionality
2. **Integration Tests**: Test component interactions
3. **Visual Regression Tests**: Test visual consistency
4. **Accessibility Tests**: Test WCAG compliance
5. **Performance Tests**: Test bundle size and runtime performance

## Documentation

- **Component Docs**: In-code documentation and README files
- **API Reference**: Auto-generated from TypeScript interfaces
- **Examples**: Live examples in the examples directory
- **Design Guidelines**: Visual design principles and usage patterns

## Continuous Integration

- **Pre-commit Hooks**: Lint, format, and test on commit
- **GitHub Actions**: Build, test, and deploy on push
- **Automated Testing**: Run all tests on pull requests
- **Release Automation**: Automated versioning and publishing