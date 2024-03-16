import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <Menu /> 
      <Text>Pantalla de Inicio</Text>
      {/* Aquí puedes agregar el contenido de tu pantalla de inicio */}
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

export default IndexScreen;
