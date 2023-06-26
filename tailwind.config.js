/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit", //would be better to use this in production for faster compilation of css 
  purge: ['./src/**/*.{js,jsx}', './public/index.html'], //purge unused css in production 
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors : {
        // primary: '#202225', // bg primary 
        // secondary: '#5865F2', // bg secondray will change
        // gray:colors.truegray, // using the above import of colors 
        // gray:{
        gray:{
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',

        },

      },
    },
  },
  plugins: [],
}

