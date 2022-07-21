import { View, Text, SafeAreaView, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import StackScreenHeader from '@components/StackScreenHeader'
import styles from './styles';
import PRODUCTS from '@data/products';
import COLORS from '@constants/Colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');

const IMG_WIDTH = 0.27 * width;
const IMG_HEIGHT = 0.123 * height;

export default function ReviewScreen({route, navigation}) {
  const {productId, productCategory} = route.params;
  const product = PRODUCTS.find(product => product.category === productCategory).list.find(item => item.id === productId);
  const {image, name, rating, reviews} = product;

  const renderItem = ({item}) => {
    const {rating: userRating, review, user, image} = item;
    return (
      <View style={styles.review}>
        <Image style={styles.userImg} source={image} resizeMode="cover" />
        <View style={styles.rowHeader}>
          <Text style={styles.username}>{user}</Text>
          <Text style={styles.date}>20/03/2020</Text>
        </View>
        <Text style={styles.reviewText}>{review}</Text>
       <View>
       </View>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader title="RATING & REVIEW" navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.details}>
          <View style={[styles.imgContainer, {width: IMG_WIDTH, height:IMG_HEIGHT}]}>
            <Image style={styles.image} source={image} resizeMode="cover" />
          </View>
          <View style={styles.text}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <MaterialIcons name="star" size={30} color={COLORS.gold} />
              <Text style={styles.rating}>{rating}</Text>
            </View>
            <Text style={styles.reviews}>{reviews.length} reviews</Text>
          </View>
        </View>

        <FlatList
          data={reviews}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}