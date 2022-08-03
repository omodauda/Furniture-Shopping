import {StyleSheet} from 'react-native'
import COLORS from '@constants/Colors'

const styles = StyleSheet.create({
  screen: {
		flex: 1,
		backgroundColor: COLORS.white
	},
	form: {
		paddingHorizontal: 20,
		marginTop: 11,
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
	// input: {
		
	// },
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
	dropDown: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	btn: {
		backgroundColor: COLORS.black,
		borderRadius: 8,
		shadowColor: COLORS.black,
		shadowOffset: {
			width: 0,
			height: 10
		},
		shadowOpacity: 0.5,
		shadowRadius: 20,
		elevation: 20,
		paddingVertical: 17,
		marginTop: 106
	},
	btnText: {
		fontFamily: 'NunitoSans-SemiBold',
		fontWeight: '600',
		fontSize: 20,
		color: COLORS.white,
		textAlign: 'center'
	}
})

export default styles