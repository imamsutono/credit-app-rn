import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Product from '../components/Product';
import Tips from '../components/Tips';

const HomeScreen = () => {
  

  return (
    <View style={styles.container}>
      <Card title="Kemampuan Angsur" description="Rp 30,000,000" />
      <Text style={styles.balance}>Apa itu saldo?</Text>
    
      <Tips />

      <Product title="RENOVASI Kary" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  balance: {
    textAlign: 'right',
    color: 'green',
    marginTop: 10,
    fontFamily: 'Poppins'
  },
});

export default HomeScreen;
