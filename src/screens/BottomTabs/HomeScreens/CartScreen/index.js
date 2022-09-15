import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './styles';
import COLORS from '@constants/Colors';
import StackScreenHeader from '@components/StackScreenHeader';
import CustomUnitControl from '@components/CustomUnitControl';
import CustomButton from '@components/CustomButton';
import {useSelector, useDispatch} from 'react-redux';
import {
  reduceItemQty,
  increaseItemQty,
} from '@store/slices/cart';
import { getUserCart, removeFromCart, updateCartItem } from '@store/api/cart';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient } from '../../../../../App'
import Loader  from '@components/Loader';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');

const IMG_WIDTH = 0.26 * width;
const IMG_HEIGHT = 0.12 * height;

export default function CartScreen({navigation}) {
  // const {products: DATA, total} = useSelector(state => state.cart);
  // const {shippingAddresses, paymentMethods} = useSelector(state => state.user);
  const {data, isLoading, error} = useQuery(['cart'], () => getUserCart(), {enabled: true, retry: false})
  if (data) {
    console.log('cart.data', data.cart)
  
  } else {
    console.log('error.cart', error)
  }

  const deleteMutation = useMutation(removeFromCart, {
    onError: (error) => {
      console.log(error)
    },
    onSuccess: (data) => {
      console.log('i was successful');
      console.log(data);
      queryClient.invalidateQueries(['cart'])
    }
  });

  const updateMutation = useMutation(updateCartItem, {
    onError: (error) => {
      console.log(error)
    },
    onSuccess: (data) => {
      console.log('i was successful');
      console.log(data);
      queryClient.invalidateQueries(['cart'])
    }
  })

  const handleUpdate = (action, id, quantity) => {
    if (action === '+') {
      updateMutation.mutate({cartItemId: id, quantity: quantity + 1})
    } else if (action === '-') {
      updateMutation.mutate({cartItemId: id, quantity: quantity - 1})
    }
  }

  const handleRemoveItem = id => {
    deleteMutation.mutate(id)
  };

  // if (isLoading) {
  //   return <Text>Loading...</Text>
  // }

  // const {cart, total } = data;

  // const isEmptyCart = data.cart.length < 1 ? true : false;

  


  // const handleSubmit = () => {
  //   const isEmptyAddress = shippingAddresses.length < 1 ? true : false;
  //   const isEmptyPaymentMethods = paymentMethods.length < 1 ? true : false;

  //   if (isEmptyAddress) {
  //     navigation.navigate('AddShippingAddress');
  //   } else if (isEmptyPaymentMethods) {
  //     navigation.navigate('AddPaymentMethod');
  //   } else {
  //     navigation.navigate('CheckOut');
  //   }
  // };
  const Empty = () => (
    <View style={styles.emptyView}>
      <MaterialIcons
        name="add-shopping-cart"
        size={200}
        color={COLORS.black}
      />
      <Text style={styles.emptyTextBold}>Your Cart is Empty</Text>
      <Text style={styles.emptyDesc}>
        Looks like you haven't added anything to your cart yet
      </Text>
    </View>
  )

  const renderItem = ({ item }) => {
    const { id, product: {name, images, quantity: itemUnit, price}, quantity} = item;
    return (
      <View style={styles.product}>
        <View style={styles.row}>
          <View
            style={[styles.imgContainer, {width: IMG_WIDTH, height: IMG_HEIGHT}]}>
            <Image style={styles.image} source={images} resizeMode="cover" />
          </View>
          <View style={styles.details}>
            <Text style={styles.name}>{name}</Text>
            <CustomUnitControl
              qty={quantity}
              style={styles.split}
              handleIncrease={() => handleUpdate(action='+', id, quantity)}
              handleDecrease={() => handleUpdate(action='-', id, quantity)}
            />
          </View>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => handleRemoveItem(id)}>
            <AntDesign name="closecircleo" size={20} color={COLORS.gray4} />
          </TouchableOpacity>
          <Text style={styles.price}>$ {price}.00</Text>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="MY CART" />
      {
        isLoading ? <Loader /> :
        data.cart.length < 0 ? <Empty /> :
        data.cart.length > 0 ?
        (
          <>
            <View style={styles.list}>
              <FlatList
                data={data.cart}
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
              <Text style={[styles.totalText, {color: COLORS.black}]}>
                $ {data.total}.00
              </Text>
            </View>
            <CustomButton
              title="CHECK OUT"
              btnStyle={styles.btn}
              titleStyle={styles.btnText}
            />
          </>
        ) :
        <Empty />
      }
    </SafeAreaView>
  );
}
