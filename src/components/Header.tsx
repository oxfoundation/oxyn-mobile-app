import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

type Props = {
  isTransparent?: boolean;
};

const Header = ({isTransparent}: Props) => {
  // const _goBack = () => console.log('Went back');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header
      style={[styles.container, isTransparent ? styles.isTransparent : {}]}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Action icon="bell" onPress={_handleMore} />
      <Appbar.Content title="" />
      <Appbar.Action icon="align-right" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {},
  isTransparent: {backgroundColor: 'transparent'},
});

export default memo(Header);
