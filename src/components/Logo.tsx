import React, {memo} from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = () => (
  <Image source={require('../assets/oxyn-logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 153,
    height: 153,
    marginBottom: 12,
  },
});

export default memo(Logo);
