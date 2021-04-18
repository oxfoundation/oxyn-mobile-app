import {
  DashboardScreen,
  ForgotPasswordScreen,
  AuthOptions,
  RegisterScreen,
  LoginScreen,
} from '@screens';
import {Colors} from 'react-native-paper';

export const unprotectedScreenOptions = {
  headerShown: false,
  cardStyle: {backgroundColor: Colors.white},
};

export const protectedScreenOptions = {
  cardStyle: {backgroundColor: Colors.white},
};

export const protectedScreens = [
  {
    name: 'DashboardScreen',
    component: DashboardScreen,
    // options: {
    //   ...protectedScreenOptions,
    //   headerShown: false,
    // },
    // isProtected: true,
  },
  {
    name: 'DetailsScreen',
    component: AuthOptions,
    // options: {
    //   ...protectedScreenOptions,
    // },
    // isProtected: true,
    title: 'details screen',
  },
];

export const unprotectedScreens = [
  {
    name: 'AuthOptions',
    component: AuthOptions,
    options: unprotectedScreenOptions,
    isProtected: false,
  },
  {
    name: 'RegisterScreen',
    component: RegisterScreen,
    options: unprotectedScreenOptions,
    isProtected: false,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
    options: unprotectedScreenOptions,
    isProtected: false,
  },
  {
    name: 'ForgotPasswordScreen',
    component: ForgotPasswordScreen,
    options: unprotectedScreenOptions,
    isProtected: false,
  },
];
