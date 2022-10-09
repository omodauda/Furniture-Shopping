import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {fetchStorage} from '@store/api/asyncStorage';

//stacks
import AuthStack from '@navigations/AuthStack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  let isAuth;
  useEffect(() => {
    const fetchToken = async () => {
      const token = await fetchStorage('token');
      if (!token || token === null) {
        isAuth = false;
      } else {
        isAuth = true;
      }
    };
    fetchToken();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={!isAuth ? 'Auth' : 'Main'}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
