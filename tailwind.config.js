module.exports = {
  important: true,
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
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
    },
  },
  plugins: [],
}
