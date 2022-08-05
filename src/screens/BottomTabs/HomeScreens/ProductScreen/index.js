import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import COLORS from '@constants/Colors';
import CustomButton from '@components/CustomButton';
import CustomUnitControl from '@components/CustomUnitControl';
import {useSelector} from 'react-redux'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const {width, height} = Dimensions.get('screen');

const SECTION_WIDTH = 0.86 * width;
const SECTION_HEIGHT = 0.5 * height;

const PALLETE_WIDTH = 0.17 * width;
const PALLETE_HEIGHT = 0.24 * height;

const PALLETE = [
  {
    id: '1',
    inner: COLORS.white,
    outer: COLORS.gray2,
  },
  {
    id: '2',
    inner: COLORS.brown,
    outer: COLORS.blurGray,
  },
  {
    id: '3',
    inner: COLORS.lightBrown,
    outer: COLORS.blurGray,
  },
];

export default function ProductScreen({route, navigation}) {
  const {productId, selectedCategory} = route.params;
  const PRODUCTS = useSelector(state => state.products)

  const item = PRODUCTS.find(
    product => product.category === selectedCategory,
  ).list.find(ware => ware.id === productId);

  const isAvailable = item.units > 0 ? true : false;

  return (
    <SafeAreaView>
      <View
        style={[
          styles.section,
          {width: SECTION_WIDTH, height: SECTION_HEIGHT},
        ]}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMethod="scale"
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <MaterialIcons
          style={styles.backIcon}
          name="arrow-back-ios"
          size={30}
          color={COLORS.black}
        />
      </TouchableOpacity>
      <View
        style={[
          styles.pallete,
          {width: PALLETE_WIDTH, height: PALLETE_HEIGHT},
        ]}>
        {PALLETE.map(colour => {
          return (
            <View
              key={colour.id}
              style={[
                styles.outer,
                {
                  backgroundColor: colour.outer,
                },
              ]}>
              <View style={[styles.inner, {backgroundColor: colour.inner}]} />
            </View>
          );
        })}
      </View>
      <View style={styles.details}>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>$ {item.price}</Text>
          <CustomUnitControl style={styles.row} />
        </View>
        <TouchableOpacity
        onPress={() => navigation.navigate('Review', {productId: productId, productCategory: selectedCategory})}
          style={styles.ratings}
        >
          <MaterialIcons name="star" size={20} color={COLORS.gold} />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.review}>({item.reviews.length} reviews)</Text>
        </TouchableOpacity>
        <Text style={styles.descText}>{item.description}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.favBtn}>
          <Fontisto name="bookmark" size={25} />
        </View>
        <CustomButton
          title={isAvailable ? 'Add to Cart' : 'Out of Stock'}
          btnStyle={[
            styles.button,
            {backgroundColor: isAvailable ? COLORS.black : COLORS.gray},
          ]}
          titleStyle={styles.buttonText}
          disabled={!isAvailable ? true : false}
          // handlePress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
}
