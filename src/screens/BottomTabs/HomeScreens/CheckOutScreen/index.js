import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import StackScreenHeader from '@components/StackScreenHeader';
import COLORS from '@constants/Colors';
import CustomButton from '@components/CustomButton';
import {useSelector, useDispatch} from 'react-redux';
import {createOrder} from '@store/slices/user';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function CheckOutScreen({navigation}) {
  const {total: cartTotal, products} = useSelector(state => state.cart);
  const USER = useSelector(state => state.user);
  const {name, shippingAddresses, paymentMethods} = USER;

  const {address, city, country, postalCode} = shippingAddresses[0];
  const {cardNumber} = paymentMethods[0];

  const deliveryFee = 5;
  const orderTotal = cartTotal + deliveryFee;

  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      createOrder({
        address: `${address}, ${city}, ${postalCode}, ${country}`,
        deliveryFee,
        orderAmount: cartTotal,
        quantity: products.length,
        orders: products,
      }),
    );
    navigation.navigate('Success');
  };

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
            <Text style={styles.address}>
              {address}, {city}, {postalCode}, {country}
            </Text>
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
            <Text style={styles.cardNo}>{cardNumber}</Text>
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
            <Image
              source={require('@assets/images/dhl.jpg')}
              style={styles.logo}
            />
            <Text style={styles.deliveryText}>Fast (2-3days)</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={[styles.row, styles.pad]}>
          <Text style={styles.label}>Order:</Text>
          <Text style={styles.price}>$ {cartTotal}.00</Text>
        </View>
        <View style={[styles.row, styles.pad]}>
          <Text style={styles.label}>Delivery:</Text>
          <Text style={styles.price}>$ {deliveryFee}.00</Text>
        </View>
        <View style={[styles.row, styles.pad]}>
          <Text style={styles.label}>Total:</Text>
          <Text style={styles.price}>$ {orderTotal}.00</Text>
        </View>
      </View>
      <CustomButton
        title="SUBMIT ORDER"
        btnStyle={styles.btn}
        titleStyle={styles.btnText}
        handlePress={handleSubmit}
      />
    </SafeAreaView>
  );
}
