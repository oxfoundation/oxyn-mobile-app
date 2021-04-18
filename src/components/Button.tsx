import React, {memo, ComponentProps} from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton, Colors} from 'react-native-paper';
import {theme} from '@styles';

type PaperButtonType = ComponentProps<typeof PaperButton>;
type Props = Omit<PaperButtonType, 'children'> & {
  title: string;
  color?: string;
};

const Button = ({mode, style, title, color, ...props}: Props) => {
  // define theme color
  let mainThemeColor;

  switch (color) {
    case 'facebook':
      mainThemeColor = theme.colors?.facebook;
      break;
    case 'twitter':
      mainThemeColor = theme.colors?.twitter;
      break;
    case 'google':
      mainThemeColor = theme.colors?.google;
      break;
    case 'instagram':
      mainThemeColor = theme.colors?.instagram;
      break;

    default:
      mainThemeColor = theme.colors?.primary;
      break;
  }

  let buttonStyle = {};
  if (mode === 'outlined') {
    buttonStyle = {
      backgroundColor: Colors.white,
    };
  }

  return (
    <PaperButton
      color={mainThemeColor}
      style={[styles.button, buttonStyle, style]}
      labelStyle={styles.text}
      mode={mode}
      {...props}>
      {title}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

export default memo(Button);
