import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export const TopAlarms = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Text>Top Alarms</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
});
