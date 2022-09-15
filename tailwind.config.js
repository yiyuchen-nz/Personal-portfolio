// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    fontFamily: {
      Poppins: ['Poppins'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        },
      },
    },
  },
  plugins: [],
}
