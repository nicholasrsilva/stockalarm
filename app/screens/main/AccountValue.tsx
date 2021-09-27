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

export const AccountValue = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <TopGradient />
      <View style={{width: '90%', alignItems: 'center'}}>
        <Text style={styles.h2}>Select your brokarage account</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          width: '80%',
          bottom: 20,
        }}>
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
    textAlign: 'center',
  },
});
