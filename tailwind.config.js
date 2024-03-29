/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#282423',
        primary: '#FEECBC',
        secondary: '#999079',
        tertiary: '#A5A09C',
      },
      boxShadow: {
				'neuburtal-sm': '0 .125rem 0rem rgba(0, 0, 0, 1)',
				'neuburtal': '0 .25rem 0rem rgba(0, 0, 0, 1)',
				'neuburtal-md': '0 .375rem 0rem rgba(0, 0, 0, 1)',
				'neuburtal-lg': '0 .5rem 0rem rgba(0, 0, 0, 1)',
			},
    },
  },
  plugins: [],
}

