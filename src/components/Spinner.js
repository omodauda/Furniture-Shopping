import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';

export default function Spinner({size, style, color}) {
  const spinnerColor = color || '#FFFFFF';

  return (
    <View style={[styles.spinner, style]}>
      <ActivityIndicator size={size || 'large'} color={spinnerColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
