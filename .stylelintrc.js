module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
    'stylelint-prettier/recommended',
  ],

  plugins: ['stylelint-prettier'],

  rules: {
    'prettier/prettier': true,
  },
}
