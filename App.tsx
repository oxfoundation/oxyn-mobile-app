import React from 'react';

import {Provider as PaperProvider} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {ApolloClient, InMemoryCache, gql, ApolloProvider} from '@apollo/client';
import {theme, navigationTheme} from '@styles';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from '@navigation';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

const App = () => {
  client
    .query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `,
    })
    .then((result) => console.log(result));

  return (
    <ApolloProvider client={client}>
      <PaperProvider
        theme={theme}
        settings={{
          icon: (props) => <Feather {...props} />,
        }}>
        <NavigationContainer theme={navigationTheme}>
          <MainStack />
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
};

export default App;
