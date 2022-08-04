import { View, Text, Modal, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '@constants/Colors'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function CitiesModal({ visibility, dismiss, data, field, setLocationData}) {
	const handlePress = (data) => {
		if (field === 'city'){
			setLocationData(prevState => {
				return {
					...prevState,
					city: data
				}
			})
		}
		dismiss()
	}
	const ListItem = ({id, name}) => {
    return (
      <TouchableOpacity
        key={id}
        style={styles.section}
				onPress={() => handlePress(name)}
      >
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal animationType='slide' transparent={false} visible={visibility}>
			<SafeAreaView style={styles.content}>
				<ScrollView
					style={styles.scroll}
					bounces={false}
				>
					<TouchableOpacity onPress={() => dismiss()} style={styles.headerBtn}>
						<AntDesign name='closecircleo' size={23} color={COLORS.black} />
					</TouchableOpacity>
					{
						data.map(city => (
							<ListItem key={city} id={city} name={city} />
						))
					}
				<TouchableOpacity
            onPress={() => {
              dismiss();
            }}
            style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
				</ScrollView>
			</SafeAreaView>
		</Modal>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 24,
    paddingTop: 24,
  },
  scroll: {
    paddingHorizontal: 20,
  },
	headerBtn: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 8
	},
  section: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.gray,
    paddingVertical: 10,
		paddingHorizontal: 16
  },
  text: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 17,
    color: COLORS.black,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginVertical: 9,
  },
  closeText: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.black,
  },
});