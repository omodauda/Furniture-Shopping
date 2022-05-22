import React from 'react';
import {TextInput} from 'react-native';

export default function CustomTextInput(props) {
  const {
    field: {name, onBlur, onChange, value},
    form: {setFieldTouched},
    ...inputProps
  } = props;
  return (
    <>
      <TextInput
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
    </>
  );
}
