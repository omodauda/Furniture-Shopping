import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

//stacks
import AuthStack from '@navigations/AuthStack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const user = useSelector(state => state.user);
  const {isAuth} = user;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isAuth ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   {isAuth ? <BottomTabNavigator /> : <AuthStack />}
    // </NavigationContainer>
  );
}
