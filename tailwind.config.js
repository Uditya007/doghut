/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#5c040e',
          dark: '#42030a',
        },
        beige: {
          DEFAULT: '#f5f0e8',
        },
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
        heading: ['Gill Sans', 'Gill Sans MT', 'Calibri', 'sans-serif'],
      },
      spacing: {
        '95': '23.75rem',
        '205': '51.25rem',
      },
      zIndex: {
        '60': '60',
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [],
}
