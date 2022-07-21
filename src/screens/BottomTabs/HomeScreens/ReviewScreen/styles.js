import {StyleSheet} from 'react-native'
import COLORS from '@constants/Colors'

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	content: {
		paddingHorizontal: 20
	},
	details: {
		flexDirection: 'row',
		paddingVertical: 15,
		borderColor: COLORS.blurGray,
		borderBottomWidth: 1
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	imgContainer: {
		borderRadius: 10,
		overflow: 'hidden',
		marginRight: 20
	},
	image: {
		width: '100%',
		height: '100%'
	},
	text: {
		justifyContent: 'space-between'
	},
	name: {
		fontFamily: 'NunitoSans-Regular',
		fontWeight: '400',
		fontSize: 14,
		color: COLORS.black3
	},
	rating: {
		fontFamily: 'NunitoSans-Bold',
		fontWeight: '600',
		fontSize: 24,
		color: COLORS.black,
		marginLeft: 10
	},
	reviews: {
		fontFamily: 'NunitoSans-SemiBold',
		fontWeight: '600',
		fontSize: 18,
		color: COLORS.black
	},
  list: {
    paddingVertical: 15,
  },
	review: {
		backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.blurGray,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 17,
    borderRadius: 8,
	},
  userImgContainer: {
    backgroundColor: 'red',
    position: 'absolute'
  },
  userImg: {
    position: 'absolute',
    left: 148,
    bottom: 140
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  username: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    color: COLORS.black
  },
  date: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: COLORS.gray
  },
  reviewText: {
    fontFamily: 'NunitoSans-Regular',
		fontWeight: '400',
		fontSize: 14,
		color: COLORS.black,
    textAlign: 'justify'
  },
  btn: {
    backgroundColor: COLORS.black,
    width: '100%',
    position: 'absolute',
    bottom: 200,
    alignSelf: 'center',
    paddingVertical: 13,
    borderRadius: 8
  },
  btnText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    color: COLORS.white,
    textAlign: 'center'
  }
})

export default styles