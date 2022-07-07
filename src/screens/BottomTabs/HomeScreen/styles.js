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
});

export default styles;
