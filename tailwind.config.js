/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        "btn": "#a4a4a4",
        "back": "#f7f6f2",
        "pink": "#ffe5e0",
        "btn-pink": "#f04f61",
        "line-pink": "#f9ded7",
        "yellow": "#f9f7de",
        "btn-yellow": "#f29901",
        "line-yellow": "#f3e5ca",
        "blue": "#eefcfd",
        "btn-blue": "#0168b7",
        "line-blue": "#f0ebe5",
        "gray": "#eae7e0",
      }
     },
     screens: {
      '3s': '375px',
      '2s': '425px',
      'xs': '500px',
      'sm': '640px',
      'md': '730px',
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }