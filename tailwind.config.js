const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.gray,
        red: colors.red,
        green: colors.green,
        emerald: colors.emerald,
        lime: colors.lime,
        blue: colors.blue,
        pink: colors.pink,
        rose: colors.rose,
        yellow: colors.yellow,

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
