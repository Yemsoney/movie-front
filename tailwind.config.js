/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0f0c29',
          secondary: '#302b63',
          tertiary: '#24243e',
          surface: '#1a1a2e',
          card: '#16213e',
        },
        light: {
          primary: '#ffffff',
          secondary: '#f7f7f7',
          tertiary: '#eeeeee',
          surface: '#ffffff',
          card: '#f5f5f7',
        },
        accent: {
          primary: '#ff0066',
          secondary: '#00d9ff',
          gold: '#ffb700',
          success: '#00c07f',
          warning: '#ff9500',
          error: '#ff3b30',
        },
        text: {
          dark: {
            primary: '#ffffff',
            secondary: '#cccccc',
            tertiary: '#999999',
          },
          light: {
            primary: '#111111',
            secondary: '#444444',
            tertiary: '#777777',
          },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'khmer': ['Kantumruy Pro', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      height: {
        'header': 'var(--header-height)',
        'hero-sm': '50vh',
        'hero-md': '70vh',
        'hero-lg': '85vh',
      },
      maxHeight: {
        'movie-card': '350px',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
        'gradient-radial': 'radial-gradient(circle, #302b63 0%, #0f0c29 100%)',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.accent.secondary), 0 0 10px theme(colors.accent.secondary)',
        'neon-pink': '0 0 5px theme(colors.accent.primary), 0 0 10px theme(colors.accent.primary)',
        'neon-gold': '0 0 5px theme(colors.accent.gold), 0 0 10px theme(colors.accent.gold)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 30px 60px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      screens: {
        'xs': '480px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};