import React, {useState, useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {auth} from '@store';
import {useSelector} from 'react-redux';
import {SplashScreen} from '@screens';
import {screens, getProtectedScreens, getUnprotectedScreens} from './screens';
import {CustomNavigationBar} from '@components';

interface MainStackProps {}

const Stack = createStackNavigator();

export const MainStack: React.FunctionComponent<MainStackProps> = () => {
  const isAuth = useSelector(auth.get.isAuthenticated);
  const [isLoading] = useState(false);

  const protectedScreens = useMemo(() => getProtectedScreens(screens), []);
  const unprotectedScreens = useMemo(() => getUnprotectedScreens(screens), []);

  //TODO: needs to be replaced with loader
  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}>
      {[...(isAuth ? protectedScreens : unprotectedScreens)].map(
        (screen, index) => (
          <Stack.Screen key={`stack-screen-${index}`} {...screen} />
        ),
      )}
    </Stack.Navigator>
  );
};
