import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import {TopGradient} from '../../components/TopGradient';
import Icon from 'react-native-vector-icons/Ionicons';

interface OProps {
  onPress?(): void;
  iconName:
    | 'person-outline'
    | 'document-text-outline'
    | 'information-circle-outline'
    | 'reader-outline';
  name?: string;
}

const Option = (props: OProps) => {
  return (
    <TouchableOpacity style={styles.opt} onPress={props.onPress}>
      <Icon name={props.iconName} size={25} style={{marginRight: 10}} />
      <Text style={styles.font}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export const SettingsM = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <TopGradient />
      <View style={{width: '90%'}}>
        <Text style={styles.h}>Settings:</Text>
      </View>
      <View style={{width: '90%', marginTop: '10%'}}>
        <Option name="My Account" iconName="person-outline" />
        <Option
          name="Feedback"
          iconName="document-text-outline"
          onPress={() => navigation.navigate('Feedback')}
        />
        <Option name="Help" iconName="information-circle-outline" />
        <Option name="Terms and Conditions" iconName="reader-outline" />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Welcome')}
        style={{marginTop: '20%'}}>
        <Text style={styles.font}>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{position: 'absolute', bottom: 20, width: '80%'}}>
        <Text style={[styles.font, {fontWeight: 'normal'}]}>Back</Text>
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
  },
  opt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  font: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
  },
});
