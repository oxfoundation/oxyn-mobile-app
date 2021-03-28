import React, {memo} from 'react';
import {Background, Logo, Header, Paragraph, Button} from '@components';
import {useNavigation} from '@react-navigation/core';
import {useAppDispatch} from '@hooks';
import {auth} from '@store';

const Dashboard = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => {
          dispatch(auth.action.logout());
        }}
        title="Logout"
      />
    </Background>
  );
};

export default memo(Dashboard);
