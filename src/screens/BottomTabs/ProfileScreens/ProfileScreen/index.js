import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import COLORS from '@constants/Colors';
import { useQuery } from '@tanstack/react-query';
import { userProfile } from '@store/api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '@components/Loader';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('screen');
const IMG_WIDTH = 0.21 * width;
const ICON_SIZE = 24;
const ICON_COLOR = COLORS.black3;

const defaultImage = 'https://res.cloudinary.com/omodauda/image/upload/v1663091784/furniture-shopping/placeholder_msdoua.png'

export default function ProfileScreen({navigation}) {
  const { data, error, isLoading } = useQuery(['profile'], () => userProfile(), { enabled: true, retry: true });
  if (data) {
    console.log('data.profile', data)
  }
  if (error) {
    console.log('error.profile', error)
  }

  if (isLoading) {
    return <Loader />
  }

  const { fullName, email, photo, addresses, orders } = data;
  
  const handleLogout = async() => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate('Auth', {screen: 'Login'})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Feather name="search" color={ICON_COLOR} size={ICON_SIZE} />
        <Text style={styles.headerText}>PROFILE</Text>
        <TouchableOpacity onPress={() => handleLogout()}>
          <MaterialCommunityIcons
            name="logout"
            color={ICON_COLOR}
            size={ICON_SIZE}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.userInfo}>
          <View
            style={[
              styles.imgContainer,
              {
                width: IMG_WIDTH,
                height: IMG_WIDTH,
                borderRadius: IMG_WIDTH / 2,
              },
            ]}>
            <Image
              style={styles.image}
              source={{uri: photo === null ? defaultImage : photo}}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text style={styles.boldText}>{fullName}</Text>
            <Text style={styles.label}>{email}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View>
            <Text style={styles.boldText}>My orders</Text>
            <Text style={styles.label}>
              Already have {orders}{' '}
              {orders > 1 ? 'orders' : 'order'}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('MyOrders')}>
            <AntDesign name="right" size={ICON_SIZE} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.boldText}>shipping Addresses</Text>
            <Text style={styles.label}>
              {addresses}{' '}
              {addresses > 1 ? 'Addresses' : 'Address'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ShippingAddresses')}>
            <AntDesign name="right" size={ICON_SIZE} color={COLORS.gray} />
          </TouchableOpacity>
        </View>

        {/* <View style={styles.section}>
          <View>
            <Text style={styles.boldText}>Payment Methods</Text>
            <Text style={styles.label}>
              You have {paymentMethods.length}{' '}
              {paymentMethods.length > 1 ? 'cards' : 'card'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentMethod')}>
            <AntDesign name="right" size={ICON_SIZE} color={COLORS.gray} />
          </TouchableOpacity>
        </View> */}

        {/* <View style={styles.section}>
          <View>
            <Text style={styles.boldText}>My reviews</Text>
            <Text style={styles.label}>
              Reviews for {reviews.length}{' '}
              {reviews.length > 1 ? 'items' : 'item'}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('MyReviews')}>
            <AntDesign name="right" size={ICON_SIZE} color={COLORS.gray} />
          </TouchableOpacity>
        </View> */}

        <View style={styles.section}>
          <View>
            <Text style={styles.boldText}>Setting</Text>
            <Text style={styles.label}>
              Notification, Password, FAQ, Contact
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <AntDesign name="right" size={ICON_SIZE} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
