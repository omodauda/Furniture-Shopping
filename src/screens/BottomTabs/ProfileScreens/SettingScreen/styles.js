import {StyleSheet} from 'react-native'
import COLORS from '@constants/Colors'

const styles = StyleSheet.create({
  screen: {
		flex: 1,
		backgroundColor: COLORS.white
	},
	content: {
		paddingHorizontal: 20
	},
	section: {
		marginTop: 35
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 8
	},
	headerText: {
		fontFamily: 'NunitoSans-SemiBold',
		fontWeight: '600',
		fontSize: 16,
		color: COLORS.gray2
	},
	card: {
		backgroundColor: COLORS.white,
		padding: 16,
		marginVertical: 8,
		borderRadius: 4,
		shadowColor: COLORS.shadow,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.2,
		shadowRadius: 40
	},
	label: {
		fontFamily: 'NunitoSans-Regular',
		fontWeight: '400',
		fontSize: 12,
		color: COLORS.gray3,
		marginBottom: 5
	},
	text: {
		fontFamily: 'NunitoSans-SemiBold',
		fontWeight: '600',
		fontSize: 14,
		color: COLORS.black
	},
	boldText: {
		fontFamily: 'NunitoSans-SemiBold',
		fontWeight: '600',
		fontSize: 16,
		color: COLORS.black
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})

export default styles