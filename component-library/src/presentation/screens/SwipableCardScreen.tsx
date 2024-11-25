import React from 'react';
import CardComponent from '../components/CardComponent';
import useCardAnimations from '../hooks/useCardAnimations';

const SwipableCardScreen = () => {
  const { panHandlers, animatedStyles } = useCardAnimations();

  return (
    <Animated.View {...panHandlers} style={animatedStyles}>
      <CardComponent />
    </Animated.View>
  );
};

export default SwipableCardScreen;
