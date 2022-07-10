import {View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import TabCustomHeader from '@components/TabCustomHeader';
import PRODUCTS from '@data/products';
import COLORS from '@constants/Colors';
import CustomButton from '@components/CustomButton';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const {width, height} = Dimensions.get('screen');

const IMG_WIDTH = 0.26 * width;
const IMG_HEIGHT = 0.12 * height;

export default function FavouriteScreen({navigation}) {
  const favProducts = PRODUCTS.find(product => product.category === 'Popular').list;

  const renderItem = ({item}) => (
    <View style={styles.product}>
      <View style={styles.row}>
        <View style={[styles.imgContainer, {width: IMG_WIDTH, height: IMG_HEIGHT}]}>
          <Image style={styles.image} source={item.image} resizeMode="cover" />
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>$ {item.price}.00</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
          <AntDesign name="closecircleo" size={20} color={COLORS.gray4} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartIconWrapper}>
          <Fontisto name="shopping-bag" size={18} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <TabCustomHeader navigation={navigation}>
        <Text style={styles.headerText}>FAVOURITE</Text>
      </TabCustomHeader>
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
      />
    </SafeAreaView>
  );
}
