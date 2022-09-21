/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js, jsx}', './components/**/*.{js, jsx}'],
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      black: '#000000',
      'light-black': '#1E1E1E',
      white: '#FFFFFF',
      grey: '878787'
    },
    extend: {
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
