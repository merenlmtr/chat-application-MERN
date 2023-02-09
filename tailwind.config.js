/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'meone': '#4B064A',
        'metwo': '#0E253E',
        'methree': '#005066',
        'mefour': '#FCEBC0'
      }
    },
  },
  plugins: [],
}
