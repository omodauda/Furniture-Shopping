import {View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import TabCustomHeader from '@components/TabCustomHeader';
import COLORS from '@constants/Colors';
import CustomButton from '@components/CustomButton';
import { useSelector } from 'react-redux'

import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo'

const {width, height} = Dimensions.get('screen');

const IMG_WIDTH = 0.26 * width;
const IMG_HEIGHT = 0.12 * height;

export default function FavouriteScreen({ navigation }) {
  const favProducts = useSelector(state => state.favourite)
  const isEmpty = favProducts.length < 1 ? true : false;

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
        <TouchableOpacity
          style={styles.cartIconWrapper}
        >
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
      {
        isEmpty ?
          <View style={styles.emptyView}>
            <Entypo name='shopping-bag' size={200} color={COLORS.black} />
            <Text style={styles.emptyTextBold}>Empty Bag</Text>
            <Text style={styles.emptyDesc}>
              Looks like you haven't favourited anything yet
            </Text>
          </View>
          :
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
            />
          </>
      }
      
    </SafeAreaView>
  );
}
