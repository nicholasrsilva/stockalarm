import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../colors';
import {TopGradient} from '../../components/TopGradient';

interface CProps {
  pink?: boolean;
  green?: boolean;
  stockName?: string;
  target?: string;
  price?: string;
}

const Card = (props: CProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
      }}>
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
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 36, color: COLORS.blue_l, fontWeight: 'bold'}}>
          {props.target ?? '0'}
        </Text>
      </View>
    </View>
  );
};

export const TopAlarms = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <TopGradient />
      <View style={{width: '80%', marginTop: 20}}>
        <Text style={styles.h}>Most set alarms</Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Icon
            name="information-circle-outline"
            size={18}
            color={COLORS.grey}
          />
          <Text style={{maxWidth: 171}}>
            The most common alarms set by our users today.
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: 20,
          }}>
          <Text>Av. alarm price set by users</Text>
        </View>
      </View>
      <View style={{width: '80%'}}>
        <Card green stockName="RIOT" price="64" target="68" />
        <Card green stockName="CCIV" price="58" target="68" />
        <Card green stockName="APPL" price="130" target="140" />
        <Card green stockName="SAVA" price="50" target="50" />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{width: '80%', position: 'absolute', bottom: 20}}>
        <Text style={{fontSize: 20}}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  h: {
    fontSize: 24,
    lineHeight: 30,
  },
  stock: {
    height: 63,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  pink: {
    backgroundColor: COLORS.pink,
  },
  green: {
    backgroundColor: COLORS.green,
  },
});
