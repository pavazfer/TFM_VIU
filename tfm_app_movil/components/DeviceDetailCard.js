import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const DeviceDetailCard = ({ device, icon, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.title}>{device.name}</Text>
      <View style={styles.content}>
        <View style={styles.row}>
          <Ionicons name={icon.name} size={24} color={icon.color} />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Data ID:</Text>
            <Text style={styles.value}>{device.dataId}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Ionicons name={icon.name} size={24} color={icon.color} />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Device ID:</Text>
            <Text style={styles.value}>{device.devId}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    margin: 10,
    padding: 10,
    elevation: 2, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    marginLeft: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default DeviceDetailCard;
