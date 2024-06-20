/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors : {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue
    },
    extend: {
      fontFamily : {
        'montserrat' : ['Montserrat','sans-serif'],
        'roboto-condensed' : ['Roboto Condensed','sans-serif']
      },
      keyframes : {
        initialClub : {
          '0%' : {backgroundColor : 'rgb(134, 130, 130)'},
          '100%' : {backgroundColor : 'transparent'}
        }
      },
      animation : {
        initialClub : 'initialClub 1.5s ease forwards'
      }
    },
  },
  plugins: [],
}

