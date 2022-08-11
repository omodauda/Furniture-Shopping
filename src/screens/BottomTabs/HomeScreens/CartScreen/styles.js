import {StyleSheet} from 'react-native';
import COLORS from '@constants/Colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  list: {
    paddingHorizontal: 20,
    flex: 0.95,
  },
  product: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: COLORS.blurGray,
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  },
  imgContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.blackGray,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    marginLeft: 20,
    justifyContent: 'space-between'
  },
  name: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    color: COLORS.black3,
    marginBottom: 5,
  },
  split: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.black
  },
  icons: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  promo: {
    width: '90%',
    height: 44,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: COLORS.gray,
    marginTop: 10,
  },
  input: {
    width: '87%',
    height: 44,
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.black,
    paddingLeft: 20,
    paddingVertical: 11
  },
  iconwrapper: {
    width: '13%',
    height: 44,
    borderRadius: 10,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  total: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  totalText: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '600',
    fontSize: 20,
  },
  btn: {
    width: '90%',
    backgroundColor: COLORS.black,
    paddingVertical: 17,
    borderRadius: 8,
    alignSelf: 'center'
  },
  btnText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.white
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyTextBold: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 20
  },
  emptyDesc: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 14,
    width: '60%',
    textAlign: 'center',
    marginVertical: 8,
    color: COLORS.gray
  }
})

export default styles