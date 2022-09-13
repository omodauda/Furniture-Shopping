import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryCache } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useSelector} from 'react-redux';

//stacks
import AuthStack from '@navigations/AuthStack';
import BottomTabNavigator from './BottomTabNavigator';
import StartupScreen from '@screens/StartUpScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='StartUp' component={StartupScreen} /> 
      <Stack.Screen name='Auth' component={AuthStack} /> 
      <Stack.Screen name='Main' component={BottomTabNavigator} />   
    </Stack.Navigator>
  );
}
