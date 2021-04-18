import React from 'react';
import {Button, Logo, Paragraph, Background} from '@components';
import {useNavigation} from '@react-navigation/native';

interface AuthOptionsScreenProps {}

const AuthOptionsScreen: React.FunctionComponent<AuthOptionsScreenProps> = () => {
  const navigation = useNavigation();
  return (
    <>
      <Background>
        <Logo />

        <Paragraph>
          The easiest way to start with your amazing application.
        </Paragraph>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}
          title="Facebook"
          color="facebook"
        />
        <Button
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}
          title="Twitter"
          color="twitter"
        />
        <Button
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}
          title="Login"
        />

        <Button
          mode="outlined"
          onPress={() => navigation.navigate('RegisterScreen')}
          title="Sign Up"
        />
      </Background>
    </>
  );
};

export default AuthOptionsScreen;
