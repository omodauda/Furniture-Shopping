import {StyleSheet} from 'react-native'
import COLORS from '@constants/Colors'

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	section: {
		alignSelf: 'center',
		paddingVertical: 15
	},
	imgContainer: {
		width: 333,
		height: 180,
		marginBottom: 20
	},
	image: {
		width: '100%',
		height: '100%'
	},
	sectionFooter: {
    flexDirection: 'row',
  },
	checkBox: {
		width: 20,
		height: 20,
		borderRadius: 4,
		borderWidth: 1.5,
	},
	sectionHeaderText: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 18,
    color: COLORS.gray2,
		marginLeft: 10
  },
	addBtn: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: COLORS.white,
		position: 'absolute',
		bottom: 35,
		right: 25,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: COLORS.shadow,
		shadowOffset: {
			width: 4,
			height: 4
		},
		shadowOpacity: 0.5,
		shadowRadius: 40,
		elevation: 10
	}
})

export default styles