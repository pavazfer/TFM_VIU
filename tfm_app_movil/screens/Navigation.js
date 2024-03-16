import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IndexScreen from './Index';
import ZonasRiegoScreen from './ZonasRiego';
import HistorialScreen from './History';
import ConfiguracionScreen from './Configuration';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Index">
    <Drawer.Screen name="Index" component={IndexScreen} options={{ drawerLabel: 'Inicio' }} />
    <Drawer.Screen name="ZonasRiego" component={ZonasRiegoScreen} options={{ drawerLabel: 'Zonas de riego' }} />
    <Drawer.Screen name="History" component={HistorialScreen} options={{ drawerLabel: 'Historial' }} />
    <Drawer.Screen name="Configuration" component={ConfiguracionScreen} options={{ drawerLabel: 'Configuración' }} />
  </Drawer.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
