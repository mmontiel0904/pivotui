# Tools

This directory contains development tools and build configurations for the PivotUI project.

## Tools Structure

- **`build/`** - Build configuration and scripts
- **`dev/`** - Development utilities
- **`testing/`** - Test configuration and utilities
- **`docs/`** - Documentation generation tools
- **`release/`** - Release automation scripts

## Available Tools

### Build Tools
- Component bundling
- CSS processing
- TypeScript compilation
- Asset optimization

### Development Tools
- Development server
- Hot module replacement
- Component playground
- Visual regression testing

### Testing Tools
- Unit test configuration
- Integration test setup
- Visual testing utilities
- Performance testing

### Release Tools
- Version management
- Changelog generation
- Package publishing
- Documentation deployment

## Usage

Most tools are accessed through npm scripts:

```bash
npm run build          # Build for production
npm run dev            # Start development server
npm run test           # Run tests
npm run test:visual    # Run visual regression tests
npm run docs:build     # Build documentation
npm run release        # Create release
```