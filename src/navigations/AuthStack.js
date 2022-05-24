import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '@screens/Onboarding';
import LoginScreen from '@screens/Authentication/LoginScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
