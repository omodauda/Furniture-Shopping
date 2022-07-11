import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '@constants/Colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function StackScreenHeader({navigation, title}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={20} color={COLORS.black} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      <View />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 20,
  },
  headerText: {
    fontFamily: 'Gelasio-Bold',
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.black,
  }
})