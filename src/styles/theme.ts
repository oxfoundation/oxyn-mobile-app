import {DefaultTheme} from 'react-native-paper';
import {DefaultTheme as DefaultNavigationTheme} from '@react-navigation/native';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      secondary: string;
      facebook: string;
      twitter: string;
      google: string;
      instagram: string;
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
  primary: '#BADA55',
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
    facebook: '#3b5998',
    twitter: '#0084b4',
    google: '#DB4437',
    instagram: '#C32AA3',
  },
  // Specify custom property
  myOwnProperty: true,
};

export const navigationTheme = {
  ...DefaultNavigationTheme,
  ...commonThemeColors,
};
