import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PanelUsersScreen = ({ route, navigation }) => {

  const { panelDetails } = route.params;

  // Datos ficticios de usuarios del panel
  const panelUsers = [
    { id: 1, name: 'tfm', email: 'tfm@tfm.com', userType: 'Admin' },
    { id: 2, name: 'Usuario ejemplo', email: 'usuarioe@example.com', userType: 'Normal' },
    { id: 3, name: 'New User', email: 'newuser@example.com', userType: 'Normal' },
    // Más usuarios aquí...
  ];

  const handleCreateUser = () => {
    navigation.navigate('CreatePanelUsers'); 
  };

  const handleEditPermissions = (userId) => {
    // Lógica para editar los permisos del usuario
    console.log('Editar permisos del usuario con ID:', userId);
  };

  const handleRemoveUser = (userId) => {
    // Lógica para quitar el usuario del panel
    console.log('Quitar usuario del panel con ID:', userId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.button} onPress={handleCreateUser}>
        <Ionicons name="add-outline" size={24} color="white" />
        <Text style={styles.buttonText}>Crear usuario</Text>
      </Pressable>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.section}>
          {/* Mostrar el listado de usuarios del panel */}
          {panelUsers.map(user => (
            <View key={user.id} style={styles.userContainer}>
              <Ionicons name="person-outline" size={24} color="black" style={styles.userIcon} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
                <Text style={styles.userType}>{user.userType}</Text>
              </View>
              <View style={styles.userButtons}>
                <Pressable onPress={() => handleEditPermissions(user.id)} style={styles.userButton}>
                  <Ionicons name="settings-outline" size={24} color="#1E90FF" />
                  <Text style={[styles.userButtonText, { color: '#1E90FF' }]}>Editar Permisos</Text>
                </Pressable>
                <Pressable onPress={() => handleRemoveUser(user.id)} style={styles.userButton}>
                  <Ionicons name="trash-outline" size={24} color="#FF6347" />
                  <Text style={[styles.userButtonText, { color: '#FF6347' }]}>Quitar Usuario</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  button: {
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#086cc4',
    width: 200,
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  userIcon: {
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: 'gray',
  },
  userType: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  userButtons: {
    flexDirection: 'column',
    marginTop: 15,
  },
  userButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userButtonText: {
    marginLeft: 5,
  },
});

export default PanelUsersScreen;
