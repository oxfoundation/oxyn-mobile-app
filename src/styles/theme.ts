import {DefaultTheme} from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      myOwnColor: string;
    }

    interface Theme {
      myOwnProperty: boolean;
    }
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#84DD72',
    accent: '#212529',
    myOwnColor: '#BADA55',
  },
  // Specify custom property
  myOwnProperty: true,
};

export default theme;
