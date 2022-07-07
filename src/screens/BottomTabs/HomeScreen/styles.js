import {StyleSheet} from 'react-native';
import COLORS from '@constants/Colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
  },
  headerTextThin: {
    fontFamily: 'Gelasio-Regular',
    fontWeight: '400',
  },
  headerTextBold: {
    fontFamily: 'Gelasio-Bold',
    fontWeight: '700',
  },
});

export default styles;
