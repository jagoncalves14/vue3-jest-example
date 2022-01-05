module.exports = {
  extends: ['@pixelmatters/eslint-config-pixelmatters'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ],
  },
}
