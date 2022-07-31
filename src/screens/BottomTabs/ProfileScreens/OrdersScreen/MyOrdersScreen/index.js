import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import StackScreenHeader from '@components/StackScreenHeader'
import OrderTopTab from '@navigations/OrderTopTab'

export default function MyOrdersScreen({navigation}) {
  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title='MY ORDERS' />
      <OrderTopTab />
    </SafeAreaView>
  )
}