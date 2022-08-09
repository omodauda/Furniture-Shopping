import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import OrdersList from '../OrdersList';
import {useSelector} from 'react-redux';

export default function DeliveredOrderScreen() {
  const Orders = useSelector(state => state.user.orders);
  return (
    <View style={styles.screen}>
      <OrdersList data={Orders} status="Delivered" />
    </View>
  );
}
