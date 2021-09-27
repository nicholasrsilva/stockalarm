import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';

export const Welcome = ({navigation}: any) => {
  function onLoginPress() {
    navigation.navigate('Login');
  }
  function onSignupPress() {
    navigation.navigate('Register');
  }
  return (
    <SafeAreaView style={styles.main}>
      <View style={{width: '90%', alignItems: 'center', marginTop: '10%'}}>
        <Text style={styles.head}>Welcome!</Text>
      </View>
      <TouchableOpacity
        onPress={onLoginPress}
        style={{width: '90%', alignItems: 'center', marginTop: '30%'}}>
        <Text style={styles.h2}>Login</Text>
      </TouchableOpacity>
      <View style={{width: '90%', alignItems: 'center', marginTop: '30%'}}>
        <Text style={styles.h3}>Don't have an account?</Text>
        <TouchableOpacity onPress={onSignupPress}>
          <Text style={[styles.h2, {marginTop: '10%'}]}>Sign Up</Text>
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
  head: {
    fontSize: 48,
    letterSpacing: -1,
    fontWeight: 'bold',
    lineHeight: 60,
  },
  h2: {
    fontSize: 36,
    letterSpacing: -1,
    lineHeight: 45,
    //fontWeight: 'bold',
  },
  h3: {
    fontSize: 24,
    letterSpacing: -1,
    lineHeight: 45,
    //fontWeight: 'bold',
  },
});
