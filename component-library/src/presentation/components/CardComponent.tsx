import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardComponent = () => (
  <View style={styles.card}>
    <Text>Swipe me!</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardComponent;
