import {View, Text, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import COLORS from '@constants/Colors';
import {useSelector} from 'react-redux'

import Feather from 'react-native-vector-icons/Feather'

const ICON_SIZE = 20;
const ICON_COLOR = COLORS.gray;

export default function NotificationScreen() {
  const NOTIFICATIONS = useSelector(state => state.notification)
  const renderItem = ({item}) => {
    const {title, type, isRead, body: {image, text}} = item;
    const haveImage = image !== null && true;
    const isOrder = type === 'order' && true;

    return (
      <TouchableOpacity style={[styles.section, {backgroundColor: !isRead && COLORS.blurGray }]}>
        {
          haveImage && 
          <View style={styles.imgContainer}>
            <Image source={image} resizeMode="cover" style={styles.image} />
          </View>
        }
        <View style={{width: haveImage ? '75%' : '100%'}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
          {
            !isRead &&
            <Text style={[styles.badge, {color: isOrder ? COLORS.green : COLORS.red}]}>
              {isOrder ? 'New' : 'HOT!'}
            </Text> 
          }
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Feather name="search" color={ICON_COLOR} size={ICON_SIZE} />
        <Text style={styles.headerText}>NOTIFICATION</Text>
        <View />
      </View>
      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
