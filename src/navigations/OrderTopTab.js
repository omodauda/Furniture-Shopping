import React from 'react';
import {Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import COLORS from '@constants/Colors';

const Tab = createMaterialTopTabNavigator();

const {width} = Dimensions.get('screen');

const INDICATOR_WIDTH = 0.11 * width;
const PADDING_HORIZONTAL = 20;

// screens
import DeliveredOrderScreen from '@screens/BottomTabs/ProfileScreens/OrdersScreen/DeliveredOrderScreen';
import ProcessingOrderScreen from '@screens/BottomTabs/ProfileScreens/OrdersScreen/ProcessingOrderScreen';
import CanceledOrderScreen from '@screens/BottomTabs/ProfileScreens/OrdersScreen/CanceledOrderScreen';

export default function OrderTopTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'NunitoSans-Bold',
          fontWeight: '600',
          fontSize: 16,
          textTransform: 'capitalize',
          marginBottom: 10,
        },
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.gray2,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.black,
          borderRadius: 4,
          height: 4,
          width: INDICATOR_WIDTH,
          left: ((width - PADDING_HORIZONTAL * 2) / 3 - INDICATOR_WIDTH) / 2,
        },
      }}
      style={{paddingHorizontal: 20}}>
      <Tab.Screen name="Processing" component={ProcessingOrderScreen} />
      <Tab.Screen name="Delivered" component={DeliveredOrderScreen} />
      <Tab.Screen name="Canceled" component={CanceledOrderScreen} />
    </Tab.Navigator>
  );
}
