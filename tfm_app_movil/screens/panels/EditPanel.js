import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';

const EditPanelScreen = () => {
  const handleEditPanel = () => {
    // Lógica para editar el panel...
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        
        <TextInput
          placeholder="Nombre del panel"
          style={styles.input}
          onChangeText={(text) => {
            // Lógica para actualizar el nombre del panel
          }}
        />
        <TextInput
          placeholder="Diferencia en días"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => {
            // Lógica para actualizar la diferencia en días
          }}
        />
        <Pressable onPress={handleEditPanel} style={styles.button}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default EditPanelScreen;
