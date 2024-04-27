import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OpeningPage from './src/screens/OpeningPage'
import SecondOpeningPage from './src/screens/SecondOpeningPage';
import MainPage from './src/screens/MainPage';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="OpeningPage"
        component={OpeningPage}
      />
      <Stack.Screen
      name="SecondOpeningPage"
      component={SecondOpeningPage}
      />
      <Stack.Screen
      name='MainPage'
      component={MainPage}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

