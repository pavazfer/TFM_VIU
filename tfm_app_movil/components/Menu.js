// components/Menu.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Pantallas
import IndexScreen from '../screens/Index';
import ZonasRiegoScreen from '../screens/ZonasRiego';
import HistoryScreen from '../screens/History';
import ConfigurationScreen from '../screens/Configuration';

// Componente de menú
function CustomDrawerContent({ navigation }) {
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Index')}>
        <Text>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ZonasRiego')}>
        <Text>Zonas de riego</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('History')}>
        <Text>Historial</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Configuration')}>
        <Text>Configuración</Text>
      </TouchableOpacity>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Inicio" component={IndexScreen} />
        <Drawer.Screen name="Zonas de riego" component={ZonasRiegoScreen} />
        <Drawer.Screen name="Historial" component={HistoryScreen} />
        <Drawer.Screen name="Configuración" component={ConfigurationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
