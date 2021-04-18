import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {useNavigation, DrawerActions} from '@react-navigation/native';

type Props = {
  isTransparent?: boolean;
};

const Header = ({isTransparent}: Props) => {
  // const _goBack = () => console.log('Went back');
  const navigation = useNavigation();

  const _handleMore = () => navigation.dispatch(DrawerActions.toggleDrawer);

  return (
    <Appbar.Header
      style={[styles.container, isTransparent ? styles.isTransparent : {}]}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Action icon="bell" onPress={_handleMore} size={27} />
      <Appbar.Content title="" />
      <Appbar.Action icon="align-right" onPress={_handleMore} size={27} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {},
  isTransparent: {backgroundColor: 'transparent'},
});

export default memo(Header);
