import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import StackScreenHeader from '@components/StackScreenHeader'
import COLORS from '@constants/Colors'
import {useSelector} from 'react-redux'

import AntDesign from 'react-native-vector-icons/AntDesign'

const ICON_SIZE = 24;

export default function SettingScreen({ navigation }) {
  const USER = useSelector(state => state.user)
	const {name, email} = USER

	const [isEnabled, setIsEnabled] = useState({
		sales: true,
		newArrivals: false,
		deliveryStatusChanges: false
	})

	const toggleSalesSwitch = () => {
		setIsEnabled(prevState => {
			return {
				...prevState,
				sales: !prevState.sales
			}
		})
	}

	const toggleNewArrivalsSwitch = () => {
		setIsEnabled(prevState => {
			return {
				...prevState,
				newArrivals: !prevState.newArrivals
			}
		})
	}

	const toggleDeliverySwitch = () => {
		setIsEnabled(prevState => {
			return {
				...prevState,
				deliveryStatusChanges: !prevState.deliveryStatusChanges
			}
		})
	}

  return (
    <SafeAreaView style={styles.screen}>
      <StackScreenHeader navigation={navigation} title="SETTING" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.header}>
						<Text style={styles.headerText}>Personal Information</Text>
						<TouchableOpacity>
							<AntDesign name="edit" size={ICON_SIZE} color={COLORS.gray} />
						</TouchableOpacity>
					</View>
					<View style={styles.card}>
						<Text style={styles.label}>Name</Text>
						<Text style={styles.text}>{name}</Text>
					</View>
					<View style={styles.card}>
						<Text style={styles.label}>Email</Text>
						<Text style={styles.text}>{email}</Text>
					</View>
        </View>

				<View style={styles.section}>
					<View style={styles.header}>
						<Text style={styles.headerText}>Password</Text>
						<TouchableOpacity>
							<AntDesign name="edit" size={ICON_SIZE} color={COLORS.gray} />
						</TouchableOpacity>
					</View>
					<View style={styles.card}>
						<Text style={styles.label}>Password</Text>
						<Text style={styles.text}>************</Text>
					</View>
				</View>

				<View style={styles.section}>
					<View style={styles.header}>
						<Text style={styles.headerText}>Notifications</Text>
					</View>
					<View style={[styles.card, styles.row]}>
						<Text style={styles.boldText}>Sales</Text>
						<Switch
							trackColor={{false: COLORS.gray, true: COLORS.green }}
							thumbColor={COLORS.white}
							ios_backgroundColor={COLORS.white}
							onValueChange={toggleSalesSwitch}
							value={isEnabled.sales}
						/>
					</View>
					<View style={[styles.card, styles.row]}>
						<Text style={styles.boldText}>New arrivals</Text>
						<Switch
							trackColor={{false: COLORS.gray, true: COLORS.green }}
							thumbColor={COLORS.white}
							ios_backgroundColor={COLORS.white}
							onValueChange={toggleNewArrivalsSwitch}
							value={isEnabled.newArrivals}
						/>
					</View>
					<View style={[styles.card, styles.row]}>
						<Text style={styles.boldText}>Delivery status changes</Text>
						<Switch
							trackColor={{false: COLORS.gray, true: COLORS.green }}
							thumbColor={COLORS.white}
							ios_backgroundColor={COLORS.white}
							onValueChange={toggleDeliverySwitch}
							value={isEnabled.deliveryStatusChanges}
						/>
					</View>
				</View>

				<View style={styles.section}>
					<View style={styles.header}>
						<Text style={styles.headerText}>Help Center</Text>
					</View>
					<View style={[styles.card, styles.row]}>
						<Text style={styles.boldText}>FAQ</Text>
						<TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            	<AntDesign name="right" size={ICON_SIZE} color={COLORS.gray} />
          </TouchableOpacity>
					</View>
				</View>
      </ScrollView>
    </SafeAreaView>
  )
}