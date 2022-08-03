import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './styles'
import CustomTextInput from '@components/CustomTextInput'
import CustomButton from '@components/CustomButton'
import StackScreenHeader from '@components/StackScreenHeader'
import {Formik, Field} from 'formik'
import COLORS from '@constants/Colors'
import axios from 'axios'
import {addShippingAddressValidationSchema} from '@validations/AddShippingAddressValidation'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function AddShippingAddressScreen({navigation}) {
	const [locationData, setLocationData] = useState({
		country: null,
		city: null
	});

	const fetchCountries = async () => {
		const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
		const data = response.data.data
		const countries = {};
		data.forEach((d, index) => {
			countries[index] = d.country
		});
		console.log(countries)
	}

	useEffect(() => {
		fetchCountries();
	}, []);

	const isValidLocationData = (locationData.city && locationData.country) !== null;

  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="ADD SHIPPING ADDRESS" />
			<View style={styles.form}>
				<Formik
					validationSchema={addShippingAddressValidationSchema}
					initialValues={{
						fullName: '',
						address: '',
						postalCode: '',
					}}
					onSubmit={values => console.log({...values})}
				>
					{({handleSubmit, isValid, errors, touched}) => (
						<>
							<View style={styles.formControl}>
								<Text style={styles.label}>Full Name</Text>
								<Field 
									component={CustomTextInput}
									name="fullName"
									placeholder="Ex: Bruno Fernandes"
									autoComplete="name"
									autoCapitalize="none"
                  style={[styles.input, styles.inputText]}
                  placeholderTextColor={COLORS.gray2}
								/>
							</View>
							<View style={styles.errorView}>
                {errors.fullName && touched.fullName && (
                  <Text style={styles.errorText}>{errors.fullName}</Text>
                )}
              </View>
							<View style={styles.formControl}>
								<Text style={styles.label}>Address</Text>
								<Field 
									component={CustomTextInput}
									name="address"
									placeholder="Ex: 25 Robert Latouche Street"
									autoComplete="address"
									autoCapitalize="none"
                  style={[styles.input, styles.inputText]}
                  placeholderTextColor={COLORS.gray2}
								/>
							</View>
							<View style={styles.errorView}>
                {errors.address && touched.address && (
                  <Text style={styles.errorText}>{errors.address}</Text>
                )}
              </View>
							<View style={styles.formControl}>
								<Text style={styles.label}>Zipcode (Postal Code)</Text>
								<Field 
									component={CustomTextInput}
									name="postalCode"
									placeholder="Ex: 1000011"
									keyboardType="numeric"
                  style={[styles.input, styles.inputText]}
                  placeholderTextColor={COLORS.gray2}
								/>
							</View>
							<View style={styles.errorView}>
                {errors.postalCode && touched.postalCode && (
                  <Text style={styles.errorText}>{errors.postalCode}</Text>
                )}
              </View>
							<TouchableOpacity style={[styles.dropDown, styles.formControl]}>
								<View>
									<Text style={styles.label}>Country</Text>
									<Text style={styles.inputText}>Select Country</Text>
								</View>
								<AntDesign name='down' size={23} color={COLORS.black} />
							</TouchableOpacity>
							<TouchableOpacity style={[styles.dropDown, styles.formControl]}>
								<View>
									<Text style={styles.label}>City</Text>
									<Text style={styles.inputText}>Select City</Text>
								</View>
								<AntDesign name='down' size={23} color={COLORS.black} />
							</TouchableOpacity>
							<CustomButton
								title="SAVE ADDRESS"
								titleStyle={styles.btnText}
								disabled={!isValid ? true : false}
								btnStyle={[
									styles.btn,
									{
										backgroundColor: isValid && isValidLocationData ? COLORS.black : COLORS.gray
									},
									]}
								handlePress={handleSubmit}
							/>
						</>
					)}
				</Formik>
			</View>
    </SafeAreaView>
  )
}