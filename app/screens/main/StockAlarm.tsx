import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../colors';
import {TopGradient} from '../../components/TopGradient';

interface AlarmProps {
  pink?: boolean;
  green?: boolean;
  stockName?: string;
  target?: string;
  price?: string;
}

const Alarm = (props: AlarmProps) => {
  const [swt, setSwitch] = useState(false);
  return (
    <View style={styles.alarmView}>
      <View
        style={[
          styles.stock,
          props.green && styles.green,
          props.pink && styles.pink,
          {width: '33%'},
        ]}>
        <Text style={{fontSize: 24}}>{props.stockName ?? 'Name'}</Text>
        <Text style={{fontSize: 18}}>{props.price ?? '0'}</Text>
      </View>
      <View style={[styles.switch, {width: '33%'}]}>
        <Switch value={swt} onValueChange={setSwitch} />
      </View>
      <View style={[styles.tgt, {width: '20%'}]}>
        <Text style={{fontSize: 18}}>Target:</Text>
        <Text style={{fontSize: 18}}>{props.target ?? '0'}</Text>
      </View>
    </View>
  );
};

export const StockPrice = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <TopGradient />
      <View style={{width: '70%', alignItems: 'flex-start'}}>
        <Text style={styles.h2}>Good Morning,</Text>
        <Text style={[styles.h2, {fontWeight: 'bold'}]}>Luisa</Text>
      </View>
      <View style={{width: '70%', alignItems: 'flex-start', marginTop: '10%'}}>
        <Text style={[styles.h2, {fontSize: 24}]}>Feeling ambitious?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profit Simulator')}>
          <Text style={[styles.h2, {fontSize: 18, color: COLORS.blue_d}]}>
            Check your profit simulator
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{width: '90%', alignItems: 'flex-start', marginVertical: 20}}>
        <Text style={[styles.h2, {fontSize: 24}]}>Your alarms:</Text>
      </View>
      <View
        style={{
          width: '90%',
          alignItems: 'center',
        }}>
        <Alarm pink stockName="AAPL" price="140" target="150" />
        <Alarm green stockName="PLTR" price="30" target="40" />
        <Alarm green stockName="CCIV" price="53" target="60" />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => navigation.navigate('New Alarm')}
          style={styles.menu}>
          <Text style={{fontSize: 24, maxWidth: 100, textAlign: 'center'}}>
            New Alarm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Top Alarms')}
          style={styles.menu}>
          <Text style={{fontSize: 24, maxWidth: 100, textAlign: 'center'}}>
            Top Alarms
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={styles.menu}>
          <Text style={{fontSize: 24, maxWidth: 100, textAlign: 'center'}}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  h2: {
    fontSize: 36,
    letterSpacing: -1,
    lineHeight: 45,
    //fontWeight: 'bold',
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
    textAlign: 'center',
  },
  alarmView: {
    //borderWidth: 1,
    width: '100%',
    // height: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
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
  switch: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 50,
    // backgroundColor: '#C4ECF9',
  },
  tgt: {
    // borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 5,
  },
  bottom: {
    height: 78,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.cyan,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  menu: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
