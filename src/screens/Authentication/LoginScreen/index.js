import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import AuthCustomHeader from '@components/AuthCustomHeader';
import CustomTextInput from '@components/CustomTextInput';
import CustomButton from '@components/CustomButton';
import {Formik, Field} from 'formik';
import {loginValidationSchema} from '@validations/LoginValidation';
import COLORS from '@constants/Colors';
import {userLogin} from '@store/api/user';
import {useMutation} from '@tanstack/react-query';
import {showMessage} from 'react-native-flash-message';

import Feather from 'react-native-vector-icons/Feather';

export default function LoginScreen({navigation}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const loginMutation = useMutation(userLogin, {
    onError: error => {
      showMessage({
        message: 'Error',
        description: error.message,
        type: 'danger',
      });
    },
    onSuccess: data => {
      navigation.navigate('Main', {screen: 'Home'});
    },
  });

  const handleSubmit = values => {
    const {email, password} = values;
    loginMutation.mutate({email, password});
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <AuthCustomHeader style={styles.header} />
        <View style={styles.headerText}>
          <Text style={styles.helloText}>Hello !</Text>
          <Text style={styles.welcomeText}>WELCOME BACK</Text>
        </View>
        <View style={styles.form}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={values => handleSubmit({...values})}>
            {({handleSubmit, isValid, errors, touched}) => (
              <>
                <View style={styles.formControl}>
                  <Field
                    component={CustomTextInput}
                    name="email"
                    placeholder="Email"
                    keyboardType="email-address"
                    autoComplete="email"
                    autoCapitalize="none"
                    style={[styles.input, styles.inputText]}
                    placeholderTextColor={COLORS.gray2}
                  />
                </View>
                <View style={styles.errorView}>
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </View>
                <View style={styles.formControl}>
                  <Field
                    component={CustomTextInput}
                    name="password"
                    placeholder="Password"
                    autoCapitalize="none"
                    style={[styles.input, styles.inputText]}
                    placeholderTextColor={COLORS.gray2}
                    secureTextEntry={isPasswordVisible ? false : true}
                  />
                  <View style={styles.iconWrapper}>
                    <Feather
                      name={isPasswordVisible ? 'eye-off' : 'eye'}
                      size={18}
                      style={styles.placeholderIcon}
                      color={COLORS.gray}
                      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    />
                  </View>
                </View>
                <View style={styles.errorView}>
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>
                <TouchableOpacity>
                  <Text
                    style={[styles.link, styles.buttonText, styles.forgetText]}>
                    Forget Password
                  </Text>
                </TouchableOpacity>
                <CustomButton
                  title="SIGN IN"
                  btnStyle={[
                    styles.button,
                    {backgroundColor: isValid ? COLORS.black : COLORS.gray},
                  ]}
                  titleStyle={[styles.buttonText, styles.loginText]}
                  loading={loginMutation.isLoading}
                  handlePress={handleSubmit}
                  disabled={!isValid ? true : false}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={[styles.buttonText, styles.link]}>SIGN UP</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    </SafeAreaView>
  );
}
