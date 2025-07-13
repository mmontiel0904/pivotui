/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./lib/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Primary font - Inter for UI elements
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        // Secondary font - Source Serif Pro for emphasis and headers  
        'serif': ['Source Serif Pro', 'Georgia', 'serif'],
        // Monospace font - JetBrains Mono for data display
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Material Design 3 Typography Scale for ERP
        // Display - Large page headers and dashboard titles
        'display-large': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px' }],
        'display-medium': ['45px', { lineHeight: '52px', letterSpacing: '0px' }],
        'display-small': ['36px', { lineHeight: '44px', letterSpacing: '0px' }],
        
        // Headline - Section headers and card titles
        'headline-large': ['32px', { lineHeight: '40px', letterSpacing: '0px' }],
        'headline-medium': ['28px', { lineHeight: '36px', letterSpacing: '0px' }],
        'headline-small': ['24px', { lineHeight: '32px', letterSpacing: '0px' }],
        
        // Title - Subheadings and important labels
        'title-large': ['22px', { lineHeight: '28px', letterSpacing: '0px' }],
        'title-medium': ['16px', { lineHeight: '24px', letterSpacing: '0.15px' }],
        'title-small': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],
        
        // Body - Main content text
        'body-large': ['16px', { lineHeight: '24px', letterSpacing: '0.15px' }],
        'body-medium': ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        'body-small': ['12px', { lineHeight: '16px', letterSpacing: '0.4px' }],
        
        // Label - Button text and small UI elements
        'label-large': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],
        'label-medium': ['12px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        'label-small': ['11px', { lineHeight: '16px', letterSpacing: '0.5px' }],
      },
      fontWeight: {
        // Material Design 3 weight scale
        'regular': '400',
        'medium': '500',
        'semibold': '600',
      },
    },
  },
  plugins: [],
}