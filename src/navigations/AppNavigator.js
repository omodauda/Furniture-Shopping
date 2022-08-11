import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

//stacks
import AuthStack from '@navigations/AuthStack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const {name, email} = useSelector(state => state.user);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {name === null && email === null ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : (
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
}
