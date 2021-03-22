import {DefaultTheme} from 'react-native-paper';
import {DefaultTheme as DefaultNavigationTheme} from '@react-navigation/native';

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

// primary: '#84DD72',
// accent: '#212529',
// secondary: '#BADA55',

const commonThemeColors = {
  primary: '#600EE6',
  background: 'rgb(242, 242, 242)',
  card: 'rgb(255, 255, 255)',
  text: 'rgb(28, 28, 30)',
  border: 'rgb(216, 216, 216)',
  notification: '#f13a59',
};

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    ...commonThemeColors,
    secondary: '#414757',
    error: '#f13a59',
  },
  // Specify custom property
  myOwnProperty: true,
};

export const navigationTheme = {
  ...DefaultNavigationTheme,
  ...commonThemeColors,
};
