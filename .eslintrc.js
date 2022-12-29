module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  extends: [
    'plugin:json/recommended',
    // 'plugin:vuetify/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
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
    'vue/v-slot-style': [
      'warn',
      {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand',
      },
    ],
  },
}
