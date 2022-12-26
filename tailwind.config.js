/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  mode: 'jit',

  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './nuxt.config.ts',
  ],

  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'light-blue': '#64B5F6',
        'default-blue': '#43a5f4',
        'dark-blue': '#0b7ad1',
        'info-border': '#3192CF',
        'info-text': '#044868',
        'extra-light-gray': '#292929',
        'light-gray': '#212529',
        'dark-gray': '#1E1E1E',
        'gradient-blue': '#60A5FA',
        'light-green': '#53C5B4',
        'gradient-green': '#4ADE80',
        'logo-green': '#1A721F',
        'dark-logo-green': '#1d581d',
      },
      zIndex: {
        max: '99999',
      },
    },
  },

  // eslint-disable-next-line
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
