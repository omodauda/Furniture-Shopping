import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import OrdersList from '../OrdersList';
import { useQuery } from '@tanstack/react-query';
import {getOrders } from '@store/api/order';

export default function DeliveredOrderScreen() {
  const orderStatus = 'Delivered';
  const { data, error, isLoading } = useQuery(['order', { status: orderStatus }], () => getOrders(orderStatus),
    {
      enabled: true,
      retry: true
    }
  );

  if (data) {
    console.log('data.order.delivered', data)
  }
  if (error) {
    console.log('error.order.delivered', error)
  }

  if (isLoading) {
    return <Text>Loading....</Text>
  }
  return (
    <View style={styles.screen}>
      <OrdersList data={data} status={orderStatus} />
    </View>
  );
}
