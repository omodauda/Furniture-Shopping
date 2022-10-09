import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '@constants/Colors';
import Spinner from './Spinner';

export default function CustomButton({
  title,
  titleStyle,
  btnStyle,
  handlePress,
  disabled,
  loading,
  spinnerColor,
}) {
  const buttonDisabled = disabled || loading ? true : false;
  const renderSpinnerOrText = () => {
    const color = spinnerColor ? spinnerColor : COLORS.white;
    if (loading) {
      return <Spinner color={color} size={20} />;
    }
    return <Text style={titleStyle}>{title}</Text>;
  };
  return (
    <TouchableOpacity
      style={btnStyle}
      onPress={handlePress}
      disabled={buttonDisabled}>
      {renderSpinnerOrText()}
    </TouchableOpacity>
  );
}
