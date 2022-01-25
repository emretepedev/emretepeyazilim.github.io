module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
    plugins: [],
    // add your custom rules here
    rules: {
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['default'],
            },
        ],
    },
}

/* 
dev dependencies
    "@babel/eslint-parser": "^7.16.3",
    "@nuxtjs/eslint-config": "^8.0.0",
    "@nuxtjs/eslint-module": "^3.0.2",
    "eslint": "^8.4.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-nuxt": "^3.1.0",
    "eslint-plugin-vue": "^8.2.0",
    "prettier": "^2.5.1"
*/
