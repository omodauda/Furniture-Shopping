import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import COLORS from '@constants/Colors';

import Entypo from 'react-native-vector-icons/Entypo'

export default function CustomUnitControl({style}) {
  const [unit, setUnit] = useState(1);

  const handleIncreaseBtnPress = () => {
    setUnit(unit + 1);
  };

  const handleDecreaseBtnPress = () => {
    if (unit > 1) {
      setUnit(unit - 1);
    }
    return;
  };

  return (
    <View style={style}>
      <TouchableOpacity
          style={styles.btn}
          onPress={() => handleIncreaseBtnPress()}>
          <Entypo name="plus" size={20} color={COLORS.gray} />
      </TouchableOpacity>
      <Text style={styles.unit}>{unit}</Text>
      <TouchableOpacity
          style={styles.btn}
          onPress={() => handleDecreaseBtnPress()}>
          <Entypo name="minus" size={20} color={COLORS.gray} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: 30,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blurGray,
    elevation: 1,
    shadowColor: '#8A959E',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
  },
  unit: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    color: COLORS.black,
    marginHorizontal: 15,
  },
})