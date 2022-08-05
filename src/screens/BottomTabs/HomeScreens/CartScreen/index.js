import { View, Text, SafeAreaView, FlatList, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import COLORS from '@constants/Colors';
import StackScreenHeader from '@components/StackScreenHeader';
import CustomUnitControl from '@components/CustomUnitControl';
import CustomButton from '@components/CustomButton';
import {useSelector} from 'react-redux'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const {width, height} = Dimensions.get('screen');

const IMG_WIDTH = 0.26 * width;
const IMG_HEIGHT = 0.12 * height;

export default function CartScreen({ navigation }) {
  const { products: DATA, total } = useSelector(state => state.cart)
  // const DATA = PRODUCTS.find(product => product.category === 'Table').list;
  const isEmptyCart = DATA.length < 1 ? true : false;
  const handleSubmit = () => {
    navigation.navigate('CheckOut');
  }
  
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
      {
        isEmptyCart ?
          <View style={styles.emptyView}>
            <MaterialIcons name='add-shopping-cart' size={200} color={COLORS.black} />
            <Text style={styles.emptyTextBold}>Your Cart is Empty</Text>
            <Text style={styles.emptyDesc}>
              Looks like you haven't added anything to your cart yet
            </Text>
          </View>
        : 
        <>
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
              <Text style={[styles.totalText, {color: COLORS.black}]}>$ {total}.00</Text>
            </View>
            <CustomButton
              title="CHECK OUT"
              btnStyle={styles.btn}
              titleStyle={styles.btnText}
              handlePress={handleSubmit}
            />
        </>
      }
    </SafeAreaView>
  )
}