import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import CustomTextInput from '@components/CustomTextInput';
import CustomButton from '@components/CustomButton';
import StackScreenHeader from '@components/StackScreenHeader';
import {Formik, Field} from 'formik';
import COLORS from '@constants/Colors';
import axios from 'axios';
import {addShippingAddressValidationSchema} from '@validations/AddShippingAddressValidation';
import CountryModal from '@components/CountryModal';
import CitiesModal from '@components/CitiesModal';
import { addShippingAddress } from '@store/slices/user';
import { useMutation } from '@tanstack/react-query';
import { addUserAddress } from '@store/api/address';
import { queryClient } from '../../../../../App';


import AntDesign from 'react-native-vector-icons/AntDesign';

export default function AddShippingAddressScreen({navigation}) {
  const [locationData, setLocationData] = useState({
    country: null,
    city: null,
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCityModalVisible, setIsCityModalVisible] = useState(false);

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const addressMutation = useMutation(addUserAddress, {
    onMutate: async (newAddress) => {
      await queryClient.cancelQueries(['address']);
      // snapshot previous value
      const previousAddress = queryClient.getQueryData(['address']);
      // optimistically update new value
      queryClient.setQueryData(['address'], old => [...old, newAddress]);
      // return a context object with the snapshot value
      return {previousAddress}
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (error, newAddress, context) => {
      console.log('error.addAddress', error);
      queryClient.setQueryData(['address'], context.previousAddress)
    },
    onSuccess: (data) => {
      console.log('i was successful')
      console.log('data.addAddress', data)
      navigation.goBack();
    },
    // Always refetch after error or success
    onSettled: () => {
      queryClient.invalidateQueries(['address'])
    }
  })

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(
        'https://countriesnow.space/api/v0.1/countries',
      );
      const data = response.data.data;
      const _data = [];
      data.forEach((d, index) => {
        _data.push({id: index, name: d.country});
      });
      setCountries(_data);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      const country = locationData.country;
      const response = await axios.post(
        'https://countriesnow.space/api/v0.1/countries/cities',
        {
          country: country,
        },
      );
      const data = response.data.data;
      setCities(data);
    };
    fetchCities();
  }, [locationData.country]);

  const isValidLocationData =
    (locationData.city && locationData.country) !== null;

  const dismissModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const dismissCityModal = () => {
    setIsCityModalVisible(!isCityModalVisible);
  };

  
  const handleAddAddress = values => {
    const { fullName, address, country, city, postalCode } = values;
    addressMutation.mutate({ fullName, address, country, city, postalCode });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="ADD SHIPPING ADDRESS" />
      <ScrollView style={styles.form}>
        <Formik
          validationSchema={addShippingAddressValidationSchema}
          initialValues={{
            fullName: '',
            address: '',
            postalCode: '',
          }}
          onSubmit={values => handleAddAddress({...values, ...locationData})}>
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
              <CountryModal
                visibility={isModalVisible}
                dismiss={dismissModal}
                data={countries}
                field="country"
                setLocationData={setLocationData}
              />
              <TouchableOpacity
                onPress={() => dismissModal()}
                style={[styles.dropDown, styles.formControl]}>
                <View>
                  <Text style={styles.label}>Country</Text>
                  <Text style={styles.inputText}>
                    {locationData.country !== null
                      ? locationData.country
                      : 'Select Country'}
                  </Text>
                </View>
                <AntDesign name="down" size={23} color={COLORS.black} />
              </TouchableOpacity>

              <CitiesModal
                visibility={isCityModalVisible}
                dismiss={dismissCityModal}
                data={cities}
                field="city"
                setLocationData={setLocationData}
              />
              <TouchableOpacity
                onPress={() => dismissCityModal()}
                style={[styles.dropDown, styles.formControl]}>
                <View>
                  <Text style={styles.label}>City</Text>
                  <Text style={styles.inputText}>
                    {locationData.city !== null
                      ? locationData.city
                      : 'Select City'}
                  </Text>
                </View>
                <AntDesign name="down" size={23} color={COLORS.black} />
              </TouchableOpacity>
              <CustomButton
                title="SAVE ADDRESS"
                titleStyle={styles.btnText}
                disabled={isValid && isValidLocationData ? false : true}
                btnStyle={[
                  styles.btn,
                  {
                    backgroundColor:
                      isValid && isValidLocationData
                        ? COLORS.black
                        : COLORS.gray,
                  },
                ]}
                handlePress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}
