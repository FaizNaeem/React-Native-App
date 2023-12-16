import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { Text, StyleSheet, View, Animated } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/Login'
import Signup from './Screens/Signup';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import CustomHeader from './Screens/Components/Header';
import BottomNavigation from './Screens/Components/Bottumbar';
import HeaderAll from './Screens/Components/HeaderAll';
import Addtocard from './Screens/Addtocard';
 const Stack = createNativeStackNavigator()
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="headerall">
      <Stack.Screen options={{
        animation:"slide_from_right"
      }} name="Login" component={Login} />
      <Stack.Screen options={{
        header:CustomHeader,        animation:"slide_from_right",
      }} name="home" component={Home} />
      <Stack.Screen
      options={{
        animation:"slide_from_right"
      }} name="Signup" component={Signup} />
      <Stack.Screen
      options={{
        headerShown:false,
        animation:"slide_from_right"
      }} name="/" component={Splash} />
      <Stack.Screen
      options={{
        header:HeaderAll,
        animation:"slide_from_right"
      }} name="headerall" component={Addtocard} />
      </Stack.Navigator>
      </NavigationContainer>

    // <Login/>
      
    )
  }
}





