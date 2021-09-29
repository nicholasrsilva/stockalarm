import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView, Text} from 'react-native';
import {ButtonStandard} from '../../components/Button';
import {TextInputStandard} from '../../components/TextInput';
import {TopGradient} from '../../components/TopGradient';

export const Feedback = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <TopGradient />
      <View style={{width: '80%'}}>
        <Text style={styles.h}>Feedback</Text>
      </View>
      <View style={{marginTop: '20%'}}>
        <Text style={styles.h1}>Have a comment or suggestion?</Text>
      </View>
      <View style={{marginTop: '20%', width: '80%'}}>
        <Text style={[styles.h1, {fontSize: 18}]}>Tell us below:</Text>
        <TextInputStandard multiline style={{height: 110}} />
        <ButtonStandard title="Submit" />
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
    fontSize: 36,
    lineHeight: 45,
  },
  h1: {
    fontSize: 24,
    lineHeight: 45,
  },
});
