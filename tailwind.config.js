/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#bce4ff',
          300: '#8ed0ff',
          400: '#59b5ff',
          500: '#3495fd',
          600: '#1a76f2',
          700: '#1260e0',
          800: '#154eb5',
          900: '#17438d',
        },
        secondary: {
          50: '#f4f9fd',
          100: '#e9f2fc',
          200: '#d2e4f9',
          300: '#adcef4',
          400: '#80b0ed',
          500: '#5d8fe4',
          600: '#4270d7',
          700: '#355bc4',
          800: '#304ba0',
          900: '#29407e',
        },
        accent: {
          50: '#fef8ec',
          100: '#fceeca',
          200: '#f9dc92',
          300: '#f6c251',
          400: '#f3a723',
          500: '#ea8718',
          600: '#cc5f12',
          700: '#a94113',
          800: '#8b3416',
          900: '#742d16',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
        // Adding new neon and glass colors for modern effects
        neon: {
          purple: '#b537f2',
          blue: '#3672f8',
          green: '#0cd6a8',
          yellow: '#ffde12',
          pink: '#ff61d8',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.05)',
          blur: 'rgba(255, 255, 255, 0.15)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'morph': 'morph 8s ease-in-out infinite alternate',
        '3d-rotate': 'rotate3d 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%': { filter: 'brightness(100%) drop-shadow(0 0 0px rgba(54, 114, 248, 0.7))' },
          '100%': { filter: 'brightness(110%) drop-shadow(0 0 15px rgba(54, 114, 248, 0.7))' },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }
        },
        rotate3d: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)' },
          '25%': { transform: 'perspective(1000px) rotateY(10deg) rotateX(5deg)' },
          '50%': { transform: 'perspective(1000px) rotateY(0deg) rotateX(10deg)' },
          '75%': { transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)' }
        }
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};