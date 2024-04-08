import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InfoScreen = ({ route }) => {
  const zone = route.params?.zone;

  return (
    <View style={styles.container}>
      <Ionicons name="notifications-off-outline" size={100} color="#696969" />
      <Text style={styles.message}>No hay avisos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#696969',
  },
});

export default InfoScreen;
