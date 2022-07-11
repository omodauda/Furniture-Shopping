import { View, Text, SafeAreaView, FlatList, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import COLORS from '@constants/Colors';
import StackScreenHeader from '@components/StackScreenHeader';
import PRODUCTS from '@data/products';
import CustomUnitControl from '@components/CustomUnitControl';
import CustomButton from '@components/CustomButton';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('screen');

const IMG_WIDTH = 0.26 * width;
const IMG_HEIGHT = 0.12 * height;

export default function CartScreen({navigation}) {
  const DATA = PRODUCTS.find(product => product.category === 'Table').list;


  const renderItem = ({item}) => (
    <View style={styles.product}>
      <View style={styles.row}>
        <View style={[styles.imgContainer, {width: IMG_WIDTH, height: IMG_HEIGHT}]}>
          <Image style={styles.image} source={item.image} resizeMode="cover" />
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <CustomUnitControl style={styles.split} />
        </View>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
          <AntDesign name="closecircleo" size={20} color={COLORS.gray4} />
        </TouchableOpacity>
        <Text style={styles.price}>$ {item.price}.00</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="MY CART" />
      <View style={styles.list}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.promo}>
        <TextInput
          style={styles.input}
          placeholder="Enter your promo code"
          placeholderTextColor={COLORS.gray2}
        />
        <TouchableOpacity style={styles.iconwrapper}>
          <Ionicons name="chevron-forward" size={25} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.total}>
        <Text style={[styles.totalText, {color: COLORS.gray}]}>Total:</Text>
        <Text style={[styles.totalText, {color: COLORS.black}]}>$ 95.00</Text>
      </View>
      <CustomButton title="CHECK OUT" btnStyle={styles.btn} titleStyle={styles.btnText} />
    </SafeAreaView>
  )
}