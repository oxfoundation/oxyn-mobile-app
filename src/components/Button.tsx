import React, {memo, ComponentProps} from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {theme} from '@styles';

type PaperButtonType = ComponentProps<typeof PaperButton>;
type Props = Omit<PaperButtonType, 'children'> & {title: string};

const Button = ({mode, style, title, ...props}: Props) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && {backgroundColor: theme.colors.surface},
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}>
    {title}
  </PaperButton>
);

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
