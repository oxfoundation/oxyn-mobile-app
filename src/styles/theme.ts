import {DefaultTheme} from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      secondary: string;
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
    // primary: '#84DD72',
    // accent: '#212529',
    // secondary: '#BADA55',
    primary: '#600EE6',
    secondary: '#414757',
    error: '#f13a59',
  },
  // Specify custom property
  myOwnProperty: true,
};

export default theme;
