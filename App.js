/*import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './screens/Splash';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import IndexScreen from './screens/Index';
import Navigation from './screens/Navigation';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => (
  <Stack.Navigator
    initialRouteName="Index"
    screenOptions={{
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen name="Index" component={IndexScreen} />
  </Stack.Navigator> 
);

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 1500); // Tiempo de espera simulado de 1.5s
  }, []);

  if (isSplashVisible) {
    return <Splash navigation={null} />;
  }

  return (
    <NavigationContainer>
      {userAuthenticated ? (
        <Drawer.Navigator initialRouteName="App">
          <Drawer.Screen name="Profile" options={{ drawerLabel: 'Perfil' }} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Index" component={IndexScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/


import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IndexScreen from './screens/Index';
import Splash from './screens/Splash';
import Menu from './components/Menu';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 1500); // Tiempo de espera simulado de 1.5s
  }, []);

  if (isSplashVisible) {
    return <Splash navigation={null} />;
  }

  return (
    <NavigationContainer> 
      <View>
        <Menu />
      </View>
    </NavigationContainer>
  );
}
