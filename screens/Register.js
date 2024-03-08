// RegistroScreen.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [repetirEmail, setRepetirEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repetirContrasena, setRepetirContrasena] = useState('');

  const handleRegister = () => {
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Repetir Email:', repetirEmail);
    console.log('Contraseña:', contrasena);
    console.log('Repetir Contraseña:', repetirContrasena);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Nombre"
        label="Nombre"
        onChangeText={(text) => setNombre(text)}
        value={nombre}
      />
      <Input
        placeholder="example@exaple.com"
        label="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        placeholder="example@exaple.com"
        label="Repetir Email"
        onChangeText={(text) => setRepetirEmail(text)}
        value={repetirEmail}
      />
      <Input
        placeholder="*******"
        label="Contraseña"
        secureTextEntry
        onChangeText={(text) => setContrasena(text)}
        value={contrasena}
      />
      <Input
        placeholder="*******"
        label="Repetir Contraseña"
        secureTextEntry
        onChangeText={(text) => setRepetirContrasena(text)}
        value={repetirContrasena}
      />

      <Button title="Registrarse" onPress={handleRegister} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default RegisterScreen;
