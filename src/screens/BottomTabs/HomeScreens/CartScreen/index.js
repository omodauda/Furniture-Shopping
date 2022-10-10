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
import {reduceItemQty, increaseItemQty} from '@store/slices/cart';
import {getUserCart, removeFromCart, updateCartItem} from '@store/api/cart';
import {useQuery, useMutation} from '@tanstack/react-query';
import {queryClient} from '../../../../../App';
import Loader from '@components/Loader';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');

const IMG_WIDTH = 0.26 * width;
const IMG_HEIGHT = 0.12 * height;

export default function CartScreen({navigation}) {
  const {data, isLoading, error} = useQuery(['cart'], () => getUserCart(), {
    enabled: true,
    retry: false,
  });

  //TODO: delete mutation doesn't work, create reducer for cart and update server behind the scene
  const deleteMutation = useMutation(removeFromCart, {
    onMutate: async cartItemId => {
      await queryClient.cancelQueries(['cart']);
      const prevCart = queryClient.getQueryData(['cart']);
      queryClient.setQueryData(['cart'], old =>
        old.filter(o => o.id !== cartItemId),
      );
      return {prevCart};
    },
    onError: (err, newCart, context) => {
      queryClient.setQueryData(['cart'], context.prevCart);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['cart']);
    },
  });

  const updateMutation = useMutation(updateCartItem, {
    onMutate: async newCartItem => {
      await queryClient.cancelQueries(['cart', newCartItem.cartItemId]);
      const prevCartItem = queryClient.getQueryData([
        'cart',
        newCartItem.cartItemId,
      ]);
      queryClient.setQueryData(['cart', newCartItem.cartItemId], newCartItem);
      return {prevCartItem, newCartItem};
    },
    onError: (err, newCartItem, context) => {
      queryClient.setQueryData(
        ['cart', context.newCartItem.cartItemId],
        context.prevCartItem,
      );
    },
    onSettled: newCartItem => {
      queryClient.invalidateQueries(['cart', newCartItem.cartItemId]);
    },
  });

  const handleUpdate = (action, id, quantity) => {
    if (action === '+') {
      updateMutation.mutate({cartItemId: id, quantity: quantity + 1});
    } else if (action === '-') {
      updateMutation.mutate({cartItemId: id, quantity: quantity - 1});
    }
  };

  const handleRemoveItem = id => {
    deleteMutation.mutate(id);
  };

  const Empty = () => (
    <View style={styles.emptyView}>
      <MaterialIcons name="add-shopping-cart" size={200} color={COLORS.black} />
      <Text style={styles.emptyTextBold}>Your Cart is Empty</Text>
      <Text style={styles.emptyDesc}>
        Looks like you haven't added anything to your cart yet
      </Text>
    </View>
  );

  const renderItem = ({item}) => {
    const {
      id,
      product: {name, images, quantity: itemUnit, price},
      quantity,
    } = item;
    return (
      <View style={styles.product}>
        <View style={styles.row}>
          <View
            style={[
              styles.imgContainer,
              {width: IMG_WIDTH, height: IMG_HEIGHT},
            ]}>
            <Image
              style={styles.image}
              source={{uri: images[0].url}}
              resizeMode="cover"
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.name}>{name}</Text>
            <CustomUnitControl
              qty={quantity}
              style={styles.split}
              handleIncrease={() => handleUpdate('+', id, quantity)}
              handleDecrease={() => handleUpdate('-', id, quantity)}
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
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="MY CART" />
      {isLoading ? (
        <Loader />
      ) : data.cart.length < 0 ? (
        <Empty />
      ) : data.cart.length > 0 ? (
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
      ) : (
        <Empty />
      )}
    </SafeAreaView>
  );
}
