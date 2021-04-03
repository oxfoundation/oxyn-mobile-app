import React from 'react';

import {Provider as PaperProvider} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '@styles';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {store} from './src/store/configuration';
import {Provider} from 'react-redux';
import {MainStack} from '@navigation';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider
        theme={theme}
        settings={{
          icon: (props) => <Feather {...props} />,
        }}>
        <NavigationContainer theme={NavigationDefaultTheme}>
          <MainStack />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
