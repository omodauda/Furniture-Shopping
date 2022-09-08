import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {QueryCache} from '@tanstack/react-query'
// import {useSelector} from 'react-redux';

//stacks
import AuthStack from '@navigations/AuthStack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

// const queryCache = new QueryCache({
//   onError: error => {
//     console.log(error)
//   },
//   onSuccess: data => {
//     console.log(data)
//   }
// });

// const query = queryCache.find(['user']);
// console.log('user_query', query);

export default function AppNavigator() {
  // const {name, email} = useSelector(state => state.user);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Auth" component={AuthStack} /> */}
        <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
