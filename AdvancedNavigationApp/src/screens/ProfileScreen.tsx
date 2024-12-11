import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Profile </Text>
      <Text style={styles.text}>This is your profile screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9f7f1',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ProfileScreen;
