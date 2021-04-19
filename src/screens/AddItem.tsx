import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const AddItem = (props: Props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>Add New Item</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ff0'},
});

export default AddItem;
