import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import StackScreenHeader from '@components/StackScreenHeader'
import COLORS from '@constants/Colors'
import USER from '@data/user';
import CustomButton from '@components/CustomButton'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function CheckOutScreen({navigation}) {
  const {name, shippingAddresses, paymentMethods} = USER;
  const address = shippingAddresses[0].address;
  const card = paymentMethods[0].cardNo;

  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="CHECK-OUT" />
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Shipping Address</Text>
            <TouchableOpacity>
            <AntDesign name="edit" size={24} color={COLORS.gray} />
            </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.topCard}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={styles.bottomCard}>
            <Text style={styles.address}>{address}</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Payment</Text>
            <TouchableOpacity>
            <AntDesign name="edit" size={24} color={COLORS.gray} />
            </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={[styles.bottomCard, styles.row]}>
            <Fontisto name="mastercard" size={52} color={COLORS.gray} />
            <Text style={styles.cardNo}>{card}</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Delivery method</Text>
            <TouchableOpacity>
            <AntDesign name="edit" size={24} color={COLORS.gray} />
            </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={[styles.bottomCard, styles.row]}>
            <Image source={require('@assets/images/dhl.jpg')} style={styles.logo} />
            <Text style={styles.deliveryText}>Fast (2-3days)</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={[styles.row, styles.pad]}>
          <Text style={styles.label}>Order:</Text>
          <Text style={styles.price}>$ 95.00</Text>
        </View>
        <View style={[styles.row, styles.pad]}>
          <Text style={styles.label}>Delivery:</Text>
          <Text style={styles.price}>$ 5.00</Text>
        </View>
        <View style={[styles.row, styles.pad]}>
          <Text style={styles.label}>Total:</Text>
          <Text style={styles.price}>$ 100.00</Text>
        </View>
      </View>
      <CustomButton
        title="SUBMIT ORDER"
        btnStyle={styles.btn}
        titleStyle={styles.btnText}
      />
    </SafeAreaView>
  )
}