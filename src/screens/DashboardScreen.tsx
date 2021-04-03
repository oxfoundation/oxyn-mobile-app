import React, {memo} from 'react';
import {Background, Logo, Header, Paragraph, Button} from '@components';
import {useAppDispatch} from '@hooks';
import {auth} from '@store';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

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
        onPress={() => navigation.navigate('DetailsScreen')}
        title="Details"
      />
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
