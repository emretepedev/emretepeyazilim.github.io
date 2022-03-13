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
    'plugin:vue/vue3-recommended',
    'prettier',
  ],

  plugins: ['json', 'prettier', 'nuxt'],

  rules: {
    'prettier/prettier': 'warn',
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'vue/attributes-order': [
      'warn',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true,
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-template-shadow': 'off',
  },
}
