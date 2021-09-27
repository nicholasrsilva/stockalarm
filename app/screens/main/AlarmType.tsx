import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../colors';
import {TopGradient} from '../../components/TopGradient';

interface CardProps {
  title?: string;
  onPress?(): void;
}

const Card = (props: CardProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.card}>
      <Text style={styles.ctxt}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export const AlarmType = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <TopGradient />
      <View style={{width: '90%'}}>
        <Text style={styles.h2}>Alarm Type</Text>
      </View>
      <View style={{width: '60%', marginTop: '30%'}}>
        <Card
          title="Stock Price"
          onPress={() => navigation.navigate('Stock Price')}
        />
      </View>
      <View style={{width: '60%', marginTop: '30%'}}>
        <Card
          title="Account Value"
          onPress={() => navigation.navigate('Account Value')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  h2: {
    fontSize: 24,
    letterSpacing: -1,
    lineHeight: 45,
    fontWeight: 'bold',
  },
  card: {
    height: 93,
    borderRadius: 5,
    backgroundColor: COLORS.blue_l,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  ctxt: {
    color: 'white',
    fontSize: 25,
    letterSpacing: -1,
  },
});
