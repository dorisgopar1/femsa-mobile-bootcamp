import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const ReanimatedAdapter = () => {
  const fadeIn = useSharedValue(0);

  const startAnimation = () => {
    fadeIn.value = withTiming(1, { duration: 1000 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeIn.value,
  }));

  return { animatedStyle, startAnimation };
};

export default ReanimatedAdapter;
