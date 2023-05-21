import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Tips = () => (
  <>
    <Text style={styles.tipsTitle}>Tips</Text>
    <Text style={styles.textPoppins}>
      {`\u2022 Balance saldo didapatkan dari informasi gaji dan pinjaman`}
    </Text>
    <Text style={styles.textPoppins}>
      {`\u2022 Tentukan product pinjaman dengan bunga yang menarik`}
    </Text>
  </>
);

const styles = StyleSheet.create({
  textPoppins: {
    fontFamily: 'Poppins'
  },
  tipsTitle: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
    color: 'dimgray'
  }
});

export default Tips;
