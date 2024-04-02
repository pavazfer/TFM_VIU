import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons'; 

const LoginScreen = ({ navigation }) => {
  const [correoError, setCorreoError] = useState(false);
  const [contrasenaError, setContrasenaError] = useState(false);

  const handleLogin = (values) => {
    if (!values.correo || !values.contrasena) {
      if (!values.correo) setCorreoError(true);
      if (!values.contrasena) setContrasenaError(true);
    } else {
      console.log('Datos de inicio de sesión:', values);
      // Lógica para iniciar sesión...
      navigation.navigate('Main');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleCorreoFocus = () => {
    if (correoError) setCorreoError(false);
  };

  const handleContrasenaFocus = () => {
    if (contrasenaError) setContrasenaError(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="person" size={48} color="black" />
      </View>

      <Formik
        initialValues={{ correo: '', contrasena: '' }}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Correo electrónico:</Text>
            <TextInput
              onChangeText={handleChange('correo')}
              onBlur={() => { setCorreoError(!values.correo) }}
              onFocus={handleCorreoFocus}
              value={values.correo}
              placeholder="example@example.com"
              style={[styles.input, correoError && styles.inputError]}
            />
            {correoError && <Text style={styles.errorMessage}>Correo electrónico es obligatorio</Text>}

            <Text style={styles.label}>Contraseña:</Text>
            <TextInput
              onChangeText={handleChange('contrasena')}
              onBlur={() => { setContrasenaError(!values.contrasena) }}
              onFocus={handleContrasenaFocus}
              value={values.contrasena}
              placeholder="******"
              secureTextEntry
              style={[styles.input, contrasenaError && styles.inputError]}
            />
            {contrasenaError && <Text style={styles.errorMessage}>Contraseña es obligatoria</Text>}

            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </Pressable>
          </View>
        )}
      </Formik>

      <Pressable onPress={handleRegister} style={styles.registerButton}>
        <Text style={styles.registerText}>Ir a la página de registro</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
    color: 'red',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    marginTop: 20,
  },
  registerText: {
    color: '#007bff',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
