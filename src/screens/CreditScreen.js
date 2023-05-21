import React from 'react';
import { View, StyleSheet } from 'react-native';
import Balance from '../components/Balance';
import Card from '../components/Card';
import Product from '../components/Product';
import Tips from '../components/Tips';

const CreditScreen = () => (
  <View style={styles.container}>
    <Card title="Kemampuan Angsur" description="Rp 30,000,000" />
    <Balance />      
  
    <Tips />

    <Product title="RENOVASI Kary" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
});

export default CreditScreen;
