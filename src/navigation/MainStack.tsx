import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '@screens';
import {CustomDrawerContent} from '@components';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {protectedScreens, unprotectedScreens} from './screens';

const Drawer = createDrawerNavigator();

interface MainStackProps {}

const Stack = createStackNavigator();

export const MainStack: React.FunctionComponent<MainStackProps> = () => {
  const isAuth = true; //TODO: replace with apollo
  const [isLoading] = useState(false);

  //TODO: needs to be replaced with loader
  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  if (isAuth) {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerPosition: 'right',
          headerShown: false,
          swipeEnabled: true,
        }}
        drawerContent={(props: DrawerContentComponentProps) => (
          <CustomDrawerContent {...props} />
        )}>
        {protectedScreens.map((screens, index) => (
          <Drawer.Screen
            name={screens.name}
            component={screens.component}
            options={{
              drawerLabel: screens.title,
            }}
            key={`drawer-screen-${index}`}
          />
        ))}
      </Drawer.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        {unprotectedScreens.map((screen, index) => (
          <Stack.Screen key={`stack-screen-${index}`} {...screen} />
        ))}
      </Stack.Navigator>
    );
  }
};
