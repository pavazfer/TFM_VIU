import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons'; 

const RegisterScreen = ({ navigation }) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [repeatEmailError, setRepeatEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [repeatPasswordError, setRepeatPasswordError] = useState(false);

  const handleRegister = (values) => {
    if (!values.name || !values.email || !values.repeatEmail || !values.password || !values.repeatPassword) {
      if (!values.name) setNameError(true);
      if (!values.email) setEmailError(true);
      if (!values.repeatEmail) setRepeatEmailError(true);
      if (!values.password) setPasswordError(true);
      if (!values.repeatPassword) setRepeatPasswordError(true);
    } else {
      console.log('Datos de registro:', values);
      // Lógica para registrar al usuario...
    }
  };

  const handleNameFocus = () => {
    if (nameError) setNameError(false);
  };

  const handleEmailFocus = () => {
    if (emailError) setEmailError(false);
  };

  const handleRepeatEmailFocus = () => {
    if (repeatEmailError) setRepeatEmailError(false);
  };

  const handlePasswordFocus = () => {
    if (passwordError) setPasswordError(false);
  };

  const handleRepeatPasswordFocus = () => {
    if (repeatPasswordError) setRepeatPasswordError(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name="person" size={48} color="black" />
        </View>

        <Formik
          initialValues={{ name: '', email: '', repeatEmail: '', password: '', repeatPassword: '' }}
          onSubmit={handleRegister}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formContainer}>
              <Text style={styles.label}>Nombre:</Text>
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={() => { setNameError(!values.name) }}
                onFocus={handleNameFocus}
                value={values.name}
                placeholder="Nombre"
                style={[styles.input, nameError && styles.inputError]}
              />
              {nameError && <Text style={styles.errorMessage}>El nombre es obligatorio</Text>}

              <Text style={styles.label}>Correo electrónico:</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={() => { setEmailError(!values.email) }}
                onFocus={handleEmailFocus}
                value={values.email}
                placeholder="example@example.com"
                style={[styles.input, emailError && styles.inputError]}
              />
              {emailError && <Text style={styles.errorMessage}>El correo electrónico es obligatorio</Text>}

              <Text style={styles.label}>Repetir correo electrónico:</Text>
              <TextInput
                onChangeText={handleChange('repeatEmail')}
                onBlur={() => { setRepeatEmailError(!values.repeatEmail) }}
                onFocus={handleRepeatEmailFocus}
                value={values.repeatEmail}
                placeholder="example@example.com"
                style={[styles.input, repeatEmailError && styles.inputError]}
              />
              {repeatEmailError && <Text style={styles.errorMessage}>Repetir correo electrónico es obligatorio</Text>}

              <Text style={styles.label}>Contraseña:</Text>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={() => { setPasswordError(!values.password) }}
                onFocus={handlePasswordFocus}
                value={values.password}
                placeholder="******"
                secureTextEntry
                style={[styles.input, passwordError && styles.inputError]}
              />
              {passwordError && <Text style={styles.errorMessage}>La contraseña es obligatoria</Text>}

              <Text style={styles.label}>Repetir contraseña:</Text>
              <TextInput
                onChangeText={handleChange('repeatPassword')}
                onBlur={() => { setRepeatPasswordError(!values.repeatPassword) }}
                onFocus={handleRepeatPasswordFocus}
                value={values.repeatPassword}
                placeholder="******"
                secureTextEntry
                style={[styles.input, repeatPasswordError && styles.inputError]}
              />
              {repeatPasswordError && <Text style={styles.errorMessage}>Repetir contraseña es obligatoria</Text>}

              <Pressable onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Registrarse</Text>
              </Pressable>
            </View>
          )}
        </Formik>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
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
});

export default RegisterScreen;
