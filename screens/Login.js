import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    console.log('Correo:', correo);
    console.log('Contraseña:', contrasena);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="example@example.com"
        label="Correo electrónico"
        onChangeText={(text) => setCorreo(text)}
        value={correo}
      />
      <Input
        placeholder="******"
        label="Contraseña"
        secureTextEntry
        onChangeText={(text) => setContrasena(text)}
        value={contrasena}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />

      <Button
        title="Ir a la página de registro"
        type="clear"
        onPress={() => navigation.navigate('Register')}
      />
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

export default LoginScreen;
