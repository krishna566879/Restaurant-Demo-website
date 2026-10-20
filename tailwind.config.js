/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#0A0A0A',
          900: '#141414',
          800: '#1E1E1E',
          700: '#2A2A2A',
          600: '#3A3A3A',
        },
        ivory: {
          DEFAULT: '#F5F0E8',
          dim: '#B8B0A2',
          muted: '#8A8278',
        },
        sage: {
          DEFAULT: '#8A9A7B',
          dark: '#6B7D5E',
          light: '#A3B294',
        },
        champagne: {
          DEFAULT: '#C9B99A',
          light: '#D4C9AE',
          dark: '#B5A486',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.35rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading-1': ['clamp(1.9rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading-2': ['clamp(1.6rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-3': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.2' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.15em', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        'section': '8rem',
        'section-lg': '10rem',
      },
      maxWidth: {
        'site': '1280px',
        'narrow': '720px',
        'wide': '1440px',
      },
      borderColor: {
        DEFAULT: '#2A2A2A',
      },
      transitionDuration: {
        '180': '180ms',
        '240': '240ms',
        '260': '260ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};
