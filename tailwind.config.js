/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Elephant: ['Elephant', 'sans-serif'],
        Bookman: ['Bookman', 'regular'],
        Raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        'color-palette-1': '#1B0C55',
      },
    },
  },
  plugins: [],
};
