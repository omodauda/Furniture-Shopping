import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import StackScreenHeader from '@components/StackScreenHeader'
import COLORS from '@constants/Colors';
import {useSelector} from 'react-redux'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function PaymentMethodScreen({ navigation }) {
  const USER = useSelector(state => state.user)
	const {paymentMethods} = USER;
  const [defaultPaymentMethod, setDefaultPaymentMethod] = useState('1');
  
  const isEmptyList = paymentMethods.length < 1 ? true : false;

	const renderItem = ({item}) => {
		const isDefaultPaymentMethod = item.id === defaultPaymentMethod
		return (
			<View style={styles.section}>
        <View style={styles.imgContainer}>
            <Image style={styles.image} source={require('@assets/images/mastercard.png')} resizeMode='cover' />
        </View>
        <View style={styles.sectionFooter}>
					<TouchableOpacity
							style={[
								styles.checkBox,
								{
									backgroundColor: isDefaultPaymentMethod ? COLORS.black : COLORS.white,
									borderWidth: isDefaultPaymentMethod ? 0 : 1.5,
									borderColor: isDefaultPaymentMethod ? null : COLORS.gray2
								}
							]}
							onPress={() => handlePress(item.id)}
						>
							{
								isDefaultPaymentMethod ? <AntDesign name='check' size={20} color={COLORS.white} /> : null
							}
						</TouchableOpacity>
						<Text style={styles.sectionHeaderText}>Use as default payment method</Text>
        </View>
      </View>
		)
	}

	const handlePress = (id) => {
		setDefaultPaymentMethod(id)
	}

  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="PAYMENT METHOD" />
      {
        isEmptyList ?
        <View style={styles.emptyView}>
            <Text style={styles.emptyDesc}>
              Looks like you haven't added any payment method yet
            </Text>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate('AddPaymentMethod')}
            >
              <AntDesign name='plus' size={34} color={COLORS.black} />
            </TouchableOpacity>
          </View>
          :
          <>
            <FlatList
              data={paymentMethods}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity onPress={() => navigation.navigate('AddPaymentMethod')} style={styles.addBtn}>
              <AntDesign name='plus' size={34} color={COLORS.black} />
            </TouchableOpacity>
          </>
      }
    </SafeAreaView>
  )
}