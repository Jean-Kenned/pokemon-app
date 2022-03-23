module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint','jest','detox'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'prettier/prettier': 0,
    'react-native/no-inline-styles': 'off',
  },
  env: {
    'jest/globals': true,
    'detox/detox': true,
  },
};
