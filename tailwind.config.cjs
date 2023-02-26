/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#8A565C',
      'primary-focus': '#7D4F54',
      'secondary': '#D91D5F',
      'secondary-focus': '#C40F4F',
      'accent': '#F5CC00',
      'accent-focus': '#E0BB00',
      'black': '#011627',
      'gray': '#777777',
      'gray-focus': '#4a4949',
      'white': '#fdfffc',
      'info': '#5bc0de',
      'success': '#5cb85c',
      'warning': '#f0ad4e',
      'error': '#d9534f',
    }
  },
  plugins: [],
}
