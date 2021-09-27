import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../colors';

export interface StockCard {
  pink?: boolean;
  green?: boolean;
  stockName?: string;
  price?: string;
}

export const StockCard = (props: StockCard) => {
  return (
    <View
      style={[
        styles.stock,
        props.green && styles.green,
        props.pink && styles.pink,
        {width: '33%'},
      ]}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>
        {props.stockName ?? 'Name'}
      </Text>
      <Text style={{fontSize: 20}}>{props.price ?? '0'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stock: {
    height: 63,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  pink: {
    backgroundColor: COLORS.pink,
  },
  green: {
    backgroundColor: COLORS.green,
  },
});
