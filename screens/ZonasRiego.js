import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';

const ZonasRiegoScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <Text>Zonas de Riego</Text>
      {/* Contenido de la pantalla ZonasRiego */}
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

export default ZonasRiegoScreen;
