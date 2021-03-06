const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/*.vue',
    './src/**/*.vue',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      ...colors, // object destructuring
    },
    extend: {
      spacing: {
        // extending the spacing.
        '66':	'18rem',
        '68':	'20rem',
        '70':	'22rem',
        '72': '24rem',
        '74':	'26rem',
        '76':	'28rem',
        '78':	'30rem',
        '80': '32rem',
      },
      boxShadow: {
        // extending the shadows by adding white shadows.
        'white-xs': '0 0 0 1px rgba(255, 255, 255, 0.05)',
        'white-sm': '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
        'white': '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)',
        'white-md': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
        'white-lg': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
        'white-xl': '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)',
        'white-2xl': '0 25px 50px -12px rgba(255, 255, 255, 0.25)',
        'white-3xl': '0 35px 60px -15px rgba(255, 255, 255, 0.3)',
        'white-inner': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
    },
  },
  variants: {
    // extend the variants you want applied by adding to the core util 
    extend: {
      boxShadow: ['dark'],
      animation: ['group-hover', 'group-focus', 'hover', 'focus'],
      transform: ['group-hover', 'group-focus', 'hover', 'focus'],
    },
  },
  plugins: [],
}
