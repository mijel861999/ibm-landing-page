/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js, jsx}', './components/**/*.{js, jsx}'],
  theme: {
    screens: {},
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
