import React from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importar Ionicons

const UserDetailsScreen = ({ navigation }) => {
  const user = {
    id: 1,
    name: 'Usuario Ejemplo',
    email: 'usuario@example.com',
    // Otros detalles del usuario...
  };

  const handleEditProfile = () => {
    // Navegar a la pantalla de edición del perfil
    navigation.navigate('EditUser');
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Borrar Cuenta',
      '¿Estás seguro de que deseas borrar tu cuenta?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Borrar',
          style: 'destructive',
          onPress: () => {
            // Aquí iría la lógica para borrar la cuenta
            console.log('Cuenta borrada');
            navigation.goBack(); // o navegar a la pantalla de inicio de sesión, etc.
          }
        }
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que deseas cerrar sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Salir',
          style: 'destructive',
          onPress: () => {
            // Aquí iría la lógica para cerrar sesión
            console.log('Sesión cerrada');
            // Navegar a la pantalla de inicio de sesión
            navigation.replace('Login');
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.section}>
        
        <View style={styles.userInfo}>
          <Ionicons name="person-outline" size={24} color="black" style={styles.userIcon} /> 
          <View>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.userInfoText}>{user.name}</Text>
            <Text style={styles.label}>Correo electrónico:</Text>
            <Text style={styles.userInfoText}>{user.email}</Text>
          </View>
        </View>
        <Pressable onPress={handleEditProfile} style={styles.button}>
          <Ionicons name="create-outline" size={24} color="black" /> 
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </Pressable>
        <Pressable onPress={handleDeleteAccount} style={[styles.button, styles.deleteButton]}>
          <Ionicons name="trash-outline" size={24} color="red" /> 
          <Text style={[styles.buttonText, styles.deleteButtonText]}>Borrar Cuenta</Text>
        </Pressable>

        {/* Botón de salir */}
        <Pressable onPress={handleLogout} style={[styles.button, styles.logoutButton]}>
          <Ionicons name="log-out-outline" size={24} color="#0066FF" /> 
          <Text style={[styles.buttonText, styles.logoutButtonText]}>Salir</Text>
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userIcon: {
    marginRight: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userInfoText: {
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
  logoutButton: {
    borderColor: '#0066FF', 
    borderWidth: 1, 
    backgroundColor: 'transparent',
  },
  logoutButtonText: {
    color: '#0066FF', 
  },
});

export default UserDetailsScreen;
