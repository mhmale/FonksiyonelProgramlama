import { StyleSheet, Text, View, Image, Pressable, StatusBar } from 'react-native'
import React from 'react'

const OpeningPage = () => {
  return (
    <View style={styles.container}>
      <Image
      style={styles.Image}
      source={require("../../assets/images/6347914.jpg")}
      />
      <View style={styles.bottomTextContainer}>
      <Text style={styles.Text}>Çevreye Faydalı Olmaya Hazır Mısın? </Text>
      </View>
        <View style={styles.NextView}>
      <Pressable>
        <Text style={styles.NextText}> (っ◔◡◔)っ </Text>
      </Pressable>
        </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default OpeningPage


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#f7f7ed',
        },
      bottomTextContainer:{
        position: 'absolute',
        bottom:200,
        alignItems:"center",
      },
      Image:{
        width:250,
        height:300,
        alignItems:"center",
        justifyContent:"center",
        //marginBottom:100,
      },
      Text:{
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center",
        borderRadius:10,
        position:"absolute",
      },
      NextText:{
        fontWeight:"bold",
        fontSize:15,
        color:"black",
      },
      NextView:{
        position: "absolute",
        bottom: 50,
        right: 20, // Adjust this value as needed for the exact position
      }
})