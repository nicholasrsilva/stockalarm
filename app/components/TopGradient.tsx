import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientProps {
  width?: number;
  height?: number;
  radius?: number;
}

export const TopGradient = (props: GradientProps) => {
  return (
    <LinearGradient
      colors={['#08B3FC', '#FFFFFF']}
      style={[styles.linearGradient]}>
      {/* <Text style={styles.buttonText}>Gradient</Text> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    width: 193,
    height: 199,
    left: -27,
    top: -32.5,
    opacity: 0.2,
    borderRadius: 200,
    borderColor: '#08B3FC',
  },
});
