import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PanelDetailsScreen from '../screens/panels/PanelDetails';
import PanelUsersScreen from '../screens/panels/PanelUsers';
import EditPanelScreen from '../screens/panels/EditPanel';
import CreatePanelUsersScreen from '../screens/panels/CreatePanelUsers';

const Stack = createNativeStackNavigator();

const PanelsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#D3D3D3',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="PanelDetails"
        component={PanelDetailsScreen}
        options={{ title: 'Detalles del Panel' }} />
      <Stack.Screen
        name="EditPanel"
        component={EditPanelScreen}
        options={{ title: 'Editar Panel' }} />
      <Stack.Screen
        name="PanelUsers"
        component={PanelUsersScreen}
        options={{ title: 'Usuarios del Panel' }} />
      <Stack.Screen
        name="CreatePanelUsers"
        component={CreatePanelUsersScreen}
        options={{ title: 'Creación de usuarios' }} />
    </Stack.Navigator>
  );
};

export default PanelsStack;
