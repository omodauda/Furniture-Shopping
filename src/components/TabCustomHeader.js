import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '@constants/Colors';

import Feather from 'react-native-vector-icons/Feather';

const ICON_SIZE = 20;
const ICON_COLOR = COLORS.gray;

export default function TabCustomHeader(props) {
  return (
    <View style={styles.header}>
        <Feather name="search" color={ICON_COLOR} size={ICON_SIZE} />
        {
          props.children
        }
        <Feather name="shopping-cart" color={ICON_COLOR} size={ICON_SIZE} />
      </View>
  )
}

const styles = StyleSheet.create({
    header: {
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 20,
    }
})

