import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import OrdersList from '../OrdersList';
import { useQuery } from '@tanstack/react-query';
import { getOrders } from '@store/api/order';
import Loader from '@components/Loader';

export default function ProcessingOrderScreen() {
  const orderStatus = 'Processing';
  const { data, error, isLoading } = useQuery(['order', { status: orderStatus }], () => getOrders(orderStatus),
    {
      enabled: true,
      retry: true
    }
  );

  if (data) {
    console.log('data.order.processing', data)
  }
  if (error) {
    console.log('error.order.processing', error)
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <View style={styles.screen}>
      <OrdersList data={data} status={orderStatus} />
    </View>
  );
}
