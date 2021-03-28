import {
  DashboardScreen,
  ForgotPasswordScreen,
  HomeScreen,
  RegisterScreen,
  LoginScreen,
} from '@screens';
import {Colors} from 'react-native-paper';

const authenticatedScreenOptions = {
  headerShown: false,
  cardStyle: {backgroundColor: Colors.white},
};

export const screens = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    options: authenticatedScreenOptions,
    isProtected: false,
  },
  {
    name: 'RegisterScreen',
    component: RegisterScreen,
    options: authenticatedScreenOptions,
    isProtected: false,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
    options: authenticatedScreenOptions,
    isProtected: false,
  },
  {
    name: 'ForgotPasswordScreen',
    component: ForgotPasswordScreen,
    options: authenticatedScreenOptions,
    isProtected: false,
  },
  {
    name: 'DashboardScreen',
    component: DashboardScreen,
    options: {},
    isProtected: true,
  },
];

export const getProtectedScreens = (listOfScreens: typeof screens) => {
  return listOfScreens.filter((screen) => screen.isProtected);
};
export const getUnprotectedScreens = (listOfScreens: typeof screens) => {
  return listOfScreens.filter((screen) => !screen.isProtected);
};
