import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import CardComponent from '../components/CardComponent';
import { useCardSwipe } from '../hooks/useCardSwipe';

const SwipableCardScreen = () => {
  const { panHandlers, animatedStyles } = useCardSwipe();

  return (
    <Animated.View {...panHandlers} style={[styles.card, animatedStyles]}>
      <CardComponent />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SwipableCardScreen;
