import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import StackScreenHeader from '@components/StackScreenHeader'
import COLORS from '@constants/Colors'
import USER from '@data/user';

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function ShippingAddresses({navigation}) {
  const {name, shippingAddresses} = USER;
	const [defaultAddress, setDefaultAddress] = useState('1');

	const handlePress = (id) => {
		setDefaultAddress(id)
	}

	const renderItem = ({item}) => {
		const {address} = item;
		const isDefaultAddress = item.id === defaultAddress;
		return (
			<View style={styles.section}>
        <View style={styles.sectionHeader}>
          <TouchableOpacity
						style={[
							styles.checkBox,
							{
								backgroundColor: isDefaultAddress ? COLORS.black : COLORS.white,
								borderWidth: isDefaultAddress ? 0 : 1.5,
								borderColor: isDefaultAddress ? null : COLORS.gray2
							}
						]}
						onPress={() => handlePress(item.id)}
					>
						{
							isDefaultAddress ? <AntDesign name='check' size={20} color={COLORS.white} /> : null
						}
          </TouchableOpacity>
          <Text style={styles.sectionHeaderText}>Use as the shipping address</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.topCard}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity>
                <AntDesign name="edit" size={24} color={COLORS.gray} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomCard}>
            <Text style={styles.address}>{address}</Text>
          </View>
        </View>
      </View>
		)
	}
  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="SHIPPING ADDRESS" />
			<FlatList
				data={shippingAddresses}
				keyExtractor={item => item.id}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
			/>
			<TouchableOpacity style={styles.addBtn}>
				<AntDesign name='plus' size={34} color={COLORS.black} />
			</TouchableOpacity>
    </SafeAreaView>
  )
}