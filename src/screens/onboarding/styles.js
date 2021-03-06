import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '@constants/Colors';

const {width, height} = Dimensions.get('window');
const IMG_WIDTH = width;
const IMG_PAD_TOP = 0.24 * height;
const TEXT_MARGIN = 0.08 * width;
const DESC_WIDTH = 0.76 * width;
const DESC_MARGIN = 0.157 * width;
const BTN_WIDTH = 0.424 * width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: IMG_WIDTH,
    paddingTop: IMG_PAD_TOP,
  },
  text: {
    fontWeight: '600',
    fontSize: 24,
    marginLeft: TEXT_MARGIN,
    fontFamily: 'Gelasio-SemiBold',
    color: COLORS.black3,
  },
  boldText: {
    fontWeight: '600',
    fontSize: 30,
    fontFamily: 'Gelasio-Bold',
    marginTop: 15,
    marginBottom: 35,
    marginLeft: TEXT_MARGIN,
    color: COLORS.black,
  },
  desc: {
    fontWeight: '400',
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
    lineHeight: 35,
    width: DESC_WIDTH,
    marginLeft: DESC_MARGIN,
    color: COLORS.gray,
    marginBottom: 154,
  },
  button: {
    backgroundColor: COLORS.black,
    borderRadius: 4,
    width: BTN_WIDTH,
    alignSelf: 'center',
    paddingVertical: 15,
  },
  btnText: {
    fontFamily: 'Gelasio-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 23,
    color: COLORS.white,
    textAlign: 'center',
  },
});

export default styles;
