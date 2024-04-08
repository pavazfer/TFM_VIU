import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PanelDetailsScreen = ({ navigation }) => {
  // Simulando los detalles del panel
  const panelDetails = {
    name: 'AACES',
    lastDataUpdate: 20, 
  };
  

  const handleDeletePanel = () => {
    Alert.alert(
      'Eliminar Panel',
      '¿Estás seguro de que deseas eliminar este panel?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            // Aquí iría la lógica para eliminar el panel
            console.log('Panel eliminado');
            navigation.goBack();
          }
        }
      ]
    );
  };

  const handleEditPanel = () => {
    // Navegar a la pantalla de edición del panel
    navigation.navigate('EditPanel', { panelDetails });
  };

  const handleViewUsers = () => {
    // Navegar a la pantalla de usuarios del panel
    navigation.navigate('PanelUsers', { panelDetails });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        {/* Mostrar nombre del panel */}
        <Text style={styles.label}>Nombre del Panel:</Text>
        <Text style={styles.value}>{panelDetails.name}</Text>
        {/* Mostrar diferencia en días desde el último envío de datos */}
        <Text style={styles.label}>Días desde el último envío de datos:</Text>
        <Text style={styles.value}>{panelDetails.lastDataUpdate}</Text>
      </View>

      {/* Botón para editar el panel */}
      <Pressable onPress={handleEditPanel} style={styles.button}>
        <Ionicons name="create-outline" size={24} color="black" />
        <Text style={styles.buttonText}>Editar Panel</Text>
      </Pressable>

      {/* Botón para ver usuarios del panel */}
      <Pressable onPress={handleViewUsers} style={styles.button}>
        <Ionicons name="people-outline" size={24} color="black" />
        <Text style={styles.buttonText}>Ver Usuarios</Text>
      </Pressable>

      {/* Botón para eliminar el panel */}
      <Pressable onPress={handleDeletePanel} style={[styles.button, styles.deleteButton]}>
        <Ionicons name="trash-outline" size={24} color="red" />
        <Text style={[styles.buttonText, styles.deleteButtonText]}>Eliminar Panel</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
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
  deleteButtonText: {
    color: 'red',
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default PanelDetailsScreen;
