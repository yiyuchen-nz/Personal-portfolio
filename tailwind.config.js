// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    fontFamily: {
      Poppins: ['Poppins'],
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: '#6C98C6',
        },
        butter: {
          DEFAULT: '#F3F0E2',
        },
        darkBlue: {
          DEFAULT: '#285880',
        },
      },
    },
  },
  plugins: [],
}
