import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import PanelsStack from './PanelsStack';
import ZonesStack from './ZonesStack';
import UsersStack from './UsersStack';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Zones"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Panels') {
            iconName = 'settings';
          } else if (route.name === 'Zones') {
            iconName = 'leaf';
          } else if (route.name === 'Info') {
            iconName = 'person';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: '#086cc4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        activeTintColor: '#086cc4',
        inactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Panels"
        component={PanelsStack}
        options={{
          title: 'Configuración',
        }} />
      <Tab.Screen
        name="Zones"
        component={ZonesStack}
        options={{
          title: 'Zonas de riego',
        }} />
      <Tab.Screen
        name="Info"
        component={UsersStack}
        options={{
          title: 'Usuario',
        }} />
    </Tab.Navigator>
  );
};

export default MainStack;
