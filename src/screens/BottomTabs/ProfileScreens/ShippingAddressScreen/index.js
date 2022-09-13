import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import StackScreenHeader from '@components/StackScreenHeader'
import COLORS from '@constants/Colors'
import { useQuery } from '@tanstack/react-query';
import { getUserAddress } from '@store/api/address';

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function ShippingAddresses({navigation}) {
  const { data, isLoading, error } = useQuery(['address'], () => getUserAddress(), {retry: true});

  if (data) {
    console.log('data.address', data);
  }

  if (error) {
    console.log('error.address', error);
  }

  if (isLoading) {
    return (
      <Text>Loading....</Text>
    )
  }


	// const [defaultAddress, setDefaultAddress] = useState('1');

	const handlePress = (id) => {
		// setDefaultAddress(id)
  }
  
  const isEmptyList = data.length < 1 ? true : false;

	const renderItem = ({item}) => {
		const {fullName, address, country, city, postalCode, isDefault} = item;
	
		return (
			<View style={styles.section}>
        <View style={styles.sectionHeader}>
          <TouchableOpacity
						style={[
							styles.checkBox,
							{
								backgroundColor: isDefault ? COLORS.black : COLORS.white,
								borderWidth: isDefault ? 0 : 1.5,
								borderColor: isDefault ? null : COLORS.gray2
							}
						]}
						onPress={() => handlePress(item.id)}
					>
						{
							isDefault ? <AntDesign name='check' size={20} color={COLORS.white} /> : null
						}
          </TouchableOpacity>
          <Text style={styles.sectionHeaderText}>Use as the shipping address</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.topCard}>
            <Text style={styles.name}>{fullName}</Text>
            <TouchableOpacity>
                <AntDesign name="edit" size={24} color={COLORS.gray} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomCard}>
            <Text style={styles.address}>{address}, {city}, {postalCode}, {country}</Text>
          </View>
        </View>
      </View>
		)
	}
  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="SHIPPING ADDRESS" />
      {
        isEmptyList ?
          <View style={styles.emptyView}>
            <Text style={styles.emptyDesc}>
              Looks like you haven't added any address yet
            </Text>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate('AddShippingAddress')}
            >
              <AntDesign name='plus' size={34} color={COLORS.black} />
            </TouchableOpacity>
          </View>
          :
          <>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate('AddShippingAddress')}
            >
              <AntDesign name='plus' size={34} color={COLORS.black} />
            </TouchableOpacity>
          </>
      }
    </SafeAreaView>
  )
}