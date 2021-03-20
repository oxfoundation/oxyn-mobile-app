import React, {useState} from 'react';
import {} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';

import {theme} from '@styles';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, SplashScreen} from '@screens';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading] = useState(false);
  const [userToken] = useState();

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {userToken == null ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
            </>
          ) : (
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
