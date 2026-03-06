import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors — extracted from K-HELPING logo
        primary: {
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00BCD4', // Main brand cyan
          600: '#00ACC1',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064',
        },
        accent: {
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#AB47BC',
          500: '#7B2D8E', // Brand purple (from logo heart/hand)
          600: '#6A1B7A',
          700: '#5C1069',
          800: '#4A0E5C',
          900: '#38004F',
        },
        brand: {
          cyan: '#00BCD4',      // Logo top
          blue: '#29B6F6',      // Logo text color
          purple: '#7B2D8E',    // Logo heart/hand
          gradient: {
            from: '#00BCD4',    // Gradient start (cyan)
            to: '#7B2D8E',      // Gradient end (purple)
          },
        },
        line: '#06C755',
        facebook: '#1877F2',
      },
      fontFamily: {
        sans: ['Sarabun', 'Noto Sans Thai', 'system-ui', 'sans-serif'],
        display: ['Sarabun', 'Noto Sans Thai', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'medium': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'line': '0 4px 14px rgba(6, 199, 85, 0.35)',
        'fb': '0 4px 14px rgba(24, 119, 242, 0.35)',
        'primary': '0 4px 14px rgba(0, 188, 212, 0.3)',
        'accent': '0 4px 14px rgba(123, 45, 142, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'pulse-soft': 'pulseSoft 3s infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
