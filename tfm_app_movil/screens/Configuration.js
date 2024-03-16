import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';

const ConfiguracionScreen = () => {
  return (
    <View style={styles.container}>
      <Menu/>
      <Text>Configuración</Text>
      {/* Contenido de la pantalla Configuración */}
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

export default ConfiguracionScreen;



