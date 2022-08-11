import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import styles from './styles';
import TabCustomHeader from '@components/TabCustomHeader';
import COLORS from '@constants/Colors';
import CustomButton from '@components/CustomButton';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromFav, clearFav} from '@store/slices/favourite';
import {addToCart} from '@store/slices/cart';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('screen');

const IMG_WIDTH = 0.26 * width;
const IMG_HEIGHT = 0.12 * height;

export default function FavouriteScreen({navigation}) {
  const favProducts = useSelector(state => state.favourite.favouriteProducts);
  const isEmpty = favProducts.length < 1 ? true : false;

  const dispatch = useDispatch();
  const handleRemoveItem = item => {
    const {category, id} = item;
    dispatch(removeFromFav({category, productId: id}));
  };

  const handleAddToCart = item => {
    const {category, id: productId} = item;
    dispatch(addToCart({productId, category, quantity: 1}));
  };

  const handleAddAllToCart = () => {
    favProducts.map(product => {
      const {category, id: productId, units} = product;
      const isOutOfStock = units < 1 ? true : false;
      dispatch(addToCart({productId, category, quantity: 1}));
      if (isOutOfStock) {
        return;
      } else {
        dispatch(removeFromFav({category, productId}));
      }
    });
  };

  const renderItem = ({item}) => {
    const {units, image, name, price} = item;
    const isOutOfStock = units < 1 ? true : false;
    return (
      <View style={styles.product}>
        <View style={styles.row}>
          <View
            style={[
              styles.imgContainer,
              {width: IMG_WIDTH, height: IMG_HEIGHT},
            ]}>
            <Image style={styles.image} source={image} resizeMode="cover" />
          </View>
          <View style={styles.details}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>$ {price}.00</Text>
            </View>
            {isOutOfStock && (
              <Text style={[styles.price, {color: COLORS.red}]}>
                Out of stock
              </Text>
            )}
          </View>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => handleRemoveItem(item)}>
            <AntDesign name="closecircleo" size={20} color={COLORS.gray4} />
          </TouchableOpacity>
          {!isOutOfStock && (
            <TouchableOpacity
              style={styles.cartIconWrapper}
              onPress={() => handleAddToCart(item)}
              disabled={isOutOfStock ? true : false}>
              <Feather name="shopping-cart" color={COLORS.black} size={18} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <TabCustomHeader navigation={navigation}>
        <Text style={styles.headerText}>FAVOURITE</Text>
      </TabCustomHeader>
      {isEmpty ? (
        <View style={styles.emptyView}>
          <Entypo name="shopping-bag" size={200} color={COLORS.black} />
          <Text style={styles.emptyTextBold}>Empty Bag</Text>
          <Text style={styles.emptyDesc}>
            Looks like you haven't favourited anything yet
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={favProducts}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
          <CustomButton
            title="Add all to my cart"
            titleStyle={styles.btnText}
            btnStyle={styles.btn}
            handlePress={handleAddAllToCart}
          />
        </>
      )}
    </SafeAreaView>
  );
}
