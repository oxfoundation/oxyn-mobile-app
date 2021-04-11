import {DefaultTheme} from 'react-native-paper';
import {DefaultTheme as DefaultNavigationTheme} from '@react-navigation/native';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      secondary: string;
      gradientStart: string;
      gradientMiddle: string;
      gradientEnd: string;
      facebook: string;
      twitter: string;
      google: string;
      instagram: string;
    }
    interface Theme {
      myOwnProperty: boolean;
      size: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    }
  }
}
// #54FFF3
// #A365FF
// #FF2968

const commonThemeColors = {
  primary: '#A365FF',
  gradientStart: '#54FFF3',
  gradientMiddle: '#A365FF',
  gradientEnd: '#FF2968',

  background: 'rgb(242, 242, 242)',
  card: 'rgb(255, 255, 255)',
  text: 'rgb(28, 28, 30)',
  border: 'rgb(216, 216, 216)',
  notification: '#f13a59',
};

export const theme = {
  ...DefaultTheme,
  roundness: 20,
  colors: {
    ...DefaultTheme.colors,
    ...commonThemeColors,
    secondary: '#212529',
    error: '#f13a59',
    facebook: '#3b5998',
    twitter: '#0084b4',
    google: '#DB4437',
    instagram: '#C32AA3',
  },
  // Specify custom property
  myOwnProperty: true,
  size: {
    xs: 5,
    sm: 10,
    md: 25,
    lg: 40,
    xl: 60,
  },
};

export const navigationTheme = {
  ...DefaultNavigationTheme,
  ...commonThemeColors,
};
