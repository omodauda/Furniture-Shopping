import {StyleSheet} from 'react-native'
import COLORS from '@constants/Colors'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center'
  },
  successText: {
    marginTop: 80,
    marginBottom: 30,
    fontFamily: 'Gelasio-Bold',
    fontWeight: '600',
    fontSize: 36,
    color: COLORS.black,
  },
  vector: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 180
  },
  badge: {
    position: 'relative',
    bottom: 20
  },
  note: {
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 18,
    width: '75%',
    lineHeight: 27,
    color: COLORS.black3,
    marginBottom: 27
  },
  btn: {
    paddingVertical: 18,
    width: '84%',
    borderRadius: 8,
    marginVertical: 13
  },
  btnText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.white
  }
})

export default styles;