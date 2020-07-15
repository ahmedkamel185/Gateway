import 'react-native-gesture-handler';
import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Home from './Containers/Home';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



const screens = {
  Screen1: {
    screen: Home
  }};

export default stack => (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} navigation={stack} />
      </Stack.Navigator>
    </NavigationContainer>
  );



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
