import {StyleSheet} from 'react-native'
import COLORS from '@constants/Colors'

const styles = StyleSheet.create({
  screen: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	section: {
    paddingHorizontal: 20,
		marginVertical: 15
  },
	sectionHeader: {
    flexDirection: 'row',
  },
  sectionHeaderText: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 18,
    color: COLORS.gray2,
		marginLeft: 10
  },
	checkBox: {
		width: 20,
		height: 20,
		borderRadius: 4,
		borderWidth: 1.5,
	},
  card: {
    marginTop: 10,
		shadowColor: COLORS.shadow,
		shadowOffset: {
			width: 0,
			height: 8
		},
		shadowOpacity: 0.5,
		shadowRadius: 10,
		elevation: 10
  },
  topCard: {
		flexDirection: 'row',
		justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
		borderColor: COLORS.blurGray,
    borderBottomWidth: 2,

  },
  name: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '600',
    fontSize: 18,
    color: COLORS.black
  },
  bottomCard: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 0.5,
    borderColor: COLORS.blurGray,
    minHeight: 54,
		backgroundColor: COLORS.white
  },
	address: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.gray,
    lineHeight: 25,
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