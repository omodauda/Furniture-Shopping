import {StyleSheet} from 'react-native';
import COLORS from '@constants/Colors';

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: COLORS.white,
      paddingHorizontal: 20,
    },
    headerText: {
      fontFamily: 'Gelasio-Bold',
      fontWeight: '700',
      fontSize: 16,
      color: COLORS.black
    },
    list: {
      paddingHorizontal: 20,
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
    },
    name: {
      fontFamily: 'NunitoSans-SemiBold',
      fontWeight: '600',
      fontSize: 14,
      color: COLORS.black3,
      marginBottom: 5,
    },
    price: {
      fontFamily: 'NunitoSans-Bold',
      fontWeight: '700',
      fontSize: 16,
      color: COLORS.black
    },
    icons: {
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    cartIconWrapper: {
      width: 34,
      height: 34,
      borderRadius: 10,
      backgroundColor: COLORS.gray5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    btn: {
      backgroundColor: COLORS.black,
      width: '90%',
      alignSelf: 'center',
      borderRadius: 8,
      position: 'absolute',
      bottom: 40,
    },
    btnText: {
      fontFamily: 'NunitoSans-SemiBold',
      fontWeight: '600',
      fontSize: 18,
      color: COLORS.white,
      paddingVertical: 13,
      textAlign: 'center'
    }
})

export default styles;