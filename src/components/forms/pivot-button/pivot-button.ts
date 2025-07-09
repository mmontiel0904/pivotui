/**
 * PivotButton - Material Design 3 Button Component
 * 
 * A customizable button component following Material Design 3 principles
 * adapted for business applications.
 */

export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'tonal';
export type ButtonSize = 'small' | 'medium' | 'large';

export class PivotButton extends HTMLElement {
  private button: HTMLButtonElement | null = null;
  
  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'loading'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  private get variant(): ButtonVariant {
    return (this.getAttribute('variant') as ButtonVariant) || 'filled';
  }

  private get size(): ButtonSize {
    return (this.getAttribute('size') as ButtonSize) || 'medium';
  }

  private get disabled(): boolean {
    return this.hasAttribute('disabled');
  }

  private get loading(): boolean {
    return this.hasAttribute('loading');
  }

  private render() {
    if (!this.shadowRoot) return;

    const variant = this.variant;
    const size = this.size;
    const disabled = this.disabled;
    const loading = this.loading;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          --button-height: ${this.getButtonHeight()};
          --button-padding: ${this.getButtonPadding()};
          --button-font-size: ${this.getButtonFontSize()};
        }

        .button {
          font-family: var(--font-family-ui, 'Inter', sans-serif);
          font-size: var(--button-font-size);
          font-weight: 500;
          line-height: 1.43;
          letter-spacing: 0.1px;
          
          height: var(--button-height);
          padding: var(--button-padding);
          border-radius: 20px;
          border: none;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
          
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          
          position: relative;
          overflow: hidden;
          
          /* Remove default button styles */
          background: none;
          outline: none;
          text-decoration: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        /* Variant styles */
        .button--filled {
          background-color: var(--md-sys-color-primary-60, #26a16f);
          color: var(--md-sys-color-on-primary, #ffffff);
        }

        .button--filled:hover:not(:disabled) {
          background-color: var(--md-sys-color-primary-70, #4abd82);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
        }

        .button--filled:focus:not(:disabled) {
          background-color: var(--md-sys-color-primary-70, #4abd82);
          box-shadow: 0 0 0 2px var(--md-sys-color-primary-95, #c2ffcf);
        }

        .button--filled:active:not(:disabled) {
          background-color: var(--md-sys-color-primary-50, #00855c);
        }

        .button--outlined {
          background-color: transparent;
          color: var(--md-sys-color-primary-60, #26a16f);
          border: 1px solid var(--md-sys-color-outline, #8e918d);
        }

        .button--outlined:hover:not(:disabled) {
          background-color: var(--md-sys-color-primary-95, #c2ffcf);
          border-color: var(--md-sys-color-primary-60, #26a16f);
        }

        .button--outlined:focus:not(:disabled) {
          background-color: var(--md-sys-color-primary-95, #c2ffcf);
          border-color: var(--md-sys-color-primary-60, #26a16f);
          box-shadow: 0 0 0 2px var(--md-sys-color-primary-95, #c2ffcf);
        }

        .button--outlined:active:not(:disabled) {
          background-color: var(--md-sys-color-primary-90, #83f8ac);
        }

        .button--text {
          background-color: transparent;
          color: var(--md-sys-color-primary-60, #26a16f);
          border: none;
        }

        .button--text:hover:not(:disabled) {
          background-color: var(--md-sys-color-primary-95, #c2ffcf);
        }

        .button--text:focus:not(:disabled) {
          background-color: var(--md-sys-color-primary-95, #c2ffcf);
          box-shadow: 0 0 0 2px var(--md-sys-color-primary-95, #c2ffcf);
        }

        .button--text:active:not(:disabled) {
          background-color: var(--md-sys-color-primary-90, #83f8ac);
        }

        .button--tonal {
          background-color: var(--md-sys-color-secondary-95, #e0f3e6);
          color: var(--md-sys-color-secondary-30, #3a4b42);
        }

        .button--tonal:hover:not(:disabled) {
          background-color: var(--md-sys-color-secondary-90, #d2e5d8);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
        }

        .button--tonal:focus:not(:disabled) {
          background-color: var(--md-sys-color-secondary-90, #d2e5d8);
          box-shadow: 0 0 0 2px var(--md-sys-color-secondary-95, #e0f3e6);
        }

        .button--tonal:active:not(:disabled) {
          background-color: var(--md-sys-color-secondary-80, #b6c9bd);
        }

        /* Disabled state */
        .button:disabled {
          opacity: 0.38;
          cursor: not-allowed;
          background-color: var(--md-sys-color-neutral-90, #e0e3de);
          color: var(--md-sys-color-neutral-40, #5c5f5c);
          border-color: var(--md-sys-color-neutral-80, #c4c7c2);
        }

        /* Loading state */
        .button--loading {
          pointer-events: none;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid currentColor;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Ripple effect */
        .button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, currentColor 10%, transparent 10%);
          opacity: 0;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s, opacity 0.6s;
        }

        .button:active::before {
          width: 300px;
          height: 300px;
          opacity: 0.1;
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .button {
            transition: none;
          }
          
          .loading-spinner {
            animation: none;
          }
        }
      </style>
      
      <button 
        class="button button--${variant} ${size ? `button--${size}` : ''} ${loading ? 'button--loading' : ''}"
        ${disabled ? 'disabled' : ''}
        ${loading ? 'aria-busy="true"' : ''}
        type="button"
      >
        ${loading ? '<span class="loading-spinner"></span>' : ''}
        <slot></slot>
      </button>
    `;

    this.button = this.shadowRoot.querySelector('.button');
  }

  private getButtonHeight(): string {
    switch (this.size) {
      case 'small': return '32px';
      case 'large': return '48px';
      default: return '40px';
    }
  }

  private getButtonPadding(): string {
    switch (this.size) {
      case 'small': return '0 16px';
      case 'large': return '0 32px';
      default: return '0 24px';
    }
  }

  private getButtonFontSize(): string {
    switch (this.size) {
      case 'small': return '0.75rem';
      case 'large': return '1rem';
      default: return '0.875rem';
    }
  }

  private attachEventListeners() {
    this.button?.addEventListener('click', (e) => {
      if (this.disabled || this.loading) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      
      // Forward the click event to the host element
      this.dispatchEvent(new CustomEvent('click', {
        bubbles: true,
        cancelable: true,
        detail: { originalEvent: e }
      }));
    });

    this.button?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (this.disabled || this.loading) {
          e.preventDefault();
          return;
        }
        
        // Trigger click for keyboard users
        this.dispatchEvent(new CustomEvent('click', {
          bubbles: true,
          cancelable: true,
          detail: { originalEvent: e, triggeredByKeyboard: true }
        }));
      }
    });
  }

  // Public methods
  public focus() {
    this.button?.focus();
  }

  public blur() {
    this.button?.blur();
  }

  public click() {
    this.button?.click();
  }
}

// Register the custom element
customElements.define('pivot-button', PivotButton);