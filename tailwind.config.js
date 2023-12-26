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
      }
    },
  },
  plugins: [],
}

