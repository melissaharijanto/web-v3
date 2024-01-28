/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'light': "url('/src/assets/images/background/light-background.jpg')",
        'experience': "url('/src/assets/images/background/experience-background.jpg')",
        'about': "url('/src/assets/images/background/about-background.jpg')",
        'dark': "url('/src/assets/images/background/dark-background.jpg')",
        'about-dark': "url('/src/assets/images/background/about-dark.jpg')",
        'exp-dark': "url('/src/assets/images/background/experience-dark.jpg')"
      }),
      fontFamily: {
        'archivo': ['"Archivo Black"', ...defaultTheme.fontFamily.sans],
        'plus-jakarta-sans': ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'solid': '13px 13px 0 0 rgba(255,240,200,1.0), 13px 13px 0 1px rgba(0,0,0,1.0)',
        'project': '7px 7px 0 0 rgba(255,240,200,1.0), 7px 7px 0 1px rgba(0,0,0,1.0)',
        'dark': '13px 13px 0 0 rgba(75, 37, 75, 1), 13px 13px 0 1px rgba(255,255,255,1.0)',
        'dark-mobile': '7px 7px 0 0 rgba(65, 37, 65, 1), 7px 7px 0 1px rgba(255,255,255,1.0)',
      },
      colors: {
        'custom-black': '#1D1D1D',
      },
      backgroundColor: {
        'custom-black': '#1D1D1D',
      }
    },
  },
  plugins: [],
}

