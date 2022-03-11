module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:json/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs',
    'prettier',
    /* 'plugin:vue/vue3-recommended', */
  ],

  plugins: ['json', 'prettier', 'nuxt'],

  rules: {
    'prettier/prettier': ['warn'],
    'vue/multi-word-component-names': 'off',
    'vue/no-template-shadow': 'off',
  },
}
