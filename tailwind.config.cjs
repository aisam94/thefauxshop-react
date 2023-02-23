/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#C98986',
      'primary-focus': '#8A565C',
      'secondary': '#F6BDD1',
      'secondary-focus': '#F3A5C0',
      'accent': '#FFD60A',
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
