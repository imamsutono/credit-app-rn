import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Product = () => {
  const products = [
    {
      id: 1,
      title: 'RENOVASI Kary'
    },
    {
      id: 2,
      title: 'MULTIGUNA Kary'
    },
    {
      id: 3,
      title: 'KAI PRIORITY NEW'
    },
    {
      id: 4,
      title: 'KAI PRIORITY KARY NEW'
    },
    {
      id: 5,
      title: 'MULTIGUNA'
    },
    {
      id: 6,
      title: 'KAI PRIORITY 2X'
    },
  ];
  const [selectedId, setSelected] = useState(0);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.cardContainer, selectedId === item.id ? styles.selected : null]}
      onPress={() => setSelected(item.id)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.productTitle}>KAS - Product for your Needs</Text>
      <FlatList
        data={products}
        keyExtractor={({ title }) => title}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 18,
    textAlign: 'center',
  },
  productTitle: {
    fontSize: 18,
    marginVertical: 20,
    fontFamily: 'Poppins-Bold',
    color: 'dimgray'
  },
  selected: {
    borderColor: 'green',
    borderWidth: 1,
    backgroundColor: 'ghostwhite'
  }
});

export default Product;
