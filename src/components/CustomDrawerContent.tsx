import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';

// import {CommonActions, DrawerActions} from '@react-navigation/native';

interface Props {}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* TODO: implement custom loop for drawer items */}
      {/* TODO: replace with react-native-paper drawer item */}
      {/* <DrawerItem
        label="custom"
        onPress={() => {
          props.navigation.dispatch({
            ...(true
              ? DrawerActions.closeDrawer()
              : CommonActions.navigate('AddItem')),
          });
        }}
      /> */}
    </DrawerContentScrollView>
  );
};

DrawerItem;

export default CustomDrawerContent;
