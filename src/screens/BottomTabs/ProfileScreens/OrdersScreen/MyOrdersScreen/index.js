import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import StackScreenHeader from '@components/StackScreenHeader'

export default function MyOrdersScreen({navigation}) {
  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title='MY ORDERS' />
    </SafeAreaView>
  )
}