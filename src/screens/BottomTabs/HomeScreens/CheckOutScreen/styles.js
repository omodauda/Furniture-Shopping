import {StyleSheet} from 'react-native';
import COLORS from '@constants/Colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  section: {
    paddingHorizontal: 20,
    shadowOffset: {
			width: 0,
			height: 8
		},
		shadowColor: COLORS.shadow,
		shadowOpacity: 0.2,
		shadowRadius: 40
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHeaderText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    color: COLORS.gray2
  },
  card: {
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 8
  },
  topCard: {
    backgroundColor: COLORS.white,
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 0.5,
    borderBottomWidth: 2,
    borderColor: COLORS.blurGray,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pad: {
    justifyContent: 'space-between',
    paddingVertical: 7
  },
  cardNo: {
    marginLeft: 17,
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    color: COLORS.black
  },
  logo: {
    width: 89,
    height: 20,
    marginRight: 16
  },
  deliveryText: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '600',
    fontSize: 14,
    color: COLORS.black
  },
  footer: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    marginTop: 18,
    marginBottom: 25,
    shadowOffset: {
			width: 0,
			height: 8
		},
		shadowColor: COLORS.shadow,
		shadowOpacity: 0.2,
		shadowRadius: 40
  },
  label: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 18,
    color: COLORS.gray2
  },
  price: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    color: COLORS.black
  },
  btn: {
    backgroundColor: COLORS.black,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 17,
    borderRadius: 8,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  btnText: {
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 20
  }
})

export default styles