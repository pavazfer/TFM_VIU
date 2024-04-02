import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreatePanelUsersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}> --- Próximamente ---</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});

export default CreatePanelUsersScreen;
