# PivotButton Component

A Material Design 3 button component adapted for business applications.

## Usage

```html
<pivot-button>Click me</pivot-button>
<pivot-button variant="outlined">Outlined</pivot-button>
<pivot-button variant="text">Text Button</pivot-button>
<pivot-button variant="tonal">Tonal Button</pivot-button>
```

## Props

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `variant` | `'filled' \| 'outlined' \| 'text' \| 'tonal'` | `'filled'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Disable the button |
| `loading` | `boolean` | `false` | Show loading state |

## Examples

### Basic Usage
```html
<pivot-button>Default Button</pivot-button>
```

### Variants
```html
<pivot-button variant="filled">Filled</pivot-button>
<pivot-button variant="outlined">Outlined</pivot-button>
<pivot-button variant="text">Text</pivot-button>
<pivot-button variant="tonal">Tonal</pivot-button>
```

### Sizes
```html
<pivot-button size="small">Small</pivot-button>
<pivot-button size="medium">Medium</pivot-button>
<pivot-button size="large">Large</pivot-button>
```

### States
```html
<pivot-button disabled>Disabled</pivot-button>
<pivot-button loading>Loading...</pivot-button>
```

### With Icons
```html
<pivot-button>
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path d="M8 0L10.2 5.6L16 5.6L11.8 9.2L14 16L8 12.4L2 16L4.2 9.2L0 5.6L5.8 5.6L8 0Z"/>
  </svg>
  With Icon
</pivot-button>
```

## Events

| Event | Description |
|-------|-------------|
| `click` | Fired when the button is clicked |

## Methods

| Method | Description |
|--------|-------------|
| `focus()` | Focus the button |
| `blur()` | Remove focus from the button |
| `click()` | Programmatically click the button |

## CSS Custom Properties

The component uses CSS custom properties from the Material Design 3 design tokens:

- `--md-sys-color-primary-*` - Primary color variations
- `--md-sys-color-secondary-*` - Secondary color variations
- `--md-sys-color-neutral-*` - Neutral color variations
- `--font-family-ui` - UI font family

## Accessibility

- Supports keyboard navigation (Enter and Space keys)
- Proper ARIA attributes for loading state
- Focus management
- Screen reader compatible
- Reduced motion support

## Browser Support

- Chrome 67+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## Material Design 3 Compliance

This component follows Material Design 3 guidelines:
- Color system with proper contrast ratios
- Typography scale
- Elevation and shadows
- Motion and transitions
- Accessibility standards