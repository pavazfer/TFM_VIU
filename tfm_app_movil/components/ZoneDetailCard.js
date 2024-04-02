import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const ZoneDetailCard = ({ zone, icon, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.title}>{zone.name}</Text>
      <View style={styles.content}>
        <Ionicons name={icon.name} size={24} color={icon.color} />
        <Text style={styles.value}>{zone.value}</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  value: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default ZoneDetailCard;
