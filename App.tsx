import React, {useState} from 'react';

import {Provider as PaperProvider, Colors} from 'react-native-paper';

import {theme} from '@styles';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  DashboardScreen,
  ForgotPasswordScreen,
  HomeScreen,
  RegisterScreen,
  SplashScreen,
  LoginScreen,
} from '@screens';

// combine paper and react navigation themes

const Stack = createStackNavigator();

const App = () => {
  const [isLoading] = useState(false);
  const [isLoggedIn] = useState(false);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  const authenticatedScreenOptions = {
    headerShown: false,
    cardStyle: {backgroundColor: Colors.white},
  };

  const authenticationScreens = [
    {
      name: 'HomeScreen',
      component: HomeScreen,
      options: authenticatedScreenOptions,
    },
    {
      name: 'RegisterScreen',
      component: RegisterScreen,
      options: authenticatedScreenOptions,
    },
    {
      name: 'LoginScreen',
      component: LoginScreen,
      options: authenticatedScreenOptions,
    },
    {
      name: 'ForgotPasswordScreen',
      component: ForgotPasswordScreen,
      options: authenticatedScreenOptions,
    },
  ];

  const protectedScreens = [
    {
      name: 'DashboardScreen',
      component: DashboardScreen,
      options: {},
    },
  ];

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={NavigationDefaultTheme}>
        <Stack.Navigator>
          {[...(isLoggedIn ? protectedScreens : authenticationScreens)].map(
            (screen) => (
              <Stack.Screen
                name={screen.name}
                component={screen.component}
                options={screen.options}
              />
            ),
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
