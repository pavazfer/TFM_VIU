import React from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import ZoneDetailCard from '../../components/ZoneDetailCard'; 

const ZoneDetailScreen = ({ route, navigation }) => {
  const zone = route.params?.zone;

  const handleViewDevices = () => {
    navigation.navigate('DeviceList', { zone }); 
  };

  const handleHistory=() => {
    navigation.navigate('History'); 
  }

  const handleEditZone = () => {
    navigation.navigate('EditZone', { zone });
  }; 

  const handleViewInfo = () => {
    navigation.navigate('Info'); 
  };

  const handleDeleteZone = () => {
    Alert.alert(
      'Eliminar Zona',
      `¿Estás seguro de que deseas eliminar la zona ${zone.name}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            console.log('Zona eliminada:', zone);
            navigation.goBack();
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailContainer}>

        <ZoneDetailCard 
            zone={{ id: 1, name: 'Humedad del Suelo', value: `${zone.maxSoilHumidity}%`, }} 
            icon={{ name: 'water-outline', color: '#1E90FF' }} 
            backgroundColor="#ADD8E6" 
        />

        <ZoneDetailCard 
            zone={{ id: 2, name: 'Temperatura del Suelo', value: `${zone.maxSoilTemperature}°C` }} 
            icon={{ name: 'thermometer-outline', color: '#FF6347' }}
            backgroundColor="#FFA07A" 
        />
      </View>

      <View style={styles.menuContainer}>
        <Pressable onPress={handleEditZone} style={styles.button}>
          <Ionicons name="create-outline" size={24} color="#696969" />
          <Text style={styles.buttonText}>Editar zona</Text>
        </Pressable>
        <Pressable onPress={handleHistory} style={styles.button}>
          <Ionicons name="time-outline" size={24} color="#696969" /> 
          <Text style={styles.buttonText}>Historial</Text>
        </Pressable>
        <Pressable onPress={handleViewDevices} style={styles.button}>
          <Ionicons name="phone-portrait-outline" size={24} color="#696969" /> 
          <Text style={styles.buttonText}>Dispositivos</Text>
        </Pressable>
        <Pressable onPress={handleViewInfo} style={styles.button}>
          <Ionicons name="notifications-outline" size={24} color="#696969" /> 
          <Text style={styles.buttonText}>Avisos</Text>
        </Pressable>
        <Pressable onPress={handleDeleteZone} style={[styles.button, styles.deleteButton]}>
          <Ionicons name="trash-outline" size={24} color="red" />
          <Text style={[styles.buttonText, styles.deleteButtonText]}>Eliminar zona</Text>
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
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailContainer: {
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  menuContainer: {
    alignSelf: 'stretch',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row', 
  },
  deleteButton: {
    borderColor: 'red', 
    borderWidth: 1, 
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: 'red', 
  },
});

export default ZoneDetailScreen;
