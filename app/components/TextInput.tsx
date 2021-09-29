import React from 'react';
import {StyleSheet, TextInputProps} from 'react-native';
import {TextInput} from 'react-native';
import {COLORS} from '../colors';

interface TIProps extends TextInputProps {}

export const TextInputStandard = (props: TIProps) => {
  const {style, ...rest} = props;
  //console.log(style, 'Style Props');

  return <TextInput {...rest} style={[styles.ti, style]} />;
};

const styles = StyleSheet.create({
  ti: {
    //borderWidth: 1,
    height: 40,
    padding: 5,
    borderRadius: 5,
    //borderColor: COLORS.grey,
    backgroundColor: COLORS.grey,
    marginBottom: 5,
  },
});
