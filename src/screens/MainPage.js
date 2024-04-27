import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kamera Alanı</Text>
      <View style={styles.greenArea}>
        <Text style={styles.greenText}>info Alanı</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b', 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
  },
  text: {
    color: '#ffffff', 
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  greenArea: {
    backgroundColor: '#4caf50',
    padding: 50,
    borderRadius: 8,
    position: 'absolute', 
    bottom: 20, 
    zIndex: 1, 
  },
  greenText: {
    color: '#ffffff', 
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MainPage;
