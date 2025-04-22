/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        marathi: ['Noto Sans Devanagari', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf2f2',
          100: '#f9d6d6',
          200: '#f1a9a9',
          300: '#e87c7c',
          400: '#de5050',
          500: '#d42323',
          600: '#b31c1c',
          700: '#8B0000', // Deep maroon
          800: '#6b1414',
          900: '#4c0e0e',
        },
        secondary: {
          50: '#fdfaf0',
          100: '#faf3d1',
          200: '#f5e7a3',
          300: '#efda76',
          400: '#e9ce48',
          500: '#D4AF37', // Gold
          600: '#ac8c2c',
          700: '#816921',
          800: '#574716',
          900: '#2c230b',
        },
      },
    },
  },
  plugins: [],
};