import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface BBtnProps {
  onPress?(): void;
}

export const BackBtn = (props: BBtnProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.btn]}>
      <Icon name="arrow-back-outline" size={34} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    //borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
});
