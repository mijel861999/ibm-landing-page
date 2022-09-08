/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
		"./pages/**/*.{js, jsx}",
		"./components/**/*.{js, jsx}"
	],
  theme: {
		screens: {
		},
		colors: {
			"black": "#000000",
			"light-black": "#1E1E1E",
			"white": "#FFFFFF",
			"grey": "878787"
		},
    extend: {},
  },
  plugins: [],
}
