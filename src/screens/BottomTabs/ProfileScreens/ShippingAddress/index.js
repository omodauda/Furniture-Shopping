import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../ProfileScreen/styles'
import StackScreenHeader from '@components/StackScreenHeader'

export default function ShippingAddresses({navigation}) {
  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="SHIPPING ADDRESS" />
    </SafeAreaView>
  )
}