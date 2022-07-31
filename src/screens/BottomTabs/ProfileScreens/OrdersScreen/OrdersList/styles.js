import {StyleSheet} from 'react-native'
import COLORS from '@constants/Colors'

const styles = StyleSheet.create({
	item: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: COLORS.blurGray,
		paddingTop: 15,
		paddingBottom: 20,
		marginVertical: 13
	},
	texts: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	divider: {
		height: 2,
		backgroundColor: COLORS.blurGray,
		marginTop: 10,
		marginBottom: 15
	},
	value: {
		fontFamily: 'NunitoSans-SemiBold',
		fontWeight: '600',
		fontSize: 16,
		color: COLORS.black
	},
	date: {
		fontFamily: 'NunitoSans-Regular',
		fontWeight: '400',
		fontSize: 14,
		color: COLORS.gray2
	},
	label: {
		color: COLORS.gray
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 30
	},
	btn: {
		backgroundColor: COLORS.black,
		width: 100,
		paddingVertical: 10,
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4
	},
	btnText: {
		fontFamily: 'NunitoSans-SemiBold',
		fontWeight: '600',
		fontSize: 16,
		color: COLORS.white,
		textAlign: 'center'
	},
	statusText: {
		marginRight: 15,
		fontFamily: 'NunitoSans-SemiBold',
		fontWeight: '600',
		fontSize: 16,
		color: COLORS.green2
	}
})

export default styles