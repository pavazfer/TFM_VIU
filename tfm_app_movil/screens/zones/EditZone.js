import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons'; 

const EditZone = ({ navigation, route }) => {
  const { zone } = route.params;

  const [editedZone, setEditedZone] = useState(zone);

  const handleEditZone = () => {
    // Lógica para editar la zona con los datos proporcionados
    console.log('Datos de la zona editada:', editedZone);
    // Aquí puedes enviar los datos editados al servidor para su procesamiento
    // y manejar cualquier redirección o acción necesaria
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name="leaf" size={48} color="green" />
        </View>

        <Formik initialValues={editedZone} onSubmit={handleEditZone}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formContainer}>
              <View>
                <Text style={styles.label}>Nombre de la zona:</Text>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.label}>País:</Text>
                <TextInput
                  onChangeText={handleChange('country')}
                  onBlur={handleBlur('country')}
                  value={values.country}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.label}>Latitud:</Text>
                <TextInput
                  onChangeText={handleChange('latitude')}
                  onBlur={handleBlur('latitude')}
                  value={values.latitude.toString()}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Longitud:</Text>
                <TextInput
                  onChangeText={handleChange('longitude')}
                  onBlur={handleBlur('longitude')}
                  value={values.longitude.toString()}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Temperatura del suelo (máxima):</Text>
                <TextInput
                  onChangeText={handleChange('maxSoilTemperature')}
                  onBlur={handleBlur('maxSoilTemperature')}
                  value={values.maxSoilTemperature.toString()}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Temperatura del suelo (mínima):</Text>
                <TextInput
                  onChangeText={handleChange('minSoilTemperature')}
                  onBlur={handleBlur('minSoilTemperature')}
                  value={values.minSoilTemperature.toString()}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Humedad del suelo (máxima):</Text>
                <TextInput
                  onChangeText={handleChange('maxSoilHumidity')}
                  onBlur={handleBlur('maxSoilHumidity')}
                  value={values.maxSoilHumidity.toString()}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Humedad del suelo (mínima):</Text>
                <TextInput
                  onChangeText={handleChange('minSoilHumidity')}
                  onBlur={handleBlur('minSoilHumidity')}
                  value={values.minSoilHumidity.toString()}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Temperatura del aire (máxima):</Text>
                <TextInput
                  onChangeText={handleChange('maxAirTemperature')}
                  onBlur={handleBlur('maxAirTemperature')}
                  value={values.maxAirTemperature.toString()}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Temperatura del aire (mínima):</Text>
                <TextInput
                  onChangeText={handleChange('minAirTemperature')}
                  onBlur={handleBlur('minAirTemperature')}
                  value={values.minAirTemperature.toString()}
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <Pressable onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.createBtnText}>Guardar cambios</Text>
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
    backgroundColor: '#068a0e',
    marginTop: 15,
    marginBottom: 5,
  },
  createBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditZone;
