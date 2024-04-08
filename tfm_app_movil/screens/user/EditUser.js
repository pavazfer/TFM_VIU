import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';

const EditUserScreen = ({ route }) => {
  const { user } = route.params;

  const handleSaveChanges = () => {
    // Lógica para guardar los cambios del perfil del usuario...
  };

  const handleChangePassword = () => {
    // Lógica para cambiar la contraseña...
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Sección para editar el perfil del usuario */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Editar Perfil</Text>
        <TextInput
          placeholder="Nombre de usuario"
          style={styles.input}
          onChangeText={(text) => {
            // Lógica para actualizar el nombre de usuario
          }}
          value={user.name}
        />
        <TextInput
          placeholder="Correo electrónico"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={(text) => {
            // Lógica para actualizar el correo electrónico
          }}
          value={user.email}
        />
        <Pressable onPress={handleSaveChanges} style={styles.button}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        </Pressable>
      </View>

      {/* Sección para cambiar la contraseña */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cambiar Contraseña</Text>
        <TextInput
          placeholder="Contraseña actual"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => {
            // Lógica para capturar la contraseña actual
          }}
        />
        <TextInput
          placeholder="Nueva contraseña"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => {
            // Lógica para capturar la nueva contraseña
          }}
        />
        <Pressable onPress={handleChangePassword} style={styles.button}>
          <Text style={styles.buttonText}>Cambiar Contraseña</Text>
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

export default EditUserScreen;
