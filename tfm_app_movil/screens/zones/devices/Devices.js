import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import DeviceCard from '../../../components/DeviceCard'; 

const DeviceListScreen = ({ navigation, route }) => {
  const zone = route.params?.zone;

  const devices = [
    { 
      id: 1, 
      name: 'Farm01_sm', 
      dataId: '6549d8fd81e98a187c2e153f', 
      devId: 'AACESFarm01ThetaProbesm14560', 
      zoneId: 1 
    },
    { 
      id: 2, 
      name: 'Farm01_ts', 
      dataId: '6549d8fd81e98a187c2e1540', 
      devId: 'AACESFarm016507Ats31620', 
      zoneId: 1 
    },
    { 
      id: 3, 
      name: 'Farm02_sm', 
      dataId: '6549d8fe81e98a187c2e1541', 
      devId: 'AACESFarm02ThetaProbesm16565', 
      zoneId: 1 
    },
  ];

  const renderItem = ({ item }) => (
    <DeviceCard 
      device={item} 
      onPress={() => navigation.navigate('DeviceDetail', { device: item })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
     
      <Text style={styles.zoneText}>Dispositivos de {zone.name}</Text>
     
      <Pressable
        style={[styles.btn, styles.createBtn, { marginBottom: 20 }]}
        onPress={() => navigation.navigate('CreateDevice')}
      >
        <Ionicons name="add-outline" size={24} color="white" />
        <Text style={styles.btnText}>Nuevo dispositivo</Text>
      </Pressable>

      <FlatList
        data={devices}
        renderItem={renderItem}
        keyExtractor={device => device.id.toString()}
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
  zoneText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
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
});

export default DeviceListScreen;
