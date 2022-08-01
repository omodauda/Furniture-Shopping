import {StyleSheet} from 'react-native';
import COLORS from '@constants/Colors';

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	header: {
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 15,
	},
	headerText: {
		fontFamily: 'Gelasio-Bold',
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.black,
	},
	main: {
		paddingHorizontal: 20
	},
	userInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 28,
		marginBottom: 22
	},
	imgContainer: {
		overflow: 'hidden',
		marginRight: 20
	},
	image: {
		width: '100%',
		height: '100%'
	},
	boldText: {
		fontFamily: 'NunitoSans-Bold',
		fontWeight: '600',
		fontSize: 20,
		color: COLORS.black,
		marginBottom: 5
	},
	label: {
		fontFamily: 'NunitoSans-Regular',
		fontWeight: '400',
		fontSize: 14,
		color: COLORS.gray
	},
	section: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 18,
		paddingHorizontal: 20,
		marginVertical: 8,
		backgroundColor: COLORS.white,
		shadowOffset: {
			width: 0,
			height: 7
		},
		shadowColor: COLORS.shadow,
		shadowOpacity: 0.2,
		shadowRadius: 40
	}
})

export default styles