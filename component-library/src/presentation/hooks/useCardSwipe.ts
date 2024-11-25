import { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';

export const useCardSwipe = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  const backgroundColor = translateX.interpolate({
    inputRange: [-150, 0, 150],
    outputRange: ['#A020F0', '#FFFFFF', '#FFC0CB'],
    extrapolate: 'clamp',
  });

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, { dx: translateX }], 
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (_, { dx }) => {
      const toValue = dx > 120 ? 500 : dx < -120 ? -500 : 0;
      Animated.spring(translateX, { toValue, useNativeDriver: true }).start();
    },
  });

  const animatedStyles = {
    transform: [{ translateX }],
    backgroundColor, 
  };

  return { panHandlers: panResponder.panHandlers, animatedStyles };
};
