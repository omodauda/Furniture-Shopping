import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}
