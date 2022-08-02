import React from 'react';
import {FlatList, View, Text, TouchableOpacity, Dimensions} from 'react-native'
import styles from './styles';
import COLORS from '@constants/Colors';

const {width} = Dimensions.get('screen')

const ITEM_WIDTH = 0.89 * width

export default function OrdersList({data, status}) {

  const statusTextColor = 
    status === 'Delivered' ? COLORS.green2 : 
    status === 'Canceled' ? COLORS.red : 
    status === 'Processing' && COLORS.gold;

	const renderItem = ({item}) => {
    const {orderNo, date, quantity, totalAmount} = item;
    return (
      <View style={[styles.item, { width: ITEM_WIDTH}]}>
        <View style={styles.texts}>
          <Text style={[styles.value]}>Order No{orderNo}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.texts}>
          <Text style={[styles.value, styles.label]}>Quantity:
            <Text style={[styles.value]}> {quantity}</Text>
          </Text>
          <Text style={[styles.value, styles.label]}>Total Amount:
            <Text style={styles.value}> ${totalAmount}</Text>
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Detail</Text>
          </TouchableOpacity>
          <Text style={[styles.statusText, {color: statusTextColor}]}>{status}</Text>
        </View>
      </View>
    )
  }
  return (
		<FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
	)
}