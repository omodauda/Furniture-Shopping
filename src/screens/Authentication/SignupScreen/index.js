import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import AuthCustomHeader from '@components/AuthCustomHeader';
import styles from './styles';
import {Formik, Field} from 'formik';
import CustomTextInput from '@components/CustomTextInput';
import CustomButton from '@components/CustomButton';
import COLORS from '@constants/Colors';
import {signupValidationSchema} from '@validations/SignupValidation';
import {useMutation} from '@tanstack/react-query';
import {userSignUp} from '@store/api/user';
import {showMessage} from 'react-native-flash-message';

import Feather from 'react-native-vector-icons/Feather';

export default function SignupScreen({navigation}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const signUpMutation = useMutation(userSignUp, {
    onError: error => {
      showMessage({
        message: 'Error',
        description: error.message,
        type: 'danger',
      });
    },
    onSuccess: data => {
      navigation.navigate('Login');
    },
  });

  const handleSignUp = async values => {
    const {name: fullName, email, password} = values;
    signUpMutation.mutate({fullName, email, password});
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <AuthCustomHeader style={styles.header} />
        <View style={styles.headerText}>
          <Text style={styles.welcomeText}>WELCOME</Text>
        </View>
      </View>
      <View style={styles.form}>
        <Formik
          validationSchema={signupValidationSchema}
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => handleSignUp({...values})}>
          {({handleSubmit, isValid, errors, touched}) => (
            <>
              <View style={styles.formControl}>
                <Field
                  component={CustomTextInput}
                  name="name"
                  placeholder="Name"
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
              <View style={styles.formControl}>
                <Field
                  component={CustomTextInput}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  autoCapitalize="none"
                  style={[styles.input, styles.inputText]}
                  placeholderTextColor={COLORS.gray2}
                  secureTextEntry={isConfirmPasswordVisible ? false : true}
                />
                <View style={styles.iconWrapper}>
                  <Feather
                    name={isConfirmPasswordVisible ? 'eye-off' : 'eye'}
                    size={18}
                    style={styles.placeholderIcon}
                    color={COLORS.gray}
                    onPress={() =>
                      setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }
                  />
                </View>
              </View>
              <View style={styles.errorView}>
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>
              <CustomButton
                title="SIGN UP"
                btnStyle={[
                  styles.button,
                  {backgroundColor: isValid ? COLORS.black : COLORS.gray},
                ]}
                titleStyle={[styles.buttonText, styles.signupText]}
                loading={signUpMutation.isLoading}
                handlePress={handleSubmit}
                disabled={!isValid ? true : false}
              />
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.info}>
                  Already have an account?
                  <Text style={[styles.buttonText, styles.link]}> SIGN IN</Text>
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}
