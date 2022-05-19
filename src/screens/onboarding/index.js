import React from 'react';
import {Text, SafeAreaView, ImageBackground} from 'react-native';
import styles from './styles';

export default function OnboardingScreen() {
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
      </ImageBackground>
    </SafeAreaView>
  );
}
