import React from 'react';
import {Text, SafeAreaView, ImageBackground} from 'react-native';
import styles from './styles';
import CustomButton from '@components/CustomButton';

export default function OnboardingScreen({navigation}) {
  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={require('../../../assets/images/onboarding.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>MAKE YOUR</Text>
        <Text style={styles.boldText}>HOME BEAUTIFUL</Text>
        <Text style={styles.desc}>
          The best simple place where you discover most wonderful furnitures and
          make your home beautiful
        </Text>
        <CustomButton
          title="Get Started"
          btnStyle={styles.button}
          titleStyle={styles.btnText}
          handlePress={() => navigation.navigate('Login')}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
