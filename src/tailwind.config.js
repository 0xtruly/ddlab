const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        lighter: '#f0f8ff',
        light: '#85d7ff',
        DEFAULT: '#04a9f4',
        dark: '#009eeb',
        navy: '#003561',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      green: {
        dark: '#40966a',
        light: '#ecfdf5',
      },
      red: {
        dark: '#f04744',
        light: '#fef2f2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
