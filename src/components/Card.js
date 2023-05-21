import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins'
  },
});

export default Card;
