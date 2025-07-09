/**
 * PivotUI - Web Components Library for ERP Applications
 * 
 * A comprehensive design system based on Material Design 3
 * principles, adapted for business and enterprise applications.
 * 
 * @version 0.1.0
 * @author Marcos Montiel Cruz
 * @license SEE LICENSE IN LICENSE-PERSONAL
 */

// Import main stylesheet
import './styles/main.css';

// Export design tokens
export * from './tokens/material-design';

// Export components
export * from './components/forms';
// export * from './components/data';
// export * from './components/navigation';
// export * from './components/layout';
// export * from './components/feedback';

// Export utilities (will be added as utilities are created)
// export * from './utils';

// Version information
export const version = '0.1.0';

// Library information
export const library = {
  name: 'PivotUI',
  version: '0.1.0',
  description: 'A comprehensive Web Components library for ERP and business applications',
  author: 'Marcos Montiel Cruz',
  license: 'SEE LICENSE IN LICENSE-PERSONAL',
  repository: 'https://github.com/marcosmontiel/pivotui',
};

// Development helper
if (typeof window !== 'undefined' && window.location?.hostname === 'localhost') {
  console.log(`🚀 PivotUI v${version} loaded in development mode`);
}