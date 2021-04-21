module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.ios.ts', '.android.ts', '.tsx'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@styles': './src/styles',
          '@gql': './src/gql',
          '@utilities': './src/utilities',
          '@sections': './src/sections',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
