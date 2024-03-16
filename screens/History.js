import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';

const HistorialScreen = () => {
  return (
    <View style={styles.container}>
      <Menu/>
      <Text>Historial</Text>
      {/* Contenido de la pantalla Historial */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HistorialScreen;
