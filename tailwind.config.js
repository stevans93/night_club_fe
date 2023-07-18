/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#475DDB',
        secondary: '#F0F4F9',
        tertiary: '#f8f8ff',
        others: '#484848',
        font: '#8A8A8A',
      }
    },
  },
  plugins: [],
}

