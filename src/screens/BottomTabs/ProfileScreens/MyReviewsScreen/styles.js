import {StyleSheet} from 'react-native'
import COLORS from '@constants/Colors'

const styles = StyleSheet.create({
  screen: {
		flex: 1,
		backgroundColor: COLORS.white
	},
	listContent:{
		backgroundColor: COLORS.white,
		paddingHorizontal: 20,
	},
	item: {
		backgroundColor: COLORS.white,
		padding: 16,
		marginVertical: 10,
		borderRadius: 8,
		shadowColor: COLORS.shadow,
		shadowOffset: {
			width: 0,
			height: 8
		},
		shadowOpacity: 0.1,
		shadowRadius: 40
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	imgContainer: {
		overflow: 'hidden',
		borderRadius: 6,
		marginRight: 20
	},
	image: {
		width: '100%',
		height: '100%'
	},
	name: {
		fontFamily: 'NunitoSans-SemiBold',
		fontWeight: '600',
		fontSize: 16,
		color: COLORS.black3,
		marginBottom: 5
	},
	price: {
		fontFamily: 'NunitoSans-ExtraBold',
		fontWeight: '800',
		fontSize: 16,
		color: COLORS.black
	},
	extra: {
		marginVertical: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	row: {
		flexDirection: 'row'
	},
	date: {
		fontFamily: 'NunitoSans-Regular',
		fontWeight: '400',
		fontSize: 12,
		color: COLORS.gray
	},
	review: {
		fontFamily: 'NunitoSans-Regular',
		fontWeight: '400',
		fontSize: 14,
		textAlign: 'justify'
	}
})

export default styles