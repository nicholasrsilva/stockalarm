import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const InfoButton = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={{width: '80%', marginTop: 20}}>
        <Icon name="information-circle-outline" size={18} />
        <Text>
          Our average buying prices are calulated based on the stock or cryptos
          price history, it is not a buying or selling recommendation on our
          behalf.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{position: 'absolute', width: '80%', bottom: 20}}>
        <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
});
