import { ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function Loader() {
  return (
    <SafeAreaView style={styles.screen}>
      <ActivityIndicator size="large" color='black'  />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})