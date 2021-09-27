import React from 'react';
import {ActivityIndicator} from 'react-native';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {COLORS} from '../colors';

interface BProps extends TouchableOpacityProps {
  textStyle?: StyleProp<TextStyle>;
  loader?: boolean;
  title?: string;
}

export const ButtonStandard = (props: BProps) => {
  const {style, textStyle, loader, title, ...rest} = props;
  return (
    <TouchableOpacity {...rest} style={[style, styles.btn, styles.row]}>
      <Text style={[textStyle, styles.txt]}>{title ?? 'Button'}</Text>
      {loader && <ActivityIndicator style={{marginLeft: 5}} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    //borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    padding: 5,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: COLORS.blue_d,
  },
  txt: {
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
  },
});
