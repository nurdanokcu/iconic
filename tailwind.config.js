const animate = require('tailwindcss-animate');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'border': 'hsl(var(--border))',
        'input': 'hsl(var(--input))',
        'ring': 'hsl(var(--ring))',
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
        'primary': {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'secondary': {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'destructive': {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'muted': {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'accent': {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'popover': {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'card': {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        /* My Theme Colors */
        'black': 'var(--black)',
        'white': 'var(--white)',
        'surface-primary': 'var(--white)',
        'surface-primary-dark': 'var(--grey-400)',
        'text-primary': 'var(--black)',
        'text-primary-dark': 'var(--white)',
        'text-secondary': 'var(--gold-700)',
        'text-secondary-dark': 'var(--gold-500)',
        'button-background': 'var(--grey-400)',
        'button-background-dark': 'var(--white)',
        'button-label': 'var(--gold-300)',
        'button-label-dark': 'var(--grey-400)',
        'surface-secondary': 'var(--gold-700)',
        'surface-secondary-dark': 'var(--gold-200)',
        'surface-error': 'var(--red-200)',
        'surface-error-dark': 'var(--red-400)',
        'border-error': 'var(--red-100)',
        'border-error-dark': 'var(--red-200)',
        'surface-success': 'var(--green-200)',
        'surface-success-dark': 'var(--green-400)',
        'border-success': 'var(--green-100)',
        'border-success-dark': 'var(--green-200)',
        'border-primary': 'var(--gold-400)',
        'border-primary-dark': 'var(--gold-400)',
        'icons-primary': 'var(--gold-400)',
        'icons-primary-dark': 'var(--gold-600)',
        'icon-error': 'var(--red-100)',
        'icon-error-dark': 'var(--red-300)',
        'icon-success': 'var(--green-300)',
        'icon-success-dark': 'var(--green-300)',
        'error-label-primary': 'var(--gold-100)',
        'error-label-primary-dark': 'var(--gold-500)',
        'button-background-hover': 'var(--grey-300)',
        'button-background-hover-dark': 'var(--grey-100)',
        'text-ongold': 'var(--white)',
        'text-ongold-dark': 'var(--black)',
        'decor': 'var(--gold-400)',
        'decor-dark': 'var(--gold-500)',
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: '0.25rem',
        xs: '0.125rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      spacing: {
        xxs: '0.125rem',
        xs: '0.25rem',
        s: '0.5rem',
        m: '1rem',
        l: '1.5rem',
        xl: '2rem',
        xxl: '4rem',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
      fontFamily: {
        montserrat: ['Montserrat', ...fontFamily.sans],
        foglihten: ['FoglihtenNo07', ...fontFamily.sans],
      },
    },
  },
  plugins: [animate],
};
