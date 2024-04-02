import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetailsScreen from '../screens/user/UserDetails';
import EditUserScreen from '../screens/user/EditUser';

const Stack = createNativeStackNavigator();

const UsersStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ADD8E6',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>    
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{ title: 'Detalles del Usuario' }} />
      <Stack.Screen
        name="EditUser"
        component={EditUserScreen}
        options={{ title: 'Editar Usuario' }} />
    </Stack.Navigator>
  );
};

export default UsersStack;
