import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Pressable, Text } from 'react-native';
import ZoneCard from '../../components/ZoneCard';
import { Ionicons } from '@expo/vector-icons';
// import MapView, { Marker } from 'react-native-maps';

const Zones = ({ navigation }) => {
  const zones = [
    { 
      id: 1, 
      name: 'Zona 1', 
      country: 'País 1', 
      latitude: 37.78825, 
      longitude: -122.4324, 
      maxSoilTemperature: 30, 
      minSoilTemperature: 10, 
      maxSoilHumidity: 80, 
      minSoilHumidity: 20, 
      maxAirTemperature: 35, 
      minAirTemperature: 15 
    },
    { 
      id: 2, 
      name: 'Zona 2', 
      country: 'País 2', 
      latitude: 37.75825, 
      longitude: -122.4624, 
      maxSoilTemperature: 28, 
      minSoilTemperature: 12, 
      maxSoilHumidity: 75, 
      minSoilHumidity: 25, 
      maxAirTemperature: 33, 
      minAirTemperature: 18 
    },
    { 
      id: 3, 
      name: 'Zona 3', 
      country: 'País 3', 
      latitude: 37.72825, 
      longitude: -122.3924, 
      maxSoilTemperature: 32, 
      minSoilTemperature: 11, 
      maxSoilHumidity: 78, 
      minSoilHumidity: 22, 
      maxAirTemperature: 36, 
      minAirTemperature: 16 
    },
  ];
  

  const renderItem = ({ item }) => (
    <ZoneCard zone={item} onPress={() => navigation.navigate('ZoneDetail', { zone: item })} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={[styles.btn, styles.createBtn, { marginBottom: 20 }]} 
        onPress={() => navigation.navigate('CreateZone')}
      >
        <Ionicons name="add-outline" size={24} color="white" />
        <Text style={styles.btnText}>Crear Zona</Text>
      </Pressable>

      <FlatList
        data={zones}
        renderItem={renderItem}
        keyExtractor={zone => zone.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  btn: {
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#086cc4',
    width: 200,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
  },
  createBtn: {
    position: 'relative',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  map: {
    flex: 1,
    marginTop: 20,
  },
});

export default Zones;
