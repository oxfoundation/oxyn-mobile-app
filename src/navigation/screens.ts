import {
  DashboardScreen,
  ForgotPasswordScreen,
  HomeScreen,
  RegisterScreen,
  LoginScreen,
} from '@screens';
import {Colors} from 'react-native-paper';

const unprotectedScreenOptions = {
  headerShown: false,
  cardStyle: {backgroundColor: Colors.white},
};

const protectedScreenOptions = {
  cardStyle: {backgroundColor: Colors.white},
};

export const screens = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
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
  {
    name: 'DashboardScreen',
    component: DashboardScreen,
    options: {
      ...protectedScreenOptions,
      headerShown: false,
    },
    isProtected: true,
  },
  {
    name: 'DetailsScreen',
    component: DashboardScreen,
    options: {
      ...protectedScreenOptions,
    },
    isProtected: true,
    title: 'details screen',
  },
];

export const getProtectedScreens = (listOfScreens: typeof screens) => {
  return listOfScreens.filter((screen) => screen.isProtected);
};
export const getUnprotectedScreens = (listOfScreens: typeof screens) => {
  return listOfScreens.filter((screen) => !screen.isProtected);
};
