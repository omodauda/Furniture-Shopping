import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import StackScreenHeader from '@components/StackScreenHeader'
import CustomTextInput from '@components/CustomTextInput'
import CustomButton from '@components/CustomButton'
import {Formik, Field} from 'formik'
import COLORS from '@constants/Colors'
import {addPaymentMethodValidationSchema} from '@validations/AddPaymentMethodValidation'

export default function AddPaymentMethodScreen({navigation}) {
  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="ADD PAYMENT METHOD" />
      <View style={styles.content}>
				<View style={styles.imgContainer}>
					<Image style={styles.image} source={require('@assets/images/mastercard2.png')} resizeMode='cover' />
				</View>
				<View style={styles.form}>
					<Formik
						validationSchema={addPaymentMethodValidationSchema}
						initialValues={{
							name: '',
							cardNumber: '',
							cvv: '',
							expDate: ''
						}}
						onSubmit={values => console.log({...values})}
					>
						{({handleSubmit, isValid, errors, touched}) => (
							<>
								<View style={styles.formControl}>
									<Text style={styles.label}>CardHolder Name</Text>
									<Field
										component={CustomTextInput}
										name="name"
										placeholder="Ex: Bruno Fernandes"
										autoComplete="name"
										autoCapitalize="none"
										style={[styles.input, styles.inputText]}
										placeholderTextColor={COLORS.gray2}
									/>
								</View>
								<View style={styles.errorView}>
									{errors.name && touched.name && (
										<Text style={styles.errorText}>{errors.name}</Text>
									)}
              	</View>
								<View style={styles.formControl}>
									<Text style={styles.label}>Card Number</Text>
									<Field
										component={CustomTextInput}
										name="cardNumber"
										placeholder="**** **** **** 3456"
										keyboardType="numeric"
										style={[styles.input, styles.inputText]}
										placeholderTextColor={COLORS.gray2}
									/>
								</View>
								<View style={styles.errorView}>
									{errors.cardNumber && touched.cardNumber && (
										<Text style={styles.errorText}>{errors.cardNumber}</Text>
									)}
              	</View>
								<View style={styles.row}>
									<View style={[styles.formControl, { width: '45%'}]}>
										<Text style={styles.label}>CVV</Text>
										<Field
											component={CustomTextInput}
											name="cvv"
											placeholder="Ex: 123"
											keyboardType="numeric"
											style={[styles.input, styles.inputText]}
											placeholderTextColor={COLORS.gray2}
										/>
									</View>
									<View style={[styles.formControl, { width: '45%'}]}>
										<Text style={styles.label}>Expiration Date</Text>
										<Field
											component={CustomTextInput}
											name="expDate"
											placeholder="03/22"
											keyboardType="numeric"
											style={[styles.input, styles.inputText]}
											placeholderTextColor={COLORS.gray2}
										/>
									</View>
								</View>
								<View style={{flexDirection: 'row', width: '50%'}}>
									<View style={styles.errorView}>
											{errors.cvv && touched.cvv && (
												<Text style={styles.errorText}>{errors.cvv}</Text>
											)}
              		</View>
									<View style={styles.errorView}>
										{errors.expDate && touched.expDate && (
											<Text style={styles.errorText}>{errors.expDate}</Text>
										)}
									</View>
								</View>

								<CustomButton
									title="ADD NEW CARD"
									titleStyle={styles.btnTxt}
									btnStyle={[styles.btn, {backgroundColor: isValid ? COLORS.black : COLORS.gray}]}
									handlePress={handleSubmit}
									disabled={isValid ? false : true}
								/>
							</>
						)}
					</Formik>
				</View>
			</View>
    </SafeAreaView>
  )
}