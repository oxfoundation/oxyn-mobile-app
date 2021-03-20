module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ["import"],
  rules: {
    // turn on errors for missing imports
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
