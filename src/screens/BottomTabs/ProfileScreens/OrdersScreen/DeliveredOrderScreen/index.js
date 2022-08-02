import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import USER from '@data/user'
import OrdersList from '../OrdersList'



export default function DeliveredOrderScreen() {
  const {orders} = USER;
  return (
    <View style={styles.screen}>
      <OrdersList data={orders} status='Delivered' />
    </View>
  )
}