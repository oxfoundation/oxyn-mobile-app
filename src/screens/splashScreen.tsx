import React, {FunctionComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface SplashScreenProps {}

const SplashScreen: FunctionComponent<SplashScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});
