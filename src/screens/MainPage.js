import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kamera Alanı</Text>
      <View style={styles.greenArea}>
        <Text style={styles.greenText}>apğomfmjağoskfasğofkasğofkasğofkasğofkğ</Text>
      </View>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
      />
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
  camera: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default MainPage;
