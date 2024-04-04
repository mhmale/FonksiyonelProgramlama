import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const SecondOpeningPage = () => {
  return (
    
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'lightblue' }]}>
          <Text style={styles.text}>İşinin bittiği eşyaları atmak yerine tut.</Text>
        </View>
        <View style={[styles.box, { backgroundColor: 'lightgreen' }]}>
          <Text style={styles.text}>Uygulamayı kullanarak kameradan okut.</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: '#ffcccc' }]}>
          <Text style={styles.text}>Geri dönüşüm değeri var mı öğren.</Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#ffd699' }]}>
          <Text style={styles.text}>Ve geri dönüştür.</Text>
        </View>
      </View>
      <View style={styles.NextView}>
      <Pressable onPress={() => navigation.navigate(SecondOpeningPage)}>
        <Text style={styles.NextText}> (っ◔◡◔)っ </Text>
      </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#f7f7ed',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  box: {
    width: 150,
    height: 150,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  NextView:{
    position: "absolute",
    bottom: 50,
    right: 20, 
  }
});

export default SecondOpeningPage;
