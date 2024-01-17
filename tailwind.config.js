/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'light-background': "url('./src/assets/images/light-background.jpg')"
      }),
      fontFamily: {
        'archivo': ['"Archivo Black"', ...defaultTheme.fontFamily.sans],
        'plus-jakarta-sans': ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'solid': '13px 13px 0 0 rgba(255,255,255,1.0), 13px 13px 0 2px rgba(0,0,0,1.0)',
      }
    },
  },
  plugins: [],
}
