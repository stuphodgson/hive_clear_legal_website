/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true
    },
    colors: {
      'primary': '#E84C8D',
      'secondary': '#24AAE1',
      'white': colors.white,
      'black': colors.black,
      'gray': colors.slate,
      'transparent': colors.transparent,
    },
    fontFamily: {
      'lex-xl': ['Lexend-XL', 'Helvetica', 'Arial', 'sans-serif'],
      'lex-l': ['Lexend-L', 'Helvetica', 'Arial', 'sans-serif'],
      'lex-r': ['Lexend-R', 'Helvetica', 'Arial', 'sans-serif'],
      'lex-m': ['Lexend-M', 'Helvetica', 'Arial', 'sans-serif'],
      'lex-sb': ['Lexend-SB', 'Helvetica', 'Arial', 'sans-serif'],
      'lex-b': ['Lexend-B', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
