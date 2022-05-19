import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function CustomButton({
  title,
  titleStyle,
  btnStyle,
  handlePress,
  disabled,
}) {
  return (
    <TouchableOpacity
      style={btnStyle}
      onPress={handlePress}
      disabled={disabled}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
