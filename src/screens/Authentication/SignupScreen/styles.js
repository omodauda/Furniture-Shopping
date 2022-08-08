import {StyleSheet} from 'react-native';
import COLORS from '@constants/Colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    paddingTop: 21,
  },
  header: {
    paddingHorizontal: 30,
  },
  headerText: {
    marginTop: 30,
    marginBottom: 25,
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontFamily: 'Gelasio-Regular',
    fontWeight: '400',
    fontSize: 30,
    lineHeight: 45,
    color: COLORS.black,
  },
  form: {
    backgroundColor: COLORS.white,
    width: '92%',
    paddingLeft: 30,
    paddingBottom: 40,
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  formControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: COLORS.gray5,
  },
  input: {
    height: 80,
    width: '90%',
  },
  inputText: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.black,
  },
  errorView: {
    width: '100%',
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '400',
  },
  iconWrapper: {
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  placeholderIcon: {
    marginRight: 25,
    alignSelf: 'flex-end',
  },
  forgetText: {
    marginTop: 35,
    marginBottom: 40,
  },
  link: {
    color: COLORS.black,
  },
  button: {
    width: '95%',
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 30,
    marginTop: 50,
  },
  buttonText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
  },
  signupText: {
    color: COLORS.white,
  },
  info: {
    textAlign: 'center',
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    color: COLORS.gray,
  },
});

export default styles;
