import {StyleSheet} from 'react-native';
import COLORS from '@constants/Colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  section: {
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    left: 35,
    top: 99,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#8A959E',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
  },
  backIcon: {
    marginLeft: 12,
  },
  pallete: {
    backgroundColor: COLORS.white,
    borderRadius: 40,
    padding: 15,
    justifyContent: 'space-between',
    position: 'absolute',
    top: 189,
    left: 25,
    elevation: 1,
    shadowColor: '#8A959E',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
  },
  outer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  details: {
    paddingHorizontal: 25,
  },
  nameText: {
    fontFamily: 'Gelasio-Regular',
    fontWeight: '400',
    fontSize: 24,
    color: COLORS.black,
    paddingTop: 25,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '600',
    fontSize: 30,
    color: COLORS.black
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 15,
  },
  rating: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '600',
    fontSize: 18,
    color: COLORS.black,
    marginLeft: 10,
  },
  review: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    color: COLORS.gray,
    marginLeft: 20,
  },
  descText: {
    fontFamily: 'NunitoSans-Light',
    fontWeight: '300',
    fontSize: 14,
    textAlign: 'justify',
    color: COLORS.black3,
    marginBottom: 20,
  },
  footer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favBtn: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: COLORS.gray5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 74,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.white,
  },
});

export default styles;
