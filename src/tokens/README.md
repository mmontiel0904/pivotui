# Design Tokens

This directory contains design tokens that define the visual language of PivotUI.

## Files Structure

- **`colors.ts`** - Color palette definitions
- **`typography.ts`** - Font scales and typography tokens
- **`spacing.ts`** - Spacing scale definitions
- **`shadows.ts`** - Shadow definitions
- **`borders.ts`** - Border radius and border tokens
- **`breakpoints.ts`** - Responsive breakpoint definitions

## Usage

Design tokens are exported as TypeScript constants and CSS custom properties.

```typescript
import { colors, spacing, typography } from '@pivotui/tokens';

// Use in component styles
const buttonStyles = css`
  background-color: ${colors.primary[500]};
  padding: ${spacing.md};
  font-family: ${typography.fontFamily.ui};
`;
```

## Token Categories

### Colors
- Primary (green-teal palette)
- Semantic (success, warning, error, info)
- Neutral (grayscale)

### Typography
- Font families (Inter, JetBrains Mono)
- Font sizes and line heights
- Font weights

### Spacing
- Consistent spacing scale (xs, sm, md, lg, xl, 2xl, 3xl)

### Shadows
- Elevation levels for depth
- Consistent shadow styles

### Borders
- Border radius scales
- Border widths and styles