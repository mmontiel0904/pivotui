# PivotUI - Claude Memory File

## Project Overview
**PivotUI** is a Vue 3 component library with Tailwind CSS, transformed from a basic Vite template into a production-ready component library for NPM distribution and public use.

## Project Structure
```
pivotui/
├── lib/                    # Component library source
│   ├── components/         # Vue components (Button.vue)
│   ├── composables/        # Vue composables
│   ├── types/             # TypeScript types
│   ├── utils/             # Utility functions
│   └── index.ts           # Main library export
├── src/                   # Demo site source
│   ├── components/        # Demo components (ButtonExamples.vue)
│   ├── App.vue           # Demo app
│   └── main.ts           # Demo entry
├── .github/workflows/     # CI/CD automation
├── dist/                 # Built library output
└── docs/                 # Built demo site
```

## Key Technical Decisions Made

### 1. Build System Configuration
- **Dual build setup**: Library build vs Demo site build
- **Library build** (`yarn build:lib`): Creates NPM-ready package with ES modules + UMD
- **Demo build** (`yarn build:docs`): Creates GitHub Pages site
- **Dev server** (`yarn dev`): Runs demo site with hot reload

### 2. TypeScript Configuration
- **tsconfig.app.json**: Demo site and library development
- **tsconfig.lib.json**: Library-only builds with declarations
- **Path aliases**: `@/` for src, `@lib/` for lib directory
- **Node.js types**: Added `@types/node` for build compatibility

### 3. Vite Configuration Files
- **vite.config.ts**: Main dev server with Tailwind and aliases
- **vite.config.lib.ts**: Library build configuration
- **vite.config.docs.ts**: GitHub Pages build with base path
- **Fixed path imports**: Used `path.resolve(process.cwd(), ...)` for cross-platform compatibility

### 4. Tailwind CSS Setup
- **Version**: Tailwind CSS v4.1 with `@tailwindcss/vite` plugin
- **Import syntax**: `@import "tailwindcss";` (v4.1 syntax, not the old @tailwind directives)
- **Configuration**: `tailwind.config.js` scans both lib/ and src/ directories
- **Applied to**: Demo site and component styles

### 5. Package.json Configuration
```json
{
  "name": "pivotui",
  "version": "0.1.0",
  "main": "./dist/pivotui.umd.cjs",
  "module": "./dist/pivotui.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/pivotui.js",
      "require": "./dist/pivotui.umd.cjs"
    },
    "./dist/style.css": "./dist/style.css"
  },
  "peerDependencies": {
    "vue": "^3.5.0"
  }
}
```

## Components Created

### Button Component (`lib/components/Button.vue`)
**Features:**
- **5 variants**: primary, secondary, outline, ghost, danger
- **3 sizes**: sm, md, lg
- **States**: normal, disabled, loading
- **TypeScript**: Fully typed props with ButtonProps interface
- **Styling**: Tailwind classes with hover/focus states
- **Loading state**: Custom spinner animation

**Props Interface:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}
```

### Demo Components
- **ButtonExamples.vue**: Interactive showcase with all variants, sizes, states
- **App.vue**: Main demo site with navigation and component sections

## CI/CD & Deployment

### GitHub Actions Workflows
1. **deploy.yml**: Auto-deploys demo site to GitHub Pages on main branch pushes
2. **publish.yml**: Auto-publishes to NPM on GitHub releases

### Security Configurations
- **Minimal permissions**: Only requests necessary access
- **Environment protection**: `npm-publish` environment for NPM releases
- **Pinned dependencies**: Uses specific action versions (@v4)
- **Secret management**: Uses `NPM_TOKEN` secret (needs manual setup)

### Required Repository Setup
1. **Add NPM_TOKEN** in GitHub Settings → Secrets → Actions
2. **Enable GitHub Pages** in repository settings
3. **Create npm-publish environment** with protection rules
4. **Set up branch protection** for main branch

## Issues Resolved

### 1. TypeScript Errors in Vite Configs
**Problem**: `Cannot find module 'path'` and `__dirname` not defined
**Solution**: Added `@types/node` dependency and used `path.resolve(process.cwd(), ...)` instead of `__dirname`

### 2. Tailwind CSS Not Working
**Problem**: Classes had no effect
**Solution**: 
- Created `tailwind.config.js` with proper content paths
- Used correct v4.1 syntax: `@import "tailwindcss";`
- Added CSS import to `main.ts`

### 3. Module Resolution Issues
**Problem**: `@lib` alias not recognized in demo site
**Solution**: 
- Added path aliases to `tsconfig.app.json`
- Added resolve aliases to all Vite configs
- Included lib files in TypeScript compilation

## Commands Reference
```bash
# Development
yarn dev                 # Start demo site dev server
yarn build               # Build demo site
yarn build:lib          # Build library for NPM
yarn build:docs         # Build demo site for GitHub Pages

# Publishing
# 1. Create GitHub release to trigger NPM publish
# 2. Push to main branch to deploy demo site
```

## Next Steps for Development
1. **Create additional components** (Input, Card, Modal, etc.)
2. **Add component documentation** with props tables
3. **Set up Storybook** for better component development
4. **Add unit tests** with Vitest
5. **Configure automated releases** with semantic versioning
6. **Add accessibility features** and ARIA support

## Important Notes
- **Public repository**: All workflows are secure for public use
- **NPM ready**: Package is configured for NPM distribution
- **Demo site**: Automatically deploys to GitHub Pages
- **TypeScript**: Full type safety throughout the library
- **Modular**: Easy to add new components following established patterns

## Commit History
- **Initial commit**: `bd5abde` - Complete transformation from Vite template to component library
- **Security improvements**: Enhanced GitHub Actions workflows

This setup provides a solid foundation for building and distributing a Vue 3 component library with modern tooling and best practices.