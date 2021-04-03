import React from 'react';
import {Appbar, Badge} from 'react-native-paper';

const CustomNavigationBar = (props) => {
  const {navigation, progress, route, options} = props;

  let leftComponent;

  if (progress?.previous) {
    leftComponent = <Appbar.BackAction onPress={navigation.goBack} />;
  } else if (route.name === 'DashboardScreen') {
    leftComponent = <Appbar.Action icon="bell" onPress={() => {}} />;
  } else {
    leftComponent = null;
  }

  return (
    <Appbar.Header>
      <Badge visible={true} size={10} />
      {leftComponent}
      <Appbar.Content title={options.title} />
      <Appbar.Action icon="align-right" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
