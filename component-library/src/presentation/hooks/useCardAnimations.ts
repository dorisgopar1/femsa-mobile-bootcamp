import { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';

const useCardAnimations = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: translateX }], { useNativeDriver: false }),
    onPanResponderRelease: (_, { dx }) => {
      const toValue = dx > 120 ? 500 : 0;
      Animated.spring(translateX, { toValue, useNativeDriver: true }).start();
    },
  });

  const animatedStyles = {
    transform: [{ translateX }],
  };

  return { panHandlers: panResponder.panHandlers, animatedStyles };
};

export default useCardAnimations;
