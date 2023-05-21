import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServiceScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Service Screen!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontFamily: 'Poppins',
    fontSize: 18
  }
});

export default ServiceScreen;
