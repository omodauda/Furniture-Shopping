import React from 'react';
import {Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from '@constants/Colors';

// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// screens
// Home stack
import HomeScreen from '@screens/BottomTabs/HomeScreens/HomeScreen';
import ProductScreen from '@screens/BottomTabs/HomeScreens/ProductScreen';

import FavouriteScreen from '@screens/BottomTabs/FavouriteScreen';
import NotificationScreen from '@screens/BottomTabs/NotificationScreen';
import ProfileScreen from '@screens/BottomTabs/ProfileScreen';

const {width, height} = Dimensions.get('window');
const ICON_SIZE = 0.042 * width;
const TAB_HEIGHT = 0.092 * height;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: TAB_HEIGHT},
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.gray4,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="ios-home" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused, color, size = ICON_SIZE}) => (
            <Fontisto name="bookmark" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused, color, size = ICON_SIZE}) => (
            <Feather name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color, size = ICON_SIZE}) => (
            <FontAwesome name="user-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function BottomTabNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
