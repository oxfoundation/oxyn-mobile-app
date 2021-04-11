import React from 'react';
import {View, ViewStyle} from 'react-native';
import {theme} from '@styles';
import {randomProperty} from '@utilities';

const colors = {
  red900: '#b71c1c',
  pink900: '#880e4f',
  purple900: '#4a148c',
  deepPurple900: '#311b92',
  indigo900: '#1a237e',
  blue900: '#0d47a1',
  cyan900: '#006064',
  green900: '#1b5e20',
  lime900: '#827717',
  yellow900: '#f57f17',
  deepOrange900: '#bf360c',
  black: '#000000',
};

export enum Size {
  xs,
  sm,
  md,
  lg,
  xl,
}

export interface Props {
  debug?: boolean;

  reset?: boolean;
  resetLeft?: boolean;
  resetRight?: boolean;
  resetTop?: boolean;
  resetBottom?: boolean;
  resetVertical?: boolean;
  resetHorizontal?: boolean;

  horizontalSpacingType?: Size;
  verticalSpacingType?: Size;
  topSpacingType?: Size;
  bottomSpacingType?: Size;
  leftSpacingType?: Size;
  rightSpacingType?: Size;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Section = ({
  debug,

  reset,
  resetLeft,
  resetRight,
  resetTop,
  resetBottom,
  resetVertical,
  resetHorizontal,

  horizontalSpacingType,
  verticalSpacingType,
  topSpacingType,
  bottomSpacingType,
  leftSpacingType,
  rightSpacingType,
  children,
  style,
  ...props
}: Props) => {
  const {size} = theme;

  const getSpacingSize = (sizeType: Size | undefined) => {
    switch (sizeType) {
      case Size.xs:
        return size.xs;
      case Size.lg:
        return size.lg;
      case Size.md:
        return size.md;
      case Size.sm:
        return size.sm;
      case Size.xs:
        return size.xs;
      default:
        return size.sm;
    }
  };

  let paddingLeft = leftSpacingType
    ? getSpacingSize(leftSpacingType || Size.sm)
    : getSpacingSize(horizontalSpacingType || Size.sm);
  let paddingRight = rightSpacingType
    ? getSpacingSize(rightSpacingType || Size.sm)
    : getSpacingSize(horizontalSpacingType) || Size.sm;

  let paddingTop = topSpacingType
    ? getSpacingSize(topSpacingType || Size.md)
    : getSpacingSize(verticalSpacingType || Size.md);
  let paddingBottom = bottomSpacingType
    ? getSpacingSize(bottomSpacingType || Size.md)
    : getSpacingSize(verticalSpacingType || Size.md);

  // reset top or bottom
  if (resetTop) {
    paddingTop = 0;
  }

  if (resetBottom) {
    paddingBottom = 0;
  }

  if (resetVertical || reset) {
    paddingTop = 0;
    paddingBottom = 0;
  }

  if (resetLeft) {
    paddingLeft = 0;
  }

  if (resetRight) {
    paddingRight = 0;
  }

  if (resetHorizontal || reset) {
    paddingLeft = 0;
    paddingRight = 0;
  }

  const debugStyle = debug
    ? {
        borderColor: randomProperty(colors),
        borderWidth: 2,
      }
    : null;

  const styles = {
    container: {
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      ...debugStyle,
    },
  };

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

export default Section;
