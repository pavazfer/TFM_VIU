import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ZoneListScreen from '../screens/zones/Zones';
import CreateZoneScreen from '../screens/zones/CreateZone';
import EditZoneScreen from '../screens/zones/EditZone';
import ZoneDetailScreen from '../screens/zones/ZoneDetails';
import DeviceListScreen from '../screens/zones/devices/Devices';
import CreateDeviceScreen from '../screens/zones/devices/CreateDevice';
import EditDeviceScreen from '../screens/zones/devices/EditDevice';
import DeviceDetailScreen from '../screens/zones/devices/DeviceDetails';
import InfoScreen from '../screens/zones/info/Info';
import HistoryScreen from '../screens/zones/historical/Historical';

const Stack = createNativeStackNavigator();

function ZonesStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#B2DFDB',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="ZonesList"
          component={ZoneListScreen}
          options={{ title: 'Listado de zonas' }} />
        <Stack.Screen
          name="CreateZone"
          component={CreateZoneScreen}
          options={{ title: 'Crear zona' }} />
        <Stack.Screen
          name="EditZone"
          component={EditZoneScreen}
          options={{ title: 'Editar zona' }} />
        <Stack.Screen
          name="ZoneDetail"
          component={ZoneDetailScreen}
          options={({ route }) => ({ title: 'Detalles de la ' + route.params.zone.name })}
        />
        <Stack.Screen
          name="DeviceList"
          component={DeviceListScreen}
          options={{ title: 'Listado de dispositivos' }} />
        <Stack.Screen
          name="CreateDevice"
          component={CreateDeviceScreen}
          options={{ title: 'Crear dispositivo' }} />
        <Stack.Screen
          name="EditDevice"
          component={EditDeviceScreen}
          options={{ title: 'Editar dispositivo' }} />
        <Stack.Screen
          name="DeviceDetail"
          component={DeviceDetailScreen}
          options={({ route }) => ({ title: 'Detalles del dispositivo ' + route.params.device.name })}
        />
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{ title: 'Avisos' }} />
  
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ title: 'Historial' }} />  
      </Stack.Navigator>
    );
  }
export default ZonesStack;
