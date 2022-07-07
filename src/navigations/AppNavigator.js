import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//stacks
// import AuthStack from '@navigations/AuthStack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Auth" component={AuthStack} /> */}
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
