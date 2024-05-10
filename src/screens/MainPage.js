import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const MainPage = () => {
  const [materialType, setMaterialType] = useState(null);

  const handleCameraReady = () => {
    console.log('Kamera hazır.');
  };

  const handleBarCodeScanned = (data) => {
    console.log('Barkod tarandı:', data);
    // Kamera Analizi için gerekli kodlar
    if (data.type === 'malzeme1') {
      setMaterialType({ type: 'malzeme1', recyclable: true });
    } else if (data.type === 'malzeme2') {
      setMaterialType({ type: 'malzeme2', recyclable: false });
    } else {
      setMaterialType(null);
    }
  };

  const renderMaterialInfo = () => {
    if (materialType) {
      return (
        <View style={styles.greenArea}>
          <Text style={styles.greenText}>Malzeme Türü: {materialType.type}</Text>
          <Text style={styles.greenText}>{materialType.recyclable ? 'Geri Dönüştürülebilir' : 'Geri Dönüştürülemez :('}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.greenArea}>
          <Text style={styles.greenText}>info screen</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kamera Alanı</Text>
      {renderMaterialInfo()}
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        onCameraReady={handleCameraReady}
        onBarCodeScanned={handleBarCodeScanned}
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
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
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
