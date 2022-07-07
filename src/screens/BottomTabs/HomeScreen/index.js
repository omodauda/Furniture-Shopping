import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import COLORS from '@constants/Colors';

// icons
import Feather from 'react-native-vector-icons/Feather';

const ICON_SIZE = 20;
const ICON_COLOR = COLORS.gray;

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Feather name="search" color={ICON_COLOR} size={ICON_SIZE} />
        <View>
          <Text style={[styles.headerText, styles.headerTextThin]}>
            Make home
          </Text>
          <Text style={[styles.headerText, styles.headerTextBold]}>
            BEAUTIFUL
          </Text>
        </View>
        <Feather name="shopping-cart" color={ICON_COLOR} size={ICON_SIZE} />
      </View>
    </SafeAreaView>
  );
}
