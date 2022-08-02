import React from 'react';
import {Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from '@constants/Colors';

// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// screens

// Home stack
import HomeScreen from '@screens/BottomTabs/HomeScreens/HomeScreen';
import ProductScreen from '@screens/BottomTabs/HomeScreens/ProductScreen';
import CartScreen from '@screens/BottomTabs/HomeScreens/CartScreen';
import CheckOutScreen from '@screens/BottomTabs/HomeScreens/CheckOutScreen';
import SuccessScreen from '@screens/BottomTabs/HomeScreens/SuccessScreen';
import ReviewScreen from '@screens/BottomTabs/HomeScreens/ReviewScreen';

// Profile stack
import ProfileScreen from '@screens/BottomTabs/ProfileScreens/ProfileScreen';
import MyOrdersScreen from '@screens/BottomTabs/ProfileScreens/OrdersScreen/MyOrdersScreen';
import ShippingAddressesScreen from '@screens/BottomTabs/ProfileScreens/ShippingAddressScreen';
import PaymentMethodScreen from '@screens/BottomTabs/ProfileScreens/PaymentMethodScreen';
import MyReviewsScreen from '@screens/BottomTabs/ProfileScreens/MyReviewsScreen';
import SettingScreen from '@screens/BottomTabs/ProfileScreens/SettingScreen';

import FavouriteScreen from '@screens/BottomTabs/FavouriteScreen';
import NotificationScreen from '@screens/BottomTabs/NotificationScreen';

const {width, height} = Dimensions.get('window');
const ICON_SIZE = 0.042 * width;
const TAB_HEIGHT = 0.092 * height;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='MyOrders' component={MyOrdersScreen} />
    </Stack.Navigator>
  )
}

const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: TAB_HEIGHT},
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.gray4,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size=23}) => (
            <Ionicons name={focused ? "ios-home" : "ios-home-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused, color, size = ICON_SIZE}) => (
            <Fontisto name={focused ? "bookmark-alt": "bookmark"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused, color, size = ICON_SIZE}) => (
            <Octicons name={focused ? "bell-fill": "bell"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused, color, size = ICON_SIZE}) => (
            <FontAwesome name={focused ? "user" : "user-o"} color={color} size={size} />
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
      <Stack.Screen name="Home" component={HomeTab} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="CheckOut" component={CheckOutScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen name='ShippingAddresses' component={ShippingAddressesScreen} />
      <Stack.Screen name='PaymentMethod' component={PaymentMethodScreen} />
      <Stack.Screen name="MyReviews" component={MyReviewsScreen}/>
      <Stack.Screen name="Setting" component={SettingScreen}/>
    </Stack.Navigator>
  );
}
