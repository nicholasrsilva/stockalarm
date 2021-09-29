import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView, Text} from 'react-native';
import {StockCard} from '../../components/StockCard';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../colors';

interface PCard {
  green?: boolean;
  pink?: boolean;
  investing?: string;
  loss?: string;
  gain?: string;
  stockName?: string;
  price?: string;
}

const ProfitCard = (props: PCard) => {
  var ptxt = 'Investing: ';
  return (
    <View style={{marginVertical: 20}}>
      <StockCard
        pink={props.pink}
        green={props.green}
        stockName={props.stockName}
        price={props.price}
      />
      {props.green && (
        <LinearGradient
          colors={[COLORS.green, '#FFFFFF']}
          style={styles.linearGradient}>
          <Text style={styles.gradTxt}>{ptxt + props.investing}</Text>
        </LinearGradient>
      )}
      {props.pink && (
        <LinearGradient
          colors={[COLORS.pink, '#FFFFFF']}
          style={styles.linearGradient}>
          <Text style={styles.gradTxt}>{ptxt + props.investing}</Text>
        </LinearGradient>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{}}>
          <Text style={{fontSize: 24}}>{props.loss}</Text>
          <Text style={{fontSize: 13}}>Max Loss</Text>
        </View>
        <View style={{}}>
          <Text style={{fontSize: 24}}>{props.gain}</Text>
          <Text style={{fontSize: 13}}>Max Gain</Text>
        </View>
      </View>
    </View>
  );
};

export const ProfitSimulator = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={{width: '80%', marginTop: 20}}>
        <Text style={styles.h}>Your profile simulator:</Text>
      </View>
      <View style={{width: '80%'}}>
        <ProfitCard
          pink
          stockName="APPL"
          price="140"
          investing="10000"
          loss="1000"
          gain="3000"
        />
        <ProfitCard
          green
          stockName="PLTR"
          price="30"
          investing="10000"
          loss="1000"
          gain="3000"
        />
        <ProfitCard
          green
          stockName="CCIV"
          price="53"
          investing="10000"
          loss="1000"
          gain="3000"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: '80%',
          position: 'absolute',
          bottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}>Home</Text>
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
  },
  linearGradient: {
    // position: 'absolute',
    //width: 193,
    height: 40,
    // left: -27,
    //top: -32.5,
    opacity: 0.5,
    borderRadius: 5,
    borderColor: '#08B3FC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
  },
  gradTxt: {
    color: '#000000',
    backgroundColor: 'transparent',
    opacity: 1,
  },
});
