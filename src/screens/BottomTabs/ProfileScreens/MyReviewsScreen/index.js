import { View, Text, SafeAreaView, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import StackScreenHeader from '@components/StackScreenHeader'
import USER from '@data/user'
import COLORS from '@constants/Colors'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen')
const IMG_WIDTH = 0.19 * width
const IMG_HEIGHT = 0.086 * height

export default function MyReviewsScreen({navigation}) {
  const {reviews} = USER;

  const renderItem = ({item}) => {
    const {productName, myRating, price, review, date, image} = item;
    return (
      <View style={styles.item}>
        <View style={styles.header}>
          <View style={[styles.imgContainer, {width: IMG_WIDTH, height: IMG_HEIGHT}]}>
            <Image style={styles.image} source={image} resizeMode="cover" />
          </View>
          <View>
            <Text style={styles.name}>{productName}</Text>
            <Text style={styles.price}>$ {price}.00</Text>
          </View>
        </View>
        <View style={styles.extra}>
          <View style={styles.row}>
          {
            [...Array(myRating).keys()].map((_, index) => (
              <MaterialIcons key={index} name="star" size={25} color={COLORS.gold} />
            )
          )}
          </View>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.review}>{review}</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader title="MY REVIEWS" navigation={navigation} />
      <FlatList
        data={reviews}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  )
}