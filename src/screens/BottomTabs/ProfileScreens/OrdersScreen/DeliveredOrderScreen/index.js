import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import OrdersList from '../OrdersList';
import {useSelector} from 'react-redux';

export default function DeliveredOrderScreen() {
  const Orders = useSelector(state => state.orders.orders);
  const data = Orders.filter(order => order.status === 'Delivered');
  return (
    <View style={styles.screen}>
      <OrdersList data={data} status="Delivered" />
    </View>
  );
}
