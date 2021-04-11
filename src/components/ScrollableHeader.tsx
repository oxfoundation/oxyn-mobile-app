import React, {useRef} from 'react';
import {Animated, StyleSheet, ViewStyle, View} from 'react-native';
import {theme} from '@styles';
import {Header} from '@components';
import LinearGradient from 'react-native-linear-gradient';

const HEADER_MAX_HEIGHT = 240; // max header height
const HEADER_MIN_HEIGHT = 84; // min header height
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT; // header scrolling value

interface Props {
  containerStyle?: ViewStyle;
  headerContent: React.ReactNode;
  headerContentContainerStyle?: ViewStyle;
  children: React.ReactNode;
}

const ScrollableHeader = ({
  containerStyle,
  children,
  headerContent,
  headerContentContainerStyle,
}: Props) => {
  const scrollY = useRef(new Animated.Value(0)).current; // our animated value

  const fadeOut = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 1.5, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const fadeIn = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 1.7, HEADER_SCROLL_DISTANCE],
    outputRange: ['transparent', 'transparent', theme.colors.primary],
    extrapolate: 'clamp',
  });

  const backgroundTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });
  const contentTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE * 1.3],
    extrapolate: 'clamp',
  });

  return (
    <View style={containerStyle}>
      {/* background */}
      <Animated.View
        style={[
          styles.backgroundContainer,
          {opacity: fadeOut},
          {transform: [{translateY: backgroundTranslateY}]},
        ]}>
        <LinearGradient
          start={{x: 1, y: 1}}
          end={{x: 0, y: 0}}
          colors={[
            theme.colors.gradientStart,
            theme.colors.gradientMiddle,
            theme.colors.gradientEnd,
          ]}
          style={styles.background}
        />
      </Animated.View>

      {/* header content */}
      <Animated.View
        style={[
          styles.headerContainer,
          headerContentContainerStyle,
          {transform: [{translateY: contentTranslateY}]},
        ]}>
        {headerContent}
      </Animated.View>

      {/* minimized content */}
      <Animated.View
        style={[styles.minimizedHeader, {backgroundColor: fadeIn}]}>
        <Header isTransparent />
      </Animated.View>

      {/* paddingTop: HEADER_MAX_HEIGHT - 32 */}
      {/* content */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: HEADER_MAX_HEIGHT,
        }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        {children}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    height: HEADER_MAX_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  background: {
    flex: 1,
  },
  headerContainer: {
    height: HEADER_MAX_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    zIndex: 1,
  },
  minimizedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
  },
});

export default ScrollableHeader;
