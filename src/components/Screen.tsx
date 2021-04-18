import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {theme} from '@styles';

interface Props {
  children: React.ReactNode;
  hideButton?: boolean;
}

const Screen = ({children, hideButton = false, ...props}: Props) => {
  return (
    <View style={styles.container} {...props}>
      <FAB
        visible={!hideButton}
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    zIndex: 100,
    position: 'absolute',
    margin: 16,
    right: theme.size.sm,
    bottom: theme.size.sm,
    backgroundColor: theme.colors.primary,
  },
});

export default Screen;
