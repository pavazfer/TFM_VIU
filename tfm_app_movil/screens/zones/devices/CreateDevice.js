import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons'; 

export default function CreateDevice({ navigation }) {
  const initialValues = {
    name: '',
    dataId: '',
    devId: '',
  };

  const createNewDevice = (newDevice) => {
    // Lógica para crear el nuevo dispositivo...
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        <View style={styles.iconContainer}>
          <Ionicons name="phone-portrait-outline" size={48} color="#1E90FF"/>
        </View>

        <Formik initialValues={initialValues} onSubmit={(values) => createNewDevice(values)}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formContainer}>
              <View>
                <Text style={styles.label}>Nombre del dispositivo:</Text>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Nombre del dispositivo"
                  style={styles.input}
                />
              </View>

              <View>
                <Text style={styles.label}>ID de datos:</Text>
                <TextInput
                  onChangeText={handleChange('dataId')}
                  onBlur={handleBlur('dataId')}
                  value={values.dataId}
                  placeholder="ID de datos"
                  style={styles.input}
                />
              </View>

              <View>
                <Text style={styles.label}>ID de dispositivo:</Text>
                <TextInput
                  onChangeText={handleChange('devId')}
                  onBlur={handleBlur('devId')}
                  value={values.devId}
                  placeholder="ID de dispositivo"
                  style={styles.input}
                />
              </View>

              <Pressable onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.createBtnText}>Crear dispositivo</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    margin: 10,
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  formContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  btn: {
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    marginTop: 15,
    marginBottom: 5,
  },
  createBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
