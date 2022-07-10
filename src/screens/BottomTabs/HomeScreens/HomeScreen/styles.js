import {StyleSheet} from 'react-native';
import COLORS from '@constants/Colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
  },
  headerTextThin: {
    fontFamily: 'Gelasio-Regular',
    fontWeight: '400',
    color: COLORS.gray2,
  },
  headerTextBold: {
    fontFamily: 'Gelasio-Bold',
    fontWeight: '600',
    color: COLORS.black,
  },
  wrapper: {
    marginRight: 25,
    alignItems: 'center',
  },
  list: {
    paddingHorizontal: 20,
  },
  item: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 5,
  },
  scrollLabel: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 14,
  },
  productList: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  productView: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bag: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black3,
    opacity: 0.4,
    borderRadius: 8,
    position: 'absolute',
    left: 123,
    bottom: 10,
  },
  name: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.black3,
    marginTop: 10,
    marginBottom: 5,
  },
  price: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '600',
    fontSize: 14,
    color: COLORS.black,
  },
});

export default styles;
