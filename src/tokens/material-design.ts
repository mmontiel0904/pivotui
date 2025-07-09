/**
 * Material Design 3 Design Tokens
 * Adapted for business/ERP applications
 */

// Material Design 3 Color Roles adapted for business use
export const materialColors = {
  // Primary - Green-Teal for business confidence
  primary: {
    10: '#002018',
    20: '#00382a',
    30: '#00513a',
    40: '#006b4b',
    50: '#00855c',
    60: '#26a16f',
    70: '#4abd82',
    80: '#67db97',
    90: '#83f8ac',
    95: '#c2ffcf',
    99: '#f7fff2',
  },
  
  // Secondary - Supporting green tones
  secondary: {
    10: '#0f1f19',
    20: '#24342d',
    30: '#3a4b42',
    40: '#516258',
    50: '#697a70',
    60: '#819489',
    70: '#9baea3',
    80: '#b6c9bd',
    90: '#d2e5d8',
    95: '#e0f3e6',
    99: '#f7fff2',
  },
  
  // Tertiary - Accent colors for data visualization
  tertiary: {
    10: '#001f24',
    20: '#00363d',
    30: '#004d56',
    40: '#006570',
    50: '#007d8a',
    60: '#2e96a5',
    70: '#4fb1c0',
    80: '#6fccdc',
    90: '#97e8f8',
    95: '#cbf4fb',
    99: '#f4fdff',
  },
  
  // Error - For validation and alerts
  error: {
    10: '#410002',
    20: '#690005',
    30: '#93000a',
    40: '#ba1a1a',
    50: '#de3730',
    60: '#ff5449',
    70: '#ff897d',
    80: '#ffb4ab',
    90: '#ffdad6',
    95: '#ffedea',
    99: '#fffbff',
  },
  
  // Neutral - For text and backgrounds
  neutral: {
    10: '#191c1a',
    20: '#2e312f',
    30: '#444845',
    40: '#5c5f5c',
    50: '#747874',
    60: '#8e918d',
    70: '#a8aca7',
    80: '#c4c7c2',
    90: '#e0e3de',
    95: '#eff1ec',
    99: '#f7f9f4',
  },
  
  // Neutral Variant - For subtle elements
  neutralVariant: {
    10: '#171d1b',
    20: '#2c322f',
    30: '#424945',
    40: '#5a615d',
    50: '#727975',
    60: '#8b938f',
    70: '#a6ada9',
    80: '#c1c9c4',
    90: '#dde5e0',
    95: '#ebf3ee',
    99: '#f7fff2',
  },
};

// Material Design 3 Typography Scale adapted for business applications
export const materialTypography = {
  // Display - For large headings and hero text
  displayLarge: {
    fontFamily: 'Inter',
    fontSize: '3.5rem',     // 56px
    fontWeight: 400,
    lineHeight: 1.12,
    letterSpacing: '-0.25px',
  },
  displayMedium: {
    fontFamily: 'Inter',
    fontSize: '2.8125rem',  // 45px
    fontWeight: 400,
    lineHeight: 1.15,
    letterSpacing: '0px',
  },
  displaySmall: {
    fontFamily: 'Inter',
    fontSize: '2.25rem',    // 36px
    fontWeight: 400,
    lineHeight: 1.22,
    letterSpacing: '0px',
  },
  
  // Headline - For section headings
  headlineLarge: {
    fontFamily: 'Inter',
    fontSize: '2rem',       // 32px
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: '0px',
  },
  headlineMedium: {
    fontFamily: 'Inter',
    fontSize: '1.75rem',    // 28px
    fontWeight: 600,
    lineHeight: 1.29,
    letterSpacing: '0px',
  },
  headlineSmall: {
    fontFamily: 'Inter',
    fontSize: '1.5rem',     // 24px
    fontWeight: 600,
    lineHeight: 1.33,
    letterSpacing: '0px',
  },
  
  // Title - For component titles
  titleLarge: {
    fontFamily: 'Inter',
    fontSize: '1.375rem',   // 22px
    fontWeight: 500,
    lineHeight: 1.27,
    letterSpacing: '0px',
  },
  titleMedium: {
    fontFamily: 'Inter',
    fontSize: '1rem',       // 16px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.15px',
  },
  titleSmall: {
    fontFamily: 'Inter',
    fontSize: '0.875rem',   // 14px
    fontWeight: 500,
    lineHeight: 1.43,
    letterSpacing: '0.1px',
  },
  
  // Body - For body text
  bodyLarge: {
    fontFamily: 'Inter',
    fontSize: '1rem',       // 16px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.15px',
  },
  bodyMedium: {
    fontFamily: 'Inter',
    fontSize: '0.875rem',   // 14px
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.25px',
  },
  bodySmall: {
    fontFamily: 'Inter',
    fontSize: '0.75rem',    // 12px
    fontWeight: 400,
    lineHeight: 1.33,
    letterSpacing: '0.4px',
  },
  
  // Label - For labels and captions
  labelLarge: {
    fontFamily: 'Inter',
    fontSize: '0.875rem',   // 14px
    fontWeight: 500,
    lineHeight: 1.43,
    letterSpacing: '0.1px',
  },
  labelMedium: {
    fontFamily: 'Inter',
    fontSize: '0.75rem',    // 12px
    fontWeight: 500,
    lineHeight: 1.33,
    letterSpacing: '0.5px',
  },
  labelSmall: {
    fontFamily: 'Inter',
    fontSize: '0.6875rem',  // 11px
    fontWeight: 500,
    lineHeight: 1.27,
    letterSpacing: '0.5px',
  },
  
  // Code - For code and data display
  codeLarge: {
    fontFamily: 'JetBrains Mono',
    fontSize: '0.875rem',   // 14px
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0px',
  },
  codeMedium: {
    fontFamily: 'JetBrains Mono',
    fontSize: '0.75rem',    // 12px
    fontWeight: 400,
    lineHeight: 1.33,
    letterSpacing: '0px',
  },
  codeSmall: {
    fontFamily: 'JetBrains Mono',
    fontSize: '0.6875rem',  // 11px
    fontWeight: 400,
    lineHeight: 1.27,
    letterSpacing: '0px',
  },
};

// Material Design 3 Shape Scale
export const materialShapes = {
  // Corner radius values
  corner: {
    none: '0px',
    extraSmall: '4px',
    small: '8px',
    medium: '12px',
    large: '16px',
    extraLarge: '28px',
    full: '9999px',
  },
};

// Material Design 3 Elevation (using shadows)
export const materialElevation = {
  level0: 'none',
  level1: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
  level2: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  level3: '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
  level4: '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
  level5: '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
};

// Material Design 3 Motion (animation durations and easings)
export const materialMotion = {
  duration: {
    short1: '50ms',
    short2: '100ms',
    short3: '150ms',
    short4: '200ms',
    medium1: '250ms',
    medium2: '300ms',
    medium3: '350ms',
    medium4: '400ms',
    long1: '450ms',
    long2: '500ms',
    long3: '550ms',
    long4: '600ms',
  },
  easing: {
    linear: 'cubic-bezier(0, 0, 1, 1)',
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
    standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
    emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
    emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
    emphasizedAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
  },
};

// Business-specific enhancements for ERP applications
export const businessTokens = {
  // Status colors for business data
  status: {
    active: materialColors.primary[60],
    inactive: materialColors.neutral[50],
    pending: materialColors.tertiary[60],
    approved: materialColors.primary[70],
    rejected: materialColors.error[60],
    draft: materialColors.neutralVariant[60],
  },
  
  // Priority levels
  priority: {
    critical: materialColors.error[60],
    high: '#ff9800',
    medium: materialColors.tertiary[60],
    low: materialColors.neutralVariant[60],
  },
  
  // Data visualization colors
  chart: {
    primary: materialColors.primary[60],
    secondary: materialColors.secondary[60],
    tertiary: materialColors.tertiary[60],
    accent1: '#9c27b0',
    accent2: '#ff5722',
    accent3: '#607d8b',
  },
  
  // Semantic spacing for business layouts
  spacing: {
    component: '16px',
    section: '24px',
    page: '32px',
    form: '12px',
    table: '8px',
  },
};