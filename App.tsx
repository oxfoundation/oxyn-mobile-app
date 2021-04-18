import React from 'react';

import {Provider as PaperProvider} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {theme, navigationTheme} from '@styles';
import {NavigationContainer} from '@react-navigation/native';
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
        <NavigationContainer theme={navigationTheme}>
          <MainStack />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
