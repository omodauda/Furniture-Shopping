import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import StackScreenHeader from '@components/StackScreenHeader'
import COLORS from '@constants/Colors'
import { useQuery, useMutation } from '@tanstack/react-query';
import { getUserAddress, setDefaultAddress } from '@store/api/address';
import { queryClient } from '../../../../../App';

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function ShippingAddresses({navigation}) {
  const { data, isLoading, error } = useQuery(['address'], () => getUserAddress(), {retry: true});

  if (data) {
    console.log('data.address', data);
  }

  if (error) {
    console.log('error.address', error);
  }

  const defaultAddressMutation = useMutation(setDefaultAddress, {
     onError: (error) => {
      console.log(error)
    },
    onSuccess: (data) => {
      console.log('i was successful');
      console.log(data);
      queryClient.invalidateQueries(['address'])
    }
  })

  if (isLoading) {
    return (
      <Text>Loading....</Text>
    )
  }

  const handlePress = (id) => {
    defaultAddressMutation.mutate(id)
  }
  
  const isEmptyList = data.length < 1 ? true : false;

	const renderItem = ({item}) => {
		const {id, fullName, address, country, city, postalCode, isDefault} = item;
	
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
						onPress={() => handlePress(id)}
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