import { View, Text, SafeAreaView, ImageBackground, Image, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import COLORS from '@constants/Colors'
import CustomButton from '@components/CustomButton'

import Octicons from 'react-native-vector-icons/Octicons'

const {width, height} = Dimensions.get('screen')

const VEC_WIDTH = 0.71 * width;
const VEC_HEIGHT = 0.28 * height;
const LOGO_WIDTH = 0.53 * width;
const LOGO_HEIGHT = 0.22 * height;

export default function SuccessScreen({navigation}) {
  const handleBackBtn = () => {
    navigation.navigate('Home')
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.successText}>SUCCESS!</Text>
      <ImageBackground
        source={require('@assets/images/vector.jpg')}
        resizeMode="cover"
        style={[styles.vector, {width: VEC_WIDTH, height: VEC_HEIGHT}]}
      >
        <Image
          source={require('@assets/images/success.png')}
          style={{width: LOGO_WIDTH, height: LOGO_HEIGHT}}
        />
      </ImageBackground>
      <Octicons name="check-circle-fill" size={42} color={COLORS.green} style={styles.badge} />

      <Text style={styles.note}>Your order will be delivered soon. Thank you for choosing our app!</Text>

      <CustomButton
        title="TRACK YOUR ORDERS"
        btnStyle={[styles.btn, {backgroundColor: COLORS.black}]}
        titleStyle={styles.btnText}
      />
      <CustomButton
        title="BACK TO HOME"
        btnStyle={[styles.btn, {borderWidth: 1, borderColor: COLORS.black}]}
        titleStyle={[styles.btnText, {color: COLORS.black}]}
        handlePress={handleBackBtn}
      />
    </SafeAreaView>
  )
}