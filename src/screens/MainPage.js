import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';

const MainPage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [prediction, setPrediction] = useState('No Prediction Yet');
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const sendFrameToServer = async (base64) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', {
        image: base64,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setPrediction(response.data.prediction);
      console.log('Prediction:', response.data.prediction);
    } catch (error) {
      console.error('Error sending frame to server:', error);
    }
  };

  const captureFrame = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync({ base64: true });
      setPrediction('Processing...');
      sendFrameToServer(photo.base64);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={captureFrame}
          >
            <Text style={styles.text}>Capture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.greenArea}>
        <Text style={styles.greenText}>{prediction}</Text>
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
    color: "#ffffff",
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    left: 20,
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});

export default MainPage;