import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {theme} from '@styles';

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen!</Text>
      <Button mode="contained" onPress={() => console.log('some click')}>
        some
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  scrollView: {
    backgroundColor: theme.colors.myOwnColor,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
