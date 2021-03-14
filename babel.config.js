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
          '@navigation': '/navigation',
          '@services': '/services',
          '@styles': '/styles',
          '@store': '/store',
          '@utilities': '/utilities',
          '@views': '/views',
          '@hooks': '/hooks',
        },
      },
    ],
  ],
};
