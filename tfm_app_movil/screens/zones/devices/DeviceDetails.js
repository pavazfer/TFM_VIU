import React from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import DeviceDetailCard from '../../../components/DeviceDetailCard'; 

const DeviceDetailScreen = ({ route, navigation }) => {
  const { device } = route.params;

  const handleEditDevice = () => {
    navigation.navigate('EditDevice', { device });
  };

  const handleViewData = () => {
    // Lógica para ver los datos del dispositivo...
  }; 

  const handleDeleteDevice = () => {
    Alert.alert(
      'Eliminar Dispositivo',
      `¿Estás seguro de que deseas eliminar el dispositivo ${device.name}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            // Lógica para eliminar el dispositivo
            console.log('Dispositivo eliminado:', device);
            navigation.goBack();
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.detailContainer}>
        <DeviceDetailCard 
            device={device} 
            icon={{ name: 'cog-outline', color: '#1E90FF' }} 
            backgroundColor="#ADD8E6" 
        />
      </View>

      <View style={styles.menuContainer}>
        <Pressable onPress={handleEditDevice} style={styles.button}>
          <Ionicons name="settings-outline" size={24} color="#696969" />
          <Text style={styles.buttonText}>Editar dispositivo</Text>
        </Pressable>
        <Pressable onPress={handleViewData} style={styles.button}>
          <Ionicons name="analytics-outline" size={24} color="#696969" /> 
          <Text style={styles.buttonText}>Ver datos</Text>
        </Pressable>
        <Pressable onPress={handleDeleteDevice} style={[styles.button, styles.deleteButton]}>
          <Ionicons name="trash-outline" size={24} color="red" />
          <Text style={[styles.buttonText, styles.deleteButtonText]}>Eliminar Dispositivo</Text>
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
  buttonText: {
    fontSize: 18,
    marginLeft: 10, 
  },
  deleteButton: {
    borderColor: 'red', 
    borderWidth: 1, 
    backgroundColor: 'transparent',
  },
  deleteButtonText: {
    color: 'red', 
  },
});

export default DeviceDetailScreen;
