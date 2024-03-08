import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Imagen centrada */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/agricultura.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Texto */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>TFM</Text>
      </View>

      {/* Loading */}
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EDEDED', 
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    logo: {
      width: 200,
      height: 200, 
    },
    textContainer: {      
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    text: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
    },
    loadingContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
  });