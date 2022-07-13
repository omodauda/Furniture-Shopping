import {StyleSheet} from 'react-native'
import COLORS from '@constants/Colors'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  headerText: {
    fontFamily: 'Gelasio-Bold',
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.black,
  },
  section: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: COLORS.blurGray
  },
  imgContainer: {
    width: 70,
    height: 70,
    borderRadius: 6,
    overflow: 'hidden',
    marginRight: 10
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '600',
    fontSize: 12,
    color: COLORS.black,
    marginBottom: 5
  },
  text: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 10,
    color: COLORS.gray,
    textAlign: 'justify',
  },
  badge: {
    fontFamily: 'NunitoSans-ExtraBold',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'right'
  }
})

export default styles;