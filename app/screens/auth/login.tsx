import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../colors';
import {BackBtn} from '../../components/Backbtn';
import {ButtonStandard} from '../../components/Button';
import {TextInputStandard} from '../../components/TextInput';
// import LinearGradient from 'react-native-linear-gradient';
import {TopGradient} from '../../components/TopGradient';

export const Login = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={{width: '90%', flexDirection: 'row', alignItems: 'center'}}>
        <BackBtn />
        <Text style={styles.h2}>Login</Text>
      </View>
      {/* <LinearGradient
        colors={['#08B3FC', '#FFFFFF']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Gradient</Text>
      </LinearGradient> */}
      <TopGradient />
      <View style={{width: '80%', marginTop: '30%'}}>
        <Text style={styles.field}>Phone or Email</Text>
        <TextInputStandard autoCapitalize="none" autoCorrect={false} />
        <Text style={styles.field}>Password</Text>
        <TextInputStandard secureTextEntry />
        <ButtonStandard title="Login" />
      </View>
      <View style={{width: '80%', bottom: 20, position: 'absolute'}}>
        <Text style={{marginBottom: 10}}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.su}>
          <Text>Sign up</Text>
        </TouchableOpacity>
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
    fontSize: 36,
    letterSpacing: -1,
    lineHeight: 45,
  },
  field: {
    fontSize: 14,
    letterSpacing: -1,
  },
  su: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
  //   linearGradient: {
  //     position: 'absolute',
  //     width: 193,
  //     height: 199,
  //     left: -27,
  //     top: -32.5,
  //     opacity: 0.2,
  //     borderRadius: 200,
  //     borderColor: '#08B3FC',
  //   },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
