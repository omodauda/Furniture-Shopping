import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '@screens/Onboarding';
import LoginScreen from '@screens/Authentication/LoginScreen';
import SignupScreen from '@screens/Authentication/SignupScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
