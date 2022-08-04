import {StyleSheet} from 'react-native'
import COLORS from '@constants/Colors'

const styles = StyleSheet.create({
  screen: {
		flex: 1,
		backgroundColor: COLORS.white
	},
	content: {
		paddingHorizontal: 16
	},
	imgContainer: {
		width: 333,
		height: 180,
		marginBottom: 20,
		marginTop: 16
	},
	image: {
		width: '100%',
		height: '100%'
	},
	formControl: {
		backgroundColor: COLORS.blurGray,
		borderRadius: 4,
		paddingVertical: 10,
		paddingHorizontal: 16,
		marginVertical: 10
	},
	label: {
		marginBottom: 8,
		fontFamily: 'NunitoSans-Regular',
		fontWeight: '400',
		fontSize: 12,
		color: COLORS.gray3
	},
	inputText: {
		fontFamily: 'NunitoSans-SemiBold',
		fontWeight: '600',
		fontSize: 16,
		color: COLORS.black
	},
	errorView: {
    width: '100%',
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
  },
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	btn: {
		borderRadius: 8,
		paddingVertical: 17,
		marginTop: 100,
		shadowColor: COLORS.black,
		shadowOffset: {
			width: 0,
			height: 10
		},
		shadowOpacity: 0.2,
		shadowRadius: 20
	},
	btnTxt: {
		color: COLORS.white,
		fontFamily: 'NunitoSans-SemiBold',
		fontWeight: '600',
		textAlign: 'center',
		fontSize: 20
	}
})

export default styles