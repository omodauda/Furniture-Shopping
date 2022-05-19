import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const IMG_WIDTH = width;
const IMG_PAD_TOP = 0.52 * width;
const TEXT_MARGIN = 0.08 * width;
const DESC_WIDTH = 0.76 * width;
const DESC_MARGIN = 0.157 * width;

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
  },
  boldText: {
    fontWeight: '700',
    fontSize: 30,
    marginTop: 15,
    marginBottom: 35,
    marginLeft: TEXT_MARGIN,
  },
  desc: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 35,
    width: DESC_WIDTH,
    marginLeft: DESC_MARGIN,
  },
});

export default styles;
