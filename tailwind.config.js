/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFEFC',
          100: '#FDFBF7', // Main Background
          200: '#F7F3EB',
          300: '#EFE8DC',
          400: '#E3D9C8',
        },
        charcoal: {
          900: '#1F1C18',
          800: '#2D2A26', // Main Text
          700: '#423D37',
          600: '#5C564E',
          500: '#7B746B',
          400: '#9E978D',
          300: '#C4BDB4',
        },
        sage: {
          50: '#F2F6F3',
          100: '#E4EDE6',
          200: '#C8DCCB',
          600: '#4A5D4E', // Primary Accent
          700: '#3D4D40',
          800: '#2F3C32',
          900: '#222C24',
        },
        terracotta: {
          50: '#FDF5F1',
          100: '#FAE9E0',
          200: '#F4D2C0',
          500: '#C87A53', // Small Accent
          600: '#B56740',
          700: '#945131',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(45, 42, 38, 0.04)',
        'card': '0 4px 20px -2px rgba(45, 42, 38, 0.06)',
        'float': '0 10px 30px -4px rgba(45, 42, 38, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
