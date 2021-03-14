module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@context': './src/context',
          '@components': './src/components',
          '@graphql': './src/graphql',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@styles': './src/styles',
          '@store': './src/store',
          '@utilities': './src/utilities',
          '@views': './src/views',
          '@hooks': './src/hooks',
        },
      },
    },
  },
};
