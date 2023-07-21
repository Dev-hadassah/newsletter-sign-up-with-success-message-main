/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        DarkSlateGrey: '#242742',
        CharcoalGrey: '#36384e',
        Grey: '#9294a0',
        White: '#ffffff'
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [],
}

