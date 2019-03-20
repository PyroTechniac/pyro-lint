module.exports = {
    extends: [
        './.eslintrc.json',
        'plugin:vue/recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    env: {
        es6: true,
        browser: true,
        node: true
    }
};