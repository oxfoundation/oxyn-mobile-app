import React, {memo} from 'react';
import {Appbar} from 'react-native-paper';

type Props = {
  title: string;
};

const Header = ({title}: Props) => {
  // const _goBack = () => console.log('Went back');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Action icon="bell" onPress={_handleMore} />
      <Appbar.Content title={title} subtitle="Current Balance" />
      <Appbar.Action icon="align-right" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default memo(Header);
