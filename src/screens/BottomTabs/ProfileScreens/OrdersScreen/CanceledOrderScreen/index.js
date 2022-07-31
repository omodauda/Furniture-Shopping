import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import USER from '@data/user'
import OrdersList from '../OrdersList'

export default function CanceledOrderScreen() {
  const {orders} = USER;
  return (
    <View style={styles.screen}>
      <OrdersList data={orders} />
    </View>
  )
}