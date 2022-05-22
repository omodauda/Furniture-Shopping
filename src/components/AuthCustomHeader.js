import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import COLORS from '@constants/Colors';

const {width} = Dimensions.get('screen');
const LINE_WIDTH = 0.28 * width;
const IMG_WIDTH = 0.17 * width;

export default function AuthCustomHeader({style}) {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.line} />
      <Image
        style={styles.logo}
        source={require('@assets/images/header-logo.png')}
      />
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    borderRadius: 2,
    backgroundColor: COLORS.gray4,
    height: 1,
    width: LINE_WIDTH,
  },
  logo: {
    width: IMG_WIDTH,
  },
});
