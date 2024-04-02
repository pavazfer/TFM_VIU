import React from 'react';
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons'; 

export default function CreateZone({ navigation }) {
  const initialValues = {
    name: '',
    country: '',
    latitude: '',
    longitude: '',
    maxSoilTemperature: '',
    minSoilTemperature: '',
    maxSoilHumidity: '',
    minSoilHumidity: '',
    maxAirTemperature: '',
    minAirTemperature: '',
  };

  const createNewZone = (newZone) => {
    // Lógica para crear la nueva zona...
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        <View style={styles.iconContainer}>
          <Ionicons name="leaf" size={48} color="green" />
        </View>

        <Formik initialValues={initialValues} onSubmit={(values) => createNewZone(values)}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formContainer}>
              <View>
                <Text style={styles.label}>Nombre de la zona:</Text>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Nombre de la zona"
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.label}>País:</Text>
                <TextInput
                  onChangeText={handleChange('country')}
                  onBlur={handleBlur('country')}
                  value={values.country}
                  placeholder="País"
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.label}>Latitud:</Text>
                <TextInput
                  onChangeText={handleChange('latitude')}
                  onBlur={handleBlur('latitude')}
                  value={values.latitude}
                  placeholder="Latitud"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Longitud:</Text>
                <TextInput
                  onChangeText={handleChange('longitude')}
                  onBlur={handleBlur('longitude')}
                  value={values.longitude}
                  placeholder="Longitud"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Temperatura del suelo (máxima):</Text>
                <TextInput
                  onChangeText={handleChange('maxSoilTemperature')}
                  onBlur={handleBlur('maxSoilTemperature')}
                  value={values.maxSoilTemperature}
                  placeholder="Temperatura del suelo máxima"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Temperatura del suelo (mínima):</Text>
                <TextInput
                  onChangeText={handleChange('minSoilTemperature')}
                  onBlur={handleBlur('minSoilTemperature')}
                  value={values.minSoilTemperature}
                  placeholder="Temperatura del suelo mínima"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Humedad del suelo (máxima):</Text>
                <TextInput
                  onChangeText={handleChange('maxSoilHumidity')}
                  onBlur={handleBlur('maxSoilHumidity')}
                  value={values.maxSoilHumidity}
                  placeholder="Humedad del suelo máxima"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Humedad del suelo (mínima):</Text>
                <TextInput
                  onChangeText={handleChange('minSoilHumidity')}
                  onBlur={handleBlur('minSoilHumidity')}
                  value={values.minSoilHumidity}
                  placeholder="Humedad del suelo mínima"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Temperatura del aire (máxima):</Text>
                <TextInput
                  onChangeText={handleChange('maxAirTemperature')}
                  onBlur={handleBlur('maxAirTemperature')}
                  value={values.maxAirTemperature}
                  placeholder="Temperatura del aire máxima"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View>
                <Text style={styles.label}>Temperatura del aire (mínima):</Text>
                <TextInput
                  onChangeText={handleChange('minAirTemperature')}
                  onBlur={handleBlur('minAirTemperature')}
                  value={values.minAirTemperature}
                  placeholder="Temperatura del aire mínima"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <Pressable onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.createBtnText}>Crear zona</Text>
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

